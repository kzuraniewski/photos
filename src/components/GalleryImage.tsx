import { ButtonBase, Skeleton } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

export type GalleryImageProps = {
	src: string;
};

const GalleryImage = ({ src }: GalleryImageProps) => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<div>
			{isLoading && <Skeleton variant="rectangular" height="100%" />}

			<ButtonBase
				disabled={isLoading}
				sx={{
					transition: '0.2s',
					'&:hover': { filter: 'brightness(0.85)' },
				}}
			>
				<Image
					src={src}
					alt="Gallery image"
					width={250}
					height={250}
					style={{ objectFit: 'cover' }}
					onLoad={() => setIsLoading(false)}
				/>
			</ButtonBase>
		</div>
	);
};

export default GalleryImage;
