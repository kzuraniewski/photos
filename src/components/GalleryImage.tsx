import Image from 'next/image';

export type GalleryImageProps = {
	src: string;
};

const GalleryImage = ({ src }: GalleryImageProps) => {
	return <Image src={src} alt="Gallery image" width={250} height={250} />;
};

export default GalleryImage;
