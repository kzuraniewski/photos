import { SxProps, Theme } from '@mui/material';

const mergeSx = (
	sx: SxProps<Theme> | undefined,
	defaultSx: SxProps
): SxProps => {
	return Array(defaultSx)
		.concat(Array.isArray(sx) ? sx : [sx])
		.flat();
};

export default mergeSx;
