import { ButtonBase } from '@mui/material';
import React from 'react';

export type ImageButtonProps = {
	onClick?: () => void;
	children?: React.ReactNode;
};

const ImageButton = ({ onClick, children }: ImageButtonProps) => {
	return (
		<ButtonBase
			onClick={onClick}
			sx={{
				position: 'relative',
				transition: '0.2s',
				'&:hover': { filter: 'brightness(0.85)' },
			}}
		>
			{children}
		</ButtonBase>
	);
};

export default ImageButton;
