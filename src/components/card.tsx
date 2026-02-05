import { StyleProp, Text, TextStyle, View } from 'react-native';

interface Props {
  data: any;
  style?: StyleProp<TextStyle>;
}
export function Card({ data, style }: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={[{ fontSize: 24, marginBottom: 32 }, style]}>
        {JSON.stringify(data, null, 2)}
      </Text>
    </View>
  );
}
