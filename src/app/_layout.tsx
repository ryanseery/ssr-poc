import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack, useGlobalSearchParams } from 'expo-router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 1000 * 60 * 5,
    },
  },
});

export default function RootLayout() {
  const { isNative } = useGlobalSearchParams<{ isNative?: string }>();

  const headerShown = isNative !== '1';

  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerBackButtonDisplayMode: 'minimal' }}>
        <Stack.Screen options={{ headerTitle: 'Home' }} name="index" />

        {/** SSR - Native  */}
        <Stack.Screen
          options={{
            headerTitle: headerShown ? 'SSR Test Screen' : 'Native SSR Screen',
            headerShown,
          }}
          name="test/index"
        />

        {/** SSR - Component */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="+(server)/components/widget"
        />
      </Stack>
    </QueryClientProvider>
  );
}
