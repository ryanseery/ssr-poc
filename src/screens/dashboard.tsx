import { Card } from '@/components/card';
import { ScrollView, StyleSheet, View } from 'react-native';

export function DashboardComponent({ data }: { data: any }) {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Card style={styles.text} data={data.userInformation} />
      </View>
      <View style={styles.card}>
        <Card style={styles.text} data={data.balanceInformation} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  container: {
    paddingVertical: 24,
  },
  card: {
    marginBottom: 16,
  },
  text: {
    fontSize: 12,
  },
});
