import { Box, Skeleton } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

const IMAGE_SIZE = 250;

export type GalleryImageProps = {
	src: string;
};

const GalleryImage = ({ src }: GalleryImageProps) => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<Box
			sx={{ position: 'relative', width: IMAGE_SIZE, height: IMAGE_SIZE }}
		>
			{isLoading && (
				<Skeleton
					variant="rectangular"
					width={IMAGE_SIZE}
					height={IMAGE_SIZE}
				/>
			)}

			<Image
				src={src}
				alt="Gallery image"
				fill
				style={{ objectFit: 'cover' }}
				onLoad={() => setIsLoading(false)}
			/>
		</Box>
	);
};

export default GalleryImage;
