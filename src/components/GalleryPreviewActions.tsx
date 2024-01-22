import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, IconButton } from '@mui/material';
import { SystemStyleObject } from '@mui/system';
import { centered } from './layout-util';

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
		<Box sx={root}>
			<IconButton onClick={onPrevious} disabled={disablePrevious}>
				<ChevronLeftIcon />
			</IconButton>

			<IconButton onClick={onNext} disabled={disableNext}>
				<ChevronRightIcon />
			</IconButton>
		</Box>
	);
};

const root: SystemStyleObject = {
	...centered,
	display: 'flex',
	justifyContent: 'space-between',
	width: 'calc(100% + 50px)',
};

export default GalleryPreviewActions;
