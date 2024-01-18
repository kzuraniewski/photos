import { Box, ImageList, ImageListItem } from '@mui/material';
import ImageButton from './ImageButton';
import LazyImage from './LazyImage';

export type GalleryImageListProps = {
	images: string[];
	onSelect?: (index: number) => void;
};

const GalleryImageList = ({ images, onSelect }: GalleryImageListProps) => {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center' }}>
			<ImageList cols={3}>
				{images.map((imagePath, index) => (
					<ImageListItem key={`gallery-image-${index}`}>
						<ImageButton onClick={() => onSelect?.(index)}>
							<LazyImage
								src={imagePath}
								alt="Gallery image"
								width={250}
								height={250}
							/>
						</ImageButton>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	);
};

export default GalleryImageList;
