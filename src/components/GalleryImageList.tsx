import mergeSx from '@/lib/mergeSx';
import { Box, BoxProps, ImageList, ImageListItem } from '@mui/material';
import LazyImage from './LazyImage';
import { ImageButton } from './layout-util';

export type GalleryImageListProps = {
	images: string[];
	onImageClick?: (index: number) => void;
};

const GalleryImageList = ({ images, onImageClick }: GalleryImageListProps) => {
	return (
		<Root>
			<ImageList cols={3}>
				{images.map((imagePath, index) => (
					<ImageListItem key={`gallery-image-${index}`}>
						<ImageButton onClick={() => onImageClick?.(index)}>
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

const Root = ({ sx: sxOverride, ...props }: BoxProps) => {
	const sx = mergeSx(sxOverride, {
		display: 'flex',
		justifyContent: 'center',
	});

	return <Box sx={sx} {...props} />;
};

export default GalleryImageList;
