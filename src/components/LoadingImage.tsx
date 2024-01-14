import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

export type LoadingImageProps = ImageProps & {
	loadingElement: JSX.Element;
};

const LoadingImage = ({ loadingElement, ...imageProps }: LoadingImageProps) => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<>
			{isLoading && loadingElement}
			<Image {...imageProps} onLoad={() => setIsLoading(false)} />
		</>
	);
};

export default LoadingImage;
