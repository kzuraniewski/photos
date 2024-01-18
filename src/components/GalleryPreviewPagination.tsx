import useGalleryContext from '@/lib/useGalleryContext';
import { Stack } from '@mui/material';
import LazyImage from './LazyImage';
import sx, { ImageButton } from './layout-util';

const imageSizes = {
	default: { width: 60, height: 80 },
	big: { width: 80, height: 100 },
};

const RootStack = sx(Stack, {
	marginTop: 4,
	height: imageSizes.big.height,
});

export type GalleryPreviewPaginationProps = {};

const GalleryPreviewPagination = ({}: GalleryPreviewPaginationProps) => {
	const { images, imageIndexCounter, previewImage } = useGalleryContext();

	const getImageSize = (index: number) => {
		return index === imageIndexCounter.value
			? imageSizes.big
			: imageSizes.default;
	};

	return (
		<RootStack gap={1} direction="row" alignItems="center">
			{images.map((image, index) => (
				<ImageButton
					onClick={() => previewImage(index)}
					sx={getImageSize(index)}
				>
					<LazyImage
						src={image}
						alt="Pagination image"
						priority={index === imageIndexCounter.value}
						style={getImageSize(index)}
						{...imageSizes.big}
					/>
				</ImageButton>
			))}
		</RootStack>
	);
};

export default GalleryPreviewPagination;
