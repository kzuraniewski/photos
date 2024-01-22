import { SystemStyleObject } from '@mui/system';

export const centered: SystemStyleObject = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
};

export const imageButton: SystemStyleObject = {
	position: 'relative',
	transition: '0.2s',
	overflow: 'hidden',
	'&:hover': {
		filter: 'brightness(0.85)',
	},
};
