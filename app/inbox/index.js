import { Text, View } from 'react-native';
import ScreenBackground from '@/components/ScreenBackground';
import { styles } from '../styles';

export default function InboxScreen() {
  return (
    <ScreenBackground>
      <Text style={styles.sectionTitle}>Inbox</Text>
      <Text style={styles.sectionSubtitle}>
        New comments, reactions, and requests from students.
      </Text>
      <View style={styles.inboxCard}>
        <Text style={styles.cardTitle}>Your latest updates</Text>
        <View style={styles.inboxRow}>
          <Text style={styles.inboxTag}>New</Text>
          <Text style={styles.inboxText}>
            6 students replied on Algebra 1 short.
          </Text>
        </View>
        <View style={styles.inboxRow}>
          <Text style={styles.inboxTag}>Pin</Text>
          <Text style={styles.inboxText}>
            Jordan requested a slower walkthrough.
          </Text>
        </View>
        <View style={styles.inboxRow}>
          <Text style={styles.inboxTag}>Quiz</Text>
          <Text style={styles.inboxText}>
            82% answered the Physics poll correctly.
          </Text>
        </View>
      </View>
    </ScreenBackground>
  );
}
