import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { WebViewSource } from 'react-native-webview/lib/WebViewTypes';

interface Props {
  source: WebViewSource;
  style?: StyleProp<ViewStyle>;
}
export function SSRView({ source, style }: Props) {
  const flatStyle = StyleSheet.flatten(style) || {};
  const { width, height } = flatStyle;
  return (
    <View style={{ width, height }}>
      <WebView
        source={source}
        style={[styles.root, style]}
        // needed for leading
        startInLoadingState
        renderLoading={() => (
          <View style={[styles.loaderContainer, { width, height }]}>
            <ActivityIndicator size="large" color="#6366f1" />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 0,
    backgroundColor: 'transparent',
  },
  loaderContainer: {
    ...StyleSheet.absoluteFill,
    backgroundColor: ' #f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
