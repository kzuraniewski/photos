import mergeSx from '@/lib/mergeSx';
import useGalleryContext from '@/lib/useGalleryContext';
import { Stack, StackProps } from '@mui/material';
import LazyImage from './LazyImage';
import { ImageButton } from './layout-util';

const imageSizes = {
	default: { width: 60, height: 80 },
	big: { width: 80, height: 100 },
};

const GalleryPreviewPagination = () => {
	const { images, imageIndexCounter, previewImage } = useGalleryContext();

	const getImageDimensions = (index: number) => {
		return index === imageIndexCounter.value
			? imageSizes.big
			: imageSizes.default;
	};

	return (
		<RootStack>
			{images.map((image, index) => (
				<ImageButton
					key={`pagination-item-${index}`}
					onClick={() => previewImage(index)}
				>
					<LazyImage
						src={image}
						alt="Pagination image"
						priority={index === imageIndexCounter.value}
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

export default GalleryPreviewPagination;
