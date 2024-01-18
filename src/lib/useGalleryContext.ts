import { createContext, useContext } from 'react';
import { Counter } from './useCounter';

export type GalleryState = {
	images: string[];
	isPreviewMode: boolean;
	previewImage: (imageIndex?: number) => void;
	closePreview: () => void;
	imageIndexCounter: Counter;
};

export const GalleryContext = createContext<GalleryState>({
	images: [],
	isPreviewMode: false,
	previewImage: null!,
	closePreview: null!,
	imageIndexCounter: null!,
});

const useGalleryContext = () => useContext(GalleryContext);

export default useGalleryContext;
