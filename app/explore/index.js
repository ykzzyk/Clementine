import { Text, View } from 'react-native';
import ScreenBackground from '@/components/ScreenBackground';
import { styles } from '../styles';

export default function ExploreScreen() {
  return (
    <ScreenBackground>
      <Text style={styles.sectionTitle}>Explore</Text>
      <Text style={styles.sectionSubtitle}>
        Discover study routines, top shorts, and community tips.
      </Text>
      <View style={styles.exploreGrid}>
        <View style={styles.exploreCard}>
          <Text style={styles.cardTitle}>Trending explanations</Text>
          <Text style={styles.cardBody}>
            Algebra, biology, and writing prompts from teachers.
          </Text>
        </View>
        <View style={styles.exploreCard}>
          <Text style={styles.cardTitle}>Student streaks</Text>
          <Text style={styles.cardBody}>
            Weekly highlights and persistence wins.
          </Text>
        </View>
        <View style={styles.exploreCard}>
          <Text style={styles.cardTitle}>Clementine guide</Text>
          <Text style={styles.cardBody}>
            Learn how to post, share, and respond effectively.
          </Text>
        </View>
      </View>
    </ScreenBackground>
  );
}
