'use client';

import useCounter from '@/lib/useCounter';
import { Box, ImageList, ImageListItem } from '@mui/material';
import { useState } from 'react';
import GalleryPreview from './GalleryPreview';
import ImageButton from './ImageButton';
import LazyImage from './LazyImage';

export type GalleryProps = {
	imagePaths: string[];
};

const Gallery = ({ imagePaths }: GalleryProps) => {
	const {
		value: previewIndex,
		decrease: decreasePreviewIndex,
		increase: increasePreviewIndex,
		set: setPreviewIndex,
	} = useCounter(0, {
		min: 0,
		max: imagePaths.length - 1,
	});
	const [isPreviewMode, setIsPreviewMode] = useState(false);

	const previewImage = (imageIndex: number) => {
		setIsPreviewMode(true);
		setPreviewIndex(imageIndex);
	};

	return (
		<>
			<Box sx={{ display: 'flex', justifyContent: 'center' }}>
				<ImageList cols={3}>
					{imagePaths.map((imagePath, index) => (
						<ImageListItem key={`gallery-image-${index}`}>
							<ImageButton onClick={() => previewImage(index)}>
								<LazyImage
									src={imagePath}
									alt="Gallery image"
									width={250}
									height={250}
								/>
							</ImageButton>
						</ImageListItem>
					))}
				</ImageList>
			</Box>

			<GalleryPreview
				open={isPreviewMode}
				image={imagePaths[previewIndex]}
				disableNextButton={previewIndex >= imagePaths.length - 1}
				disablePreviousButton={previewIndex <= 0}
				onClose={() => setIsPreviewMode(false)}
				onPrevious={decreasePreviewIndex}
				onNext={increasePreviewIndex}
			/>
		</>
	);
};

export default Gallery;
