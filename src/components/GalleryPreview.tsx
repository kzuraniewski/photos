import useGalleryContext from '@/lib/useGalleryContext';
import { Box, Modal } from '@mui/material';
import GalleryPreviewActions from './GalleryPreviewActions';
import GalleryPreviewImagePreload from './GalleryPreviewImagePreload';
import GalleryPreviewPagination from './GalleryPreviewPagination';
import sx, { Centered } from './layout-util';

const Background = sx(Box, {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100%',
	height: '100%',
	backdropFilter: 'blur(3px)',
	pointerEvents: 'none',
});

const Panel = sx(Centered, {
	pointerEvents: 'auto',
});

const GalleryPreview = () => {
	const { imageIndexCounter, isPreviewMode, closePreview } =
		useGalleryContext();

	return (
		<Modal open={isPreviewMode} onClose={closePreview}>
			<Background>
				<Panel>
					<GalleryPreviewImagePreload />

					<GalleryPreviewActions
						onPrevious={imageIndexCounter.decrease}
						onNext={imageIndexCounter.increase}
						disablePrevious={imageIndexCounter.atMin}
						disableNext={imageIndexCounter.atMax}
					/>

					<GalleryPreviewPagination />
				</Panel>
			</Background>
		</Modal>
	);
};

export default GalleryPreview;
