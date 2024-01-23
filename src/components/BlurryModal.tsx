import mergeSx from '@/lib/mergeSx';
import { Box, BoxProps, Modal } from '@mui/material';

export type BlurryModalProps = {
	open?: boolean;
	children?: React.ReactNode;
	onClose?: () => void;
};

const BlurryModal = ({
	open = false,
	children,
	onClose,
}: BlurryModalProps) => {
	return (
		<Modal open={open} onClose={onClose}>
			<Background>
				<Panel>{children}</Panel>
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

export default BlurryModal;
