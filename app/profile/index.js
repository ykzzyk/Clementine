import { ScrollView, Text, View, Pressable } from 'react-native';
import ScreenBackground from '@/components/ScreenBackground';
import { styles } from '../styles';

export default function ProfileScreen() {
  return (
    <ScreenBackground>
      <View style={styles.screenBody}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.profileHeader}>
            <View style={styles.profileAvatar}>
              <Text style={styles.profileAvatarText}>T</Text>
            </View>
            <View>
              <Text style={styles.profileName}>Taylor Vega</Text>
              <Text style={styles.profileRole}>Teacher | Algebra 1</Text>
            </View>
          </View>
          <View style={styles.profileCard}>
            <Text style={styles.cardTitle}>Account</Text>
            <Text style={styles.cardBody}>
              Manage classes, invite links, and notification preferences.
            </Text>
            <Pressable style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Open settings</Text>
            </Pressable>
          </View>
          <View style={styles.profileCard}>
            <Text style={styles.cardTitle}>Student view</Text>
            <Text style={styles.cardBody}>
              See how your short appears to enrolled students.
            </Text>
            <Pressable style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Preview feed</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </ScreenBackground>
  );
}
