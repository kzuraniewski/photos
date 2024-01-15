import { ButtonBase, Skeleton } from '@mui/material';
import LoadingImage from './LoadingImage';

export type GalleryImageProps = {
	src: string;
	onClick: () => void;
};

const GalleryImage = ({ src, onClick }: GalleryImageProps) => {
	return (
		<ButtonBase
			onClick={onClick}
			sx={{
				transition: '0.2s',
				'&:hover': { filter: 'brightness(0.85)' },
			}}
		>
			<LoadingImage
				src={src}
				alt="Gallery image"
				width={250}
				height={250}
				loadingElement={
					<Skeleton
						variant="rectangular"
						width="100%"
						height="100%"
					/>
				}
			/>
		</ButtonBase>
	);
};

export default GalleryImage;
