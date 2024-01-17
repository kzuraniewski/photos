import { Box, CircularProgress, Skeleton } from '@mui/material';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import React, { useMemo, useState } from 'react';

export type LazyImageLoader = 'skeleton' | 'spinner';

export type LazyImageVariant = 'cover' | 'contain';

export type ImageProps = Pick<
	NextImageProps,
	'src' | 'alt' | 'width' | 'height'
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
	loader = 'skeleton',
	variant = 'cover',
}: ImageProps) => {
	const [isLoading, setIsLoading] = useState(true);

	const loadingElement = useMemo(() => {
		if (loader === 'skeleton')
			return (
				<Skeleton variant="rectangular" width="100%" height="100%" />
			);

		if (loader === 'spinner')
			return (
				<CircularProgress
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
					}}
				/>
			);
	}, [loader]);

	return (
		<Box position="relative">
			{isLoading && loadingElement}
			<NextImage
				src={src}
				alt={alt}
				width={width}
				height={height}
				style={{ objectFit: variant }}
				onLoad={() => setIsLoading(false)}
			/>
		</Box>
	);
};

export default LazyImage;
