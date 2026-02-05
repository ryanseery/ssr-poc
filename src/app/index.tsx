import { Link } from '@/components/link';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Home Screen</Text>
      <Link href={'/test'} label="Go to Test Screen" />

      {Platform.OS !== 'web' && (
        <Link href="/ssr-component" label="Go to SSR Component" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 32,
  },
});
