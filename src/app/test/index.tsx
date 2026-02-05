import { SSRScreen } from '@/components/ssr-screen';

export default function NativeTestPage() {
  return <SSRScreen source={{ uri: 'http://localhost:3000/test' }} />;
}
