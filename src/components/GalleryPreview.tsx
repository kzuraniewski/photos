import useGalleryContext from '@/lib/useGalleryContext';
import { Box, Modal } from '@mui/material';
import { SystemStyleObject } from '@mui/system';
import GalleryPreviewActions from './GalleryPreviewActions';
import GalleryPreviewImagePreload from './GalleryPreviewImagePreload';
import GalleryPreviewPagination from './GalleryPreviewPagination';
import { centered } from './layout-util';

const GalleryPreview = () => {
	const { imageIndexCounter, isPreviewMode, closePreview } =
		useGalleryContext();

	return (
		<Modal open={isPreviewMode} onClose={closePreview}>
			<Box sx={background}>
				<Box sx={panel}>
					<GalleryPreviewImagePreload />

					<GalleryPreviewActions
						onPrevious={imageIndexCounter.decrease}
						onNext={imageIndexCounter.increase}
						disablePrevious={imageIndexCounter.atMin}
						disableNext={imageIndexCounter.atMax}
					/>

					<GalleryPreviewPagination />
				</Box>
			</Box>
		</Modal>
	);
};

const background: SystemStyleObject = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100%',
	height: '100%',
	backdropFilter: 'blur(3px)',
	pointerEvents: 'none',
};

const panel: SystemStyleObject = {
	...centered,
	pointerEvents: 'auto',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
};

export default GalleryPreview;
