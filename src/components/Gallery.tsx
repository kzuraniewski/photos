'use client';

import useCounter from '@/lib/useCounter';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, IconButton, Modal } from '@mui/material';
import { useState } from 'react';
import GalleryImageList from './GalleryImageList';
import LazyImage from './LazyImage';
import { Centered } from './layout-util';

export type GalleryProps = {
	images: string[];
};

const Gallery = ({ images }: GalleryProps) => {
	const {
		value: previewIndex,
		atMin: isPreviewLeftmost,
		atMax: isPreviewRightmost,
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
			<GalleryImageList images={images} onSelect={previewImage} />

			<Modal open={isPreviewMode} onClose={() => setIsPreviewMode(false)}>
				<Centered>
					{images.map((image, index) => (
						<Box
							key={`carousel-image-holder-${index}`}
							display={index === previewIndex ? 'block' : 'none'}
						>
							<LazyImage
								src={image}
								alt="Gallery image preview"
								width={500}
								height={500}
								priority={index === previewIndex}
								variant="contain"
								loader="spinner"
							/>
						</Box>
					))}

					<Centered
						display="flex"
						justifyContent="space-between"
						width="calc(100% + 50px)"
					>
						<IconButton
							onClick={decreasePreviewIndex}
							disabled={isPreviewLeftmost}
						>
							<ChevronLeftIcon />
						</IconButton>

						<IconButton
							onClick={increasePreviewIndex}
							disabled={isPreviewRightmost}
						>
							<ChevronRightIcon />
						</IconButton>
					</Centered>
				</Centered>
			</Modal>
		</>
	);
};

export default Gallery;
