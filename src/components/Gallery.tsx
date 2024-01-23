'use client';

import mergeSx from '@/lib/mergeSx';
import useCounter from '@/lib/useCounter';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, BoxProps, IconButton } from '@mui/material';
import { useState } from 'react';
import BlurryModal from './BlurryModal';
import ImageList from './ImageList';
import ImagePagination from './ImagePagination';
import ImageSelect from './ImageSelect';

export type GalleryProps = {
	images: string[];
};

const Gallery = ({ images }: GalleryProps) => {
	const imageIndexCounter = useCounter(0, {
		min: 0,
		max: images.length - 1,
	});
	const [isPreviewMode, setIsPreviewMode] = useState(false);

	const previewImage = (imageIndex?: number) => {
		setIsPreviewMode(true);
		if (imageIndex !== undefined) imageIndexCounter.set(imageIndex);
	};

	const closePreview = () => setIsPreviewMode(false);

	return (
		<div id="gallery">
			<ImageList images={images} onImageClick={previewImage} />

			<BlurryModal open={isPreviewMode} onClose={closePreview}>
				<ImageSelect
					images={images}
					activeIndex={imageIndexCounter.value}
				/>

				<Actions>
					<IconButton
						onClick={imageIndexCounter.decrease}
						disabled={imageIndexCounter.atMin}
					>
						<ChevronLeftIcon />
					</IconButton>

					<IconButton
						onClick={imageIndexCounter.increase}
						disabled={imageIndexCounter.atMax}
					>
						<ChevronRightIcon />
					</IconButton>
				</Actions>

				<ImagePagination
					images={images}
					activeIndex={imageIndexCounter.value}
					onImageClick={previewImage}
				/>
			</BlurryModal>
		</div>
	);
};

const Actions = ({ sx: sxOverride, ...props }: BoxProps) => {
	const sx = mergeSx(sxOverride, {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		display: 'flex',
		justifyContent: 'space-between',
		width: 'calc(100% + 50px)',
	});

	return <Box sx={sx} {...props} />;
};

export default Gallery;
