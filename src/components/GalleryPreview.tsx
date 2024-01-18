import useGalleryContext from '@/lib/useGalleryContext';
import { Modal } from '@mui/material';
import GalleryPreviewActions from './GalleryPreviewActions';
import GalleryPreviewImagePreload from './GalleryPreviewImagePreload';
import { Centered } from './layout-util';

const GalleryPreview = () => {
	const { imageIndexCounter, isPreviewMode, closePreview } =
		useGalleryContext();

	return (
		<Modal open={isPreviewMode} onClose={closePreview}>
			<Centered>
				<GalleryPreviewImagePreload />

				<GalleryPreviewActions
					onPrevious={imageIndexCounter.decrease}
					onNext={imageIndexCounter.increase}
					disablePrevious={imageIndexCounter.atMin}
					disableNext={imageIndexCounter.atMax}
				/>
			</Centered>
		</Modal>
	);
};

export default GalleryPreview;
