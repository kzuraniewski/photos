import mergeSx from '@/lib/mergeSx';
import useGalleryContext from '@/lib/useGalleryContext';
import { Box, BoxProps, Modal } from '@mui/material';
import GalleryPreviewActions from './GalleryPreviewActions';
import GalleryPreviewImagePreload from './GalleryPreviewImagePreload';
import GalleryPreviewPagination from './GalleryPreviewPagination';

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

const Background = ({ sx: sxOverride, ...props }: BoxProps) => {
	const sx = mergeSx(sxOverride, {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
		backdropFilter: 'blur(3px)',
		pointerEvents: 'none',
	});

	return <Box sx={sx} {...props} />;
};

const Panel = ({ sx: sxOverride, ...props }: BoxProps) => {
	const sx = mergeSx(sxOverride, {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		pointerEvents: 'auto',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	});

	return <Box sx={sx} {...props} />;
};

export default GalleryPreview;
