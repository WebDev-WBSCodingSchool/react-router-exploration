export async function loader({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.pid}`);
  const product = await res.json();
  return product;
}

export async function clientLoader({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.pid}`);
  if (!res.ok) {
    throw new Error('Product not found');
  }
  const product = await res.json();
  return product;
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

export default function Product({ loaderData }) {
  const { name, description } = loaderData;
  return (
    <main className='p-4 space-y-4'>
      <h1 className='text-2xl font-bold'>{name}</h1>
      <p>{description}</p>
      <img src={loaderData.image} alt={name} className='w-full max-w-md' />
      <p className='text-lg font-semibold'>${loaderData.price}</p>
      <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
        Add to Cart
      </button>
    </main>
  );
}
