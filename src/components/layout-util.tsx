import { Box, ButtonBase, SxProps } from '@mui/material';
import defaultsDeep from 'lodash.defaultsdeep';
import React, { FunctionComponent } from 'react';

/**
 * Create a pre-styled MUI component by providing custom style attributes using the `sx` prop.
 */
// TODO: verify if still viable after MUI v6 releases
const sx = <TComponent extends FunctionComponent<{ sx: SxProps }>>(
	Component: TComponent,
	customSx: SxProps
) =>
	((props: React.ComponentProps<TComponent>) => {
		return <Component {...defaultsDeep({ ...props }, { sx: customSx })} />;
	}) as TComponent;

export default sx;

/// Global util components

export const Centered = sx(Box, {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
});

export const ImageButton = sx(ButtonBase, {
	position: 'relative',
	transition: '0.2s',
	overflow: 'hidden',
	'&:hover': { filter: 'brightness(0.85)' },
});
