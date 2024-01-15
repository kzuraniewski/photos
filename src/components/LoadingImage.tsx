import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

export type LoadingImageProps = ImageProps & {
	loadingElement: JSX.Element;
	contained?: boolean;
};

const LoadingImage = ({
	contained = false,
	loadingElement,
	...imageProps
}: LoadingImageProps) => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<div>
			{isLoading && loadingElement}
			<Image
				{...imageProps}
				style={{ objectFit: contained ? 'contain' : 'cover' }}
				onLoad={() => setIsLoading(false)}
			/>
		</div>
	);
};

export default LoadingImage;
