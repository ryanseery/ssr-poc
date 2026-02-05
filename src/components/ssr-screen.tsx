import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { WebView as RNWebView } from 'react-native-webview';
import { WebViewSourceUri } from 'react-native-webview/lib/WebViewTypes';

interface Props {
  source: WebViewSourceUri;
  style?: StyleProp<ViewStyle>;
}
export function SSRScreen({ source, style }: Props) {
  const localSource = { ...source, uri: `${source.uri}?isNative=1` };
  return (
    <RNWebView
      source={localSource}
      style={[styles.root, style]}
      // needed for leading
      startInLoadingState
      renderLoading={() => (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#6366f1" />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'transparent',
  },
  loaderContainer: {
    ...StyleSheet.absoluteFill,
    backgroundColor: ' #f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
