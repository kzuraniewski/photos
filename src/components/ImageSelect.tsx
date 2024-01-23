import LazyImage, { LazyImageProps } from './LazyImage';
import { VisibilityToggle } from './layout-util';

export type ImageSelectProps = Omit<
	LazyImageProps,
	'src' | 'alt' | 'priority'
> & {
	images: string[];
	activeIndex: number;
};

const ImageSelect = ({ images, activeIndex, ...props }: ImageSelectProps) => {
	return (
		<div>
			{images.map((image, index) => (
				<VisibilityToggle
					key={`carousel-image-holder-${index}`}
					hidden={index !== activeIndex}
				>
					<LazyImage
						src={image}
						alt="Gallery image preview"
						width={500}
						height={500}
						priority
						fit="contain"
						fallback="spinner"
						{...props}
					/>
				</VisibilityToggle>
			))}
		</div>
	);
};

export default ImageSelect;
