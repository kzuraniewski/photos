import { Box } from '@mui/material';
import Image from 'next/image';

export type GalleryImageProps = {
	src: string;
};

const GalleryImage = ({ src }: GalleryImageProps) => {
	return (
		<Box sx={{ position: 'relative', width: 250, height: 250 }}>
			<Image
				src={src}
				alt="Gallery image"
				fill
				style={{ objectFit: 'cover' }}
			/>
		</Box>
	);
};

export default GalleryImage;
