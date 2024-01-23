import mergeSx from '@/lib/mergeSx';
import {
	Box,
	BoxProps,
	CircularProgress,
	CircularProgressProps,
	Skeleton,
	SkeletonProps,
} from '@mui/material';
import defaultsDeep from 'lodash.defaultsdeep';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { useMemo, useState } from 'react';

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
	fit = 'cover',
	style,
	onLoad,
	...props
}: LazyImageProps) => {
	const [isLoading, setIsLoading] = useState(true);

	const loadingElement = useMemo(() => {
		if (fallback === 'skeleton') return <ImageSkeleton />;
		if (fallback === 'spinner') return <ImageSpinner />;
	}, [fallback]);

	const mergedStyle = defaultsDeep(style, { objectFit: fit });

	const handleLoad: NextImageProps['onLoad'] = (event) => {
		setIsLoading(false);
		onLoad?.(event);
	};

	return (
		<Root>
			{isLoading && loadingElement}
			<NextImage style={mergedStyle} onLoad={handleLoad} {...props} />
		</Root>
	);
};

const Root = ({ sx: sxOverride, ...props }: BoxProps) => {
	const sx = mergeSx(sxOverride, {
		position: 'relative',
	});

	return <Box sx={sx} {...props} />;
};

const ImageSkeleton = (props: SkeletonProps) => {
	return (
		<Skeleton variant="rectangular" width="100%" height="100%" {...props} />
	);
};

const ImageSpinner = ({ sx: sxOverride, ...props }: CircularProgressProps) => {
	const sx = mergeSx(sxOverride, {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	});

	return <CircularProgress sx={sx} {...props} />;
};

export default LazyImage;
