import Gallery from '@/components/Gallery';
import path from 'path';
import { promises as fs } from 'fs';

const getStaticImagePaths = async () => {
	const imagesDirectory = path.join(process.cwd(), 'public/images/gallery');
	const files = await fs.readdir(imagesDirectory);
	const paths = files
		.filter((file) => /\.(jpg|jpeg|png|gif|svg)$/.test(file))
		.map((file) => path.join('/images/gallery', file));

	return paths;
};

const Home = async () => {
	const images = await getStaticImagePaths();

	return (
		<>
			<Gallery imagePaths={images} />
		</>
	);
};

export default Home;
