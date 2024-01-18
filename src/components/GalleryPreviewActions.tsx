import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButton } from '@mui/material';
import sx, { Centered } from './layout-util';

const Root = sx(Centered, {
	display: 'flex',
	justifyContent: 'space-between',
	width: 'calc(100% + 50px)',
});

export type GalleryPreviewActionsProps = {
	disablePrevious?: boolean;
	disableNext?: boolean;
	onPrevious?: () => void;
	onNext?: () => void;
};

const GalleryPreviewActions = ({
	disablePrevious,
	disableNext,
	onPrevious,
	onNext,
}: GalleryPreviewActionsProps) => {
	return (
		<Root>
			<IconButton onClick={onPrevious} disabled={disablePrevious}>
				<ChevronLeftIcon />
			</IconButton>

			<IconButton onClick={onNext} disabled={disableNext}>
				<ChevronRightIcon />
			</IconButton>
		</Root>
	);
};

export default GalleryPreviewActions;
