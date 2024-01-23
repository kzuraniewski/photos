import mergeSx from '@/lib/mergeSx';
import { Stack, StackProps } from '@mui/material';
import LazyImage from './LazyImage';
import { ImageButton } from './layout-util';

const imageSizes = {
	default: { width: 60, height: 80 },
	big: { width: 80, height: 100 },
};

export type ImagePaginationProps = {
	images: string[];
	activeIndex: number;
	onImageClick?: (index: number) => void;
};

const ImagePagination = ({
	images,
	activeIndex,
	onImageClick,
}: ImagePaginationProps) => {
	const getImageDimensions = (index: number) => {
		return index === activeIndex ? imageSizes.big : imageSizes.default;
	};

	return (
		<RootStack>
			{images.map((image, index) => (
				<ImageButton
					key={`pagination-item-${index}`}
					onClick={() => onImageClick?.(index)}
				>
					<LazyImage
						src={image}
						alt="Pagination image"
						priority={index === activeIndex}
						style={getImageDimensions(index)}
						{...imageSizes.big}
					/>
				</ImageButton>
			))}
		</RootStack>
	);
};

const RootStack = ({ sx: sxOverride, ...props }: StackProps) => {
	const sx = mergeSx(sxOverride, {
		marginTop: 4,
		height: imageSizes.big.height,
	});

	return (
		<Stack gap={1} direction="row" alignItems="center" sx={sx} {...props} />
	);
};

export default ImagePagination;
