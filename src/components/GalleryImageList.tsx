import { Box, ButtonBase, ImageList, ImageListItem } from '@mui/material';
import LazyImage from './LazyImage';
import sx from './layout-util';

const Root = sx(Box, { display: 'flex', justifyContent: 'center' });

const ImageButton = sx(ButtonBase, {
	position: 'relative',
	transition: '0.2s',
	'&:hover': { filter: 'brightness(0.85)' },
});

export type GalleryImageListProps = {
	images: string[];
	onSelect?: (index: number) => void;
};

const GalleryImageList = ({ images, onSelect }: GalleryImageListProps) => {
	return (
		<Root>
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
		</Root>
	);
};

export default GalleryImageList;
