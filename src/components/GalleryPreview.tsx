import { Modal } from '@mui/material';
import GalleryPreviewActions from './GalleryPreviewActions';
import GalleryPreviewImagePreload from './GalleryPreviewImagePreload';
import { Centered } from './layout-util';

export type GalleryPreviewProps = {
	images: string[];
	index: number;
	open?: boolean;
	disableNext?: boolean;
	disablePrevious?: boolean;
	onClose?: () => void;
	onNext?: () => void;
	onPrevious?: () => void;
};

const GalleryPreview = ({
	images,
	index,
	open = false,
	disablePrevious,
	disableNext,
	onPrevious,
	onNext,
	onClose,
}: GalleryPreviewProps) => {
	return (
		<Modal open={open} onClose={() => onClose?.()}>
			<Centered>
				<GalleryPreviewImagePreload
					images={images}
					selectedIndex={index}
				/>

				<GalleryPreviewActions
					onPrevious={onPrevious}
					onNext={onNext}
					disablePrevious={disablePrevious}
					disableNext={disableNext}
				/>
			</Centered>
		</Modal>
	);
};

export default GalleryPreview;
