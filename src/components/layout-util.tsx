import mergeSx from '@/lib/mergeSx';
import { Box, BoxProps, ButtonBase, ButtonBaseProps } from '@mui/material';

export type ImageButtonProps = ButtonBaseProps;

export const ImageButton = ({ sx: sxOverride, ...props }: ImageButtonProps) => {
	const sx = mergeSx(sxOverride, {
		position: 'relative',
		transition: '0.2s',
		overflow: 'hidden',
		'&:hover': {
			filter: 'brightness(0.85)',
		},
	});

	return <ButtonBase sx={sx} {...props} />;
};

export type VisibilityToggleProps = BoxProps & {
	hidden?: boolean;
};

export const VisibilityToggle = ({
	hidden,
	sx: sxOverride,
	...props
}: VisibilityToggleProps) => {
	const sx = mergeSx(sxOverride, { display: hidden ? 'none' : 'block' });

	return <Box sx={sx} {...props} />;
};
