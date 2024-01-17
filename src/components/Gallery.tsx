'use client';

import useCounter from '@/lib/useCounter';
import { Box, ImageList, ImageListItem } from '@mui/material';
import { useState } from 'react';
import GalleryPreview from './GalleryPreview';
import ImageButton from './ImageButton';
import LazyImage from './LazyImage';
import { Centered } from './layout-util';

export type GalleryProps = {
	images: string[];
};

const Gallery = ({ images }: GalleryProps) => {
	const {
		value: previewIndex,
		decrease: decreasePreviewIndex,
		increase: increasePreviewIndex,
		set: setPreviewIndex,
	} = useCounter(0, {
		min: 0,
		max: images.length - 1,
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
					{images.map((imagePath, index) => (
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
				image={images[previewIndex]}
				disableNextButton={previewIndex >= images.length - 1}
				disablePreviousButton={previewIndex <= 0}
				onClose={() => setIsPreviewMode(false)}
				onPrevious={decreasePreviewIndex}
				onNext={increasePreviewIndex}
			/>
		</>
	);
};

export default Gallery;
