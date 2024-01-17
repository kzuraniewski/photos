import { Box, BoxProps, SxProps } from '@mui/material';
import defaultsDeep from 'lodash.defaultsdeep';

// simplified @mui/system/createBox
const createBox = (customSx: SxProps) => (props: BoxProps) => {
	return <Box {...defaultsDeep({ ...props }, { sx: customSx })} />;
};

export const Centered = createBox({
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
});
