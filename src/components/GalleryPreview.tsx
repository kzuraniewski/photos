import { Box, Modal, CircularProgress } from '@mui/material';
import LoadingImage from './LoadingImage';

export type GalleryPreviewProps = {
	open: boolean;
	image: string;
	disablePreviousButton?: boolean;
	disableNextButton?: boolean;
	onClose?: () => void;
	onPrevious?: () => void;
	onNext?: () => void;
};

const GalleryPreview = ({
	open,
	image,
	disablePreviousButton = false,
	disableNextButton = false,
	onClose,
	onPrevious,
	onNext,
}: GalleryPreviewProps) => {
	return (
		<Modal open={open} onClose={onClose}>
			<Box
				sx={{
					width: 500,
					height: 500,
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<LoadingImage
					src={image}
					alt="Gallery image preview"
					fill
					style={{ objectFit: 'contain' }}
					loadingElement={<CircularProgress />}
				/>
			</Box>
		</Modal>
	);
};

export default GalleryPreview;
