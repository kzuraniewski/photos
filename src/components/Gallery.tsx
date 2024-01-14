'use client';

import { Box, ImageList, ImageListItem } from '@mui/material';
import GalleryImage from './GalleryImage';

export type GalleryProps = {
	imagePaths: string[];
};

const Gallery = ({ imagePaths }: GalleryProps) => {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center' }}>
			<ImageList cols={3}>
				{imagePaths.map((imagePath, index) => (
					<ImageListItem key={`gallery-image-${index}`}>
						<GalleryImage src={imagePath} />
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	);
};

export default Gallery;
