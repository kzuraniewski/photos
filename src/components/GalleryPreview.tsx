import { Box, Modal } from '@mui/material';
import LazyImage from './LazyImage';
import { Centered } from './layout-util';

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
			<Centered>
				<LazyImage
					src={image}
					alt="Gallery image preview"
					width={500}
					height={500}
					variant="contain"
					loader="spinner"
				/>
			</Centered>
		</Modal>
	);
};

export default GalleryPreview;
