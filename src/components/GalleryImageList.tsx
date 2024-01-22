import { Box, ButtonBase, ImageList, ImageListItem } from '@mui/material';
import { SystemStyleObject } from '@mui/system';
import LazyImage from './LazyImage';
import { imageButton } from './layout-util';

export type GalleryImageListProps = {
	images: string[];
	onSelect?: (index: number) => void;
};

const GalleryImageList = ({ images, onSelect }: GalleryImageListProps) => {
	return (
		<Box sx={root}>
			<ImageList cols={3}>
				{images.map((imagePath, index) => (
					<ImageListItem key={`gallery-image-${index}`}>
						<ButtonBase
							sx={imageButton}
							onClick={() => onSelect?.(index)}
						>
							<LazyImage
								src={imagePath}
								alt="Gallery image"
								width={250}
								height={250}
							/>
						</ButtonBase>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	);
};

const root: SystemStyleObject = {
	display: 'flex',
	justifyContent: 'center',
};

export default GalleryImageList;
