'use client';

import { Box, ImageList, ImageListItem } from '@mui/material';
import GalleryImage from './GalleryImage';

export type GalleryProps = {
	images: string[];
};

const Gallery = ({ images }: GalleryProps) => {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center' }}>
			<ImageList cols={3}>
				{images.map((path, index) => (
					<ImageListItem key={`gallery-image-${index}`}>
						<GalleryImage src={path} />
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	);
};

export default Gallery;
