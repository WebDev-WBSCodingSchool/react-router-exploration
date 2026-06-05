import { Form } from 'react-router';
import type { Route } from './+types/todos'; // will complain until we register it in app/routes.ts

const addTodo = async (todo: string): Promise<string> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(todo);
		}, 1000);
	});
};

export async function action({ request }: Route.ActionArgs) {
	const formData = await request.formData();
	const title = formData.get('title')! as string;
	const result = await addTodo(title);
	return result;
}

export default function ToDos({ actionData }: Route.ComponentProps) {
	console.log('ToDos component rendered with actionData:', actionData);
	return (
		<div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md'>
			<h1 className='text-2xl font-bold mb-6 text-gray-800'>To Dos</h1>
			<Form method='post' className='flex flex-col gap-4'>
				<input
					name='title'
					className='border text-black border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
					placeholder='Enter todo'
				/>
				<button
					type='submit'
					className='bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition'
				>
					Submit
				</button>
			</Form>
			{actionData && (
				<p className='mt-4 text-green-600 font-medium'>{actionData} added</p>
			)}
		</div>
	);
}
