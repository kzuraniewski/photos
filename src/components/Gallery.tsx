'use client';

import useCounter from '@/lib/useCounter';
import { useState } from 'react';
import GalleryImageList from './GalleryImageList';
import GalleryPreview from './GalleryPreview';

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

			<GalleryPreview
				images={images}
				index={previewIndex}
				open={isPreviewMode}
				onClose={() => setIsPreviewMode(false)}
				onNext={increasePreviewIndex}
				disableNext={isPreviewRightmost}
				onPrevious={decreasePreviewIndex}
				disablePrevious={isPreviewLeftmost}
			/>
		</>
	);
};

export default Gallery;
