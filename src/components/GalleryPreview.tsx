import { Box, Modal } from '@mui/material';
import Image from 'next/image';

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
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: 500,
					height: 500,
				}}
			>
				<Image
					src={image}
					alt="Gallery image preview"
					fill
					style={{ objectFit: 'contain' }}
				/>
			</Box>
		</Modal>
	);
};

export default GalleryPreview;
