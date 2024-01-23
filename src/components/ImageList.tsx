import mergeSx from '@/lib/mergeSx';
import {
	Box,
	BoxProps,
	ImageListItem,
	ImageList as MuiImageList,
} from '@mui/material';
import LazyImage from './LazyImage';
import { ImageButton } from './layout-util';

export type ImageListProps = {
	images: string[];
	onImageClick?: (index: number) => void;
};

const ImageList = ({ images, onImageClick }: ImageListProps) => {
	return (
		<Root>
			<MuiImageList cols={3}>
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
			</MuiImageList>
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

export default ImageList;
