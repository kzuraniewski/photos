'use client';

import { createTheme } from '@mui/material';

const theme = createTheme({
	components: {
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true,
			},
		},
	},
});

export default theme;
