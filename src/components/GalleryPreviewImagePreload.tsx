import useGalleryContext from '@/lib/useGalleryContext';
import { Box } from '@mui/material';
import LazyImage from './LazyImage';

const GalleryPreviewImagePreload = () => {
	const { images, imageIndexCounter } = useGalleryContext();

	return (
		<div>
			{images.map((image, index) => (
				<Box
					key={`carousel-image-holder-${index}`}
					display={
						index === imageIndexCounter.value ? 'block' : 'none'
					}
				>
					<LazyImage
						src={image}
						alt="Gallery image preview"
						width={500}
						height={500}
						priority={index === imageIndexCounter.value}
						fit="contain"
						fallback="spinner"
					/>
				</Box>
			))}
		</div>
	);
};

export default GalleryPreviewImagePreload;
