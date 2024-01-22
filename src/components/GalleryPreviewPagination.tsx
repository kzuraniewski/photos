import useGalleryContext from '@/lib/useGalleryContext';
import { ButtonBase, Stack } from '@mui/material';
import { SystemStyleObject } from '@mui/system';
import LazyImage from './LazyImage';
import { imageButton } from './layout-util';

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
		<Stack sx={rootStack} gap={1} direction="row" alignItems="center">
			{images.map((image, index) => (
				<ButtonBase
					key={`pagination-item-${index}`}
					onClick={() => previewImage(index)}
					sx={[imageButton, getImageDimensions(index)]}
				>
					<LazyImage
						src={image}
						alt="Pagination image"
						priority={index === imageIndexCounter.value}
						style={getImageDimensions(index)}
						{...imageSizes.big}
					/>
				</ButtonBase>
			))}
		</Stack>
	);
};

const rootStack: SystemStyleObject = {
	marginTop: 4,
	height: imageSizes.big.height,
};

export default GalleryPreviewPagination;
