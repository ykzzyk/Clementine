import { Text, View, Pressable } from 'react-native';
import ScreenBackground from '@/components/ScreenBackground';
import { styles } from '../styles';

export default function UploadScreen() {
  return (
    <ScreenBackground>
      <Text style={styles.sectionTitle}>Upload</Text>
      <Text style={styles.sectionSubtitle}>
        Add a short video or import from your library.
      </Text>
      <View style={[styles.card, styles.uploadCard]}>
        <Text style={styles.cardEyebrow}>Step 1</Text>
        <Text style={styles.cardTitle}>Choose a source</Text>
        <Text style={styles.cardBody}>
          Record a short explanation or upload a clip up to 2 minutes.
        </Text>
        <View style={styles.uploadActions}>
          <Pressable style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Record</Text>
          </Pressable>
          <Pressable style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Upload file</Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.card, styles.draftCard]}>
        <Text style={styles.cardEyebrow}>Step 2</Text>
        <Text style={styles.cardTitle}>Add context</Text>
        <Text style={styles.cardBody}>
          Tag the class, add a prompt, and publish to the feed.
        </Text>
        <Pressable style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Edit details</Text>
        </Pressable>
      </View>
    </ScreenBackground>
  );
}
