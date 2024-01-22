import { Box, CircularProgress, Skeleton } from '@mui/material';
import { SystemStyleObject } from '@mui/system';
import defaultsDeep from 'lodash.defaultsdeep';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { useMemo, useState } from 'react';
import { centered } from './layout-util';

export type LazyImageFallback = 'skeleton' | 'spinner';

export type LazyImageFit = 'cover' | 'contain';

export type LazyImageProps = NextImageProps & {
	/** @default 'skeleton' */
	fallback?: LazyImageFallback;
	/** @default 'cover' */
	fit?: LazyImageFit;
};

const LazyImage = ({
	fallback = 'skeleton',
	fit: variant = 'cover',
	...props
}: LazyImageProps) => {
	const [isLoading, setIsLoading] = useState(true);

	// prettier-ignore
	const loadingElement = useMemo(() => {
		if (fallback === 'skeleton')
			return <Skeleton variant="rectangular" width="100%" height="100%" />;

		if (fallback === 'spinner')
			return <Box sx={centered} component={CircularProgress} />;
	}, [fallback]);

	const mergedStyle = defaultsDeep(props.style, { objectFit: variant });

	const handleLoad: NextImageProps['onLoad'] = (event) => {
		setIsLoading(false);
		props.onLoad?.(event);
	};

	return (
		<Box sx={root}>
			{isLoading && loadingElement}
			<NextImage {...props} style={mergedStyle} onLoad={handleLoad} />
		</Box>
	);
};

const root: SystemStyleObject = {
	position: 'relative',
};

export default LazyImage;
