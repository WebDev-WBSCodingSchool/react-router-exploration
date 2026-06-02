import type { Route } from './+types/product';

type Product = {
	name: string;
	description: string;
	image: string;
	price: number;
};

export async function loader({ params }: Route.LoaderArgs): Promise<Product> {
	const res = await fetch(`https://fakestoreapi.com/products/${params.pid}`);
	const product = (await res.json()) as Product;
	return product;
}

export async function clientLoader({
	params
}: Route.ClientLoaderArgs): Promise<Product> {
	const res = await fetch(`https://fakestoreapi.com/products/${params.pid}`);
	const product = (await res.json()) as Product;
	return product;
}

export function HydrateFallback() {
	return <div>Loading...</div>;
}

export default function Product({ loaderData }: Route.ComponentProps) {
	const { name, description, image, price } = loaderData;
	return (
		<main className='p-4 space-y-4'>
			<h1 className='text-2xl font-bold'>{name}</h1>
			<p>{description}</p>
			<img src={image} alt={name} className='w-full max-w-md' />
			<p className='text-lg font-semibold'>${price}</p>
			<button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
				Add to Cart
			</button>
		</main>
	);
}
