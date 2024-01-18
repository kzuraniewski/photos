import { createContext, useContext } from 'react';
import { Counter } from './useCounter';

export type GalleryState = {
	images: string[];
	isPreviewMode: boolean;
	openPreview: (imageIndex?: number) => void;
	closePreview: () => void;
	imageIndexCounter: Counter;
};

export const GalleryContext = createContext<GalleryState>({
	images: [],
	isPreviewMode: false,
	openPreview: null!,
	closePreview: null!,
	imageIndexCounter: null!,
});

const useGalleryContext = () => useContext(GalleryContext);

export default useGalleryContext;
