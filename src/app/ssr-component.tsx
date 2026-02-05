import { SSRView } from '@/components/ssr-view';
import { StyleSheet, Text, View } from 'react-native';

export default function SSRComponent() {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Above</Text>
      <SSRView
        source={{ uri: 'http://localhost:3000/components/widget' }}
        style={{
          width: 340,
          height: 240,
        }}
      />
      <Text style={styles.text}>Below</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
  },
  text: {
    fontSize: 24,
    marginBottom: 24,
    fontWeight: '600',
  },
});
