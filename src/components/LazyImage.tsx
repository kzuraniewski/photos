import { Box, CircularProgress, Skeleton } from '@mui/material';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { useMemo, useState } from 'react';
import { Centered } from './layout-util';

export type LazyImageLoader = 'skeleton' | 'spinner';

export type LazyImageVariant = 'cover' | 'contain';

export type ImageProps = Pick<
	NextImageProps,
	'src' | 'alt' | 'width' | 'height' | 'priority'
> & {
	/** @default 'skeleton' */
	loader?: LazyImageLoader;
	/** @default 'cover' */
	variant?: LazyImageVariant;
};

const LazyImage = ({
	src,
	alt,
	width,
	height,
	priority,
	loader = 'skeleton',
	variant = 'cover',
}: ImageProps) => {
	const [isLoading, setIsLoading] = useState(true);

	// prettier-ignore
	const loadingElement = useMemo(() => {
		if (loader === 'skeleton')
			return <Skeleton variant="rectangular" width="100%" height="100%" />;

		if (loader === 'spinner')
			return <Centered component={CircularProgress} />;
	}, [loader]);

	return (
		<Box position="relative">
			{isLoading && loadingElement}
			<NextImage
				src={src}
				alt={alt}
				width={width}
				height={height}
				priority={priority}
				style={{ objectFit: variant }}
				onLoad={() => setIsLoading(false)}
			/>
		</Box>
	);
};

export default LazyImage;
