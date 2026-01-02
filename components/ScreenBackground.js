import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../app/styles';

export default function ScreenBackground({ children }) {
  return (
    <View style={styles.screenRoot}>
      <LinearGradient
        colors={['#FFF6E5', '#F5F7FF', '#E7F6FF']}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.9, y: 0.9 }}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.glowTop} />
      <View style={styles.glowBottom} />
      {children}
    </View>
  );
}
