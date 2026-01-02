import { StyleSheet, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../app/styles';

export default function ScreenBackground({ children }) {
  return (
    <ScrollView style={styles.screenRoot} contentContainerStyle={styles.scroll}>
      <View pointerEvents="none" style={styles.backgroundLayer}>
        {/* <LinearGradient
          colors={['#FFF6E5', '#F5F7FF', '#E7F6FF']}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 0.9, y: 0.9 }}
          style={StyleSheet.absoluteFill}
        /> */}
        <View style={styles.glowTop} />
        <View style={styles.glowBottom} />
      </View>
      <View style={styles.screenContent}>{children}</View>
    </ScrollView>
  );
}
