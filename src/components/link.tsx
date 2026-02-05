import { Link as EXPOLink, LinkProps } from 'expo-router';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';

interface Props {
  href: LinkProps['href'];
  label: string;
  style?: StyleProp<ViewStyle>;
}
export function Link({ href, label, style }: Props) {
  const mergedStyle = StyleSheet.flatten([styles.root, style]);
  return (
    <EXPOLink href={href} asChild>
      <Pressable style={mergedStyle}>
        <Text style={styles.text}>{label}</Text>
      </Pressable>
    </EXPOLink>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#007aff',
    padding: 12,
    borderRadius: 6,
    marginBottom: 12,
  },
  text: {
    color: '#fff',
  },
});
