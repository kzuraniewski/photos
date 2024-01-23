'use client';

import useCounter from '@/lib/useCounter';
import { GalleryContext } from '@/lib/useGalleryContext';
import { useState } from 'react';
import GalleryPreview from './GalleryPreview';
import ImageList from './ImageList';

export type GalleryProps = {
	images: string[];
};

const Gallery = ({ images }: GalleryProps) => {
	const imageIndexCounter = useCounter(0, {
		min: 0,
		max: images.length - 1,
	});
	const [isPreviewMode, setIsPreviewMode] = useState(false);

	const previewImage = (imageIndex?: number) => {
		setIsPreviewMode(true);
		if (imageIndex !== undefined) imageIndexCounter.set(imageIndex);
	};

	const closePreview = () => setIsPreviewMode(false);

	return (
		<GalleryContext.Provider
			value={{
				images,
				imageIndexCounter,
				isPreviewMode,
				previewImage,
				closePreview,
			}}
		>
			<ImageList images={images} onImageClick={previewImage} />

			<GalleryPreview />
		</GalleryContext.Provider>
	);
};

export default Gallery;
