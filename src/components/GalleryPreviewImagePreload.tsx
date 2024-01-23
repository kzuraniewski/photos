import useGalleryContext from '@/lib/useGalleryContext';
import LazyImage from './LazyImage';
import { VisibilityToggle } from './layout-util';

const GalleryPreviewImagePreload = () => {
	const { images, imageIndexCounter } = useGalleryContext();

	return (
		<div>
			{images.map((image, index) => (
				<VisibilityToggle
					key={`carousel-image-holder-${index}`}
					hidden={index !== imageIndexCounter.value}
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
				</VisibilityToggle>
			))}
		</div>
	);
};

export default GalleryPreviewImagePreload;
