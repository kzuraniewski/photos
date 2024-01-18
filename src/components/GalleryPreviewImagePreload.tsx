import { Box } from '@mui/material';
import LazyImage from './LazyImage';

export type GalleryPreviewImagePreloadProps = {
	images: string[];
	selectedIndex: number;
};

const GalleryPreviewImagePreload = ({
	images,
	selectedIndex,
}: GalleryPreviewImagePreloadProps) => {
	return (
		<div>
			{images.map((image, index) => (
				<Box
					key={`carousel-image-holder-${index}`}
					display={index === selectedIndex ? 'block' : 'none'}
				>
					<LazyImage
						src={image}
						alt="Gallery image preview"
						width={500}
						height={500}
						priority={index === selectedIndex}
						variant="contain"
						loader="spinner"
					/>
				</Box>
			))}
		</div>
	);
};

export default GalleryPreviewImagePreload;
