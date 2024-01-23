import mergeSx from '@/lib/mergeSx';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, BoxProps, IconButton } from '@mui/material';

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

const Root = ({ sx: sxOverride, ...props }: BoxProps) => {
	const sx = mergeSx(sxOverride, {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		display: 'flex',
		justifyContent: 'space-between',
		width: 'calc(100% + 50px)',
	});

	return <Box sx={sx} {...props} />;
};

export default GalleryPreviewActions;
