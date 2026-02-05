import { Card } from '@/components/card';
import { useLoaderData } from 'expo-router';

export async function loader(): Promise<JSON> {
  // Fetch data from an API, database, or any server-side source
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  return response.json();
}

export default function SSRTestPage() {
  const data = useLoaderData<typeof loader>();
  return <Card data={data} />;
}
