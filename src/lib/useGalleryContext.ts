import { createContext, useContext } from 'react';
import { Counter } from './useCounter';

export type GalleryState = {
	images: string[];
	isPreviewMode: boolean;
	previewImage: (imageIndex?: number) => void;
	closePreview: () => void;
	imageIndexCounter: Counter;
};

export const GalleryContext = createContext<GalleryState | null>(null);

const useGalleryContext = () => {
	const context = useContext(GalleryContext);

	if (!context) {
		throw new Error(
			'useGalleryContext must be used within a GalleryContext.Provider'
		);
	}

	return context;
};

export default useGalleryContext;
