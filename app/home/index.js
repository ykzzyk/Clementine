import { Text, View, Pressable, StyleSheet, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ScreenBackground from '@/components/ScreenBackground';
import { styles, SHORTS, FEEDBACK } from '../styles';

export default function HomeScreen() {
  return (
    <ScreenBackground>
      <View style={styles.header}>
        {Platform.OS === 'web' && (
          <Text style={styles.brand}>Clementine</Text>
        )}
        <Text style={styles.tagline}>
          Short-form homework help with teacher context and student feedback.
        </Text>
        <View style={styles.authRow}>
          <View style={styles.authPill}>
            <Text style={styles.authPillText}>Signed in as Teacher</Text>
          </View>
          <Pressable style={styles.authSwitch}>
            <Text style={styles.authSwitchText}>Switch account</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Teacher Studio</Text>
          <Text style={styles.sectionSubtitle}>
            Upload a short or refine a draft.
          </Text>
        </View>
        <View style={styles.cardRow}>
          <View style={[styles.card, styles.uploadCard]}>
            <Text style={styles.cardEyebrow}>New short</Text>
            <Text style={styles.cardTitle}>Upload or record</Text>
            <Text style={styles.cardBody}>
              Add a quick explanation, tags, and a prompt for feedback.
            </Text>
            <Pressable style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Upload short</Text>
            </Pressable>
          </View>
          <View style={[styles.card, styles.draftCard]}>
            <Text style={styles.cardEyebrow}>Drafts</Text>
            <Text style={styles.cardTitle}>2 waiting review</Text>
            <Text style={styles.cardBody}>
              Finish captions and publish to Algebra 1.
            </Text>
            <Pressable style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Open drafts</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Student Feed</Text>
          <Text style={styles.sectionSubtitle}>
            Swipe-ready shorts for each class.
          </Text>
        </View>
        <View style={styles.feed}>
          {SHORTS.map((item) => (
            <View key={item.id} style={styles.shortCard}>
              <View style={styles.shortMeta}>
                <View style={styles.classTag}>
                  <Text style={styles.classTagText}>{item.className}</Text>
                </View>
                <Text style={styles.duration}>{item.duration}</Text>
              </View>
              <View style={styles.preview}>
                <LinearGradient
                  colors={['#FF9966', '#FF6B4A', '#F857A6']}
                  start={{ x: 0.1, y: 0.2 }}
                  end={{ x: 0.9, y: 0.8 }}
                  style={StyleSheet.absoluteFill}
                />
                <View style={styles.previewBadge}>
                  <Text style={styles.previewBadgeText}>SHORT</Text>
                </View>
                <View style={styles.previewFooter}>
                  <Text style={styles.previewFooterText}>
                    Swipe for the next explanation
                  </Text>
                </View>
              </View>
              <View style={styles.shortContent}>
                <Text style={styles.shortTitle}>{item.title}</Text>
                <Text style={styles.shortNote}>{item.note}</Text>
                <View style={styles.shortFooter}>
                  <Text style={styles.shortTeacher}>{item.teacher}</Text>
                  <Text style={styles.shortStats}>
                    {item.views} views | {item.comments} comments
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Feedback</Text>
          <Text style={styles.sectionSubtitle}>
            Student notes on the latest homework posts.
          </Text>
        </View>
        <View style={styles.feedbackCard}>
          {FEEDBACK.map((item) => (
            <View key={item.id} style={styles.feedbackRow}>
              <View style={styles.feedbackAvatar}>
                <Text style={styles.feedbackAvatarText}>{item.name[0]}</Text>
              </View>
              <View style={styles.feedbackBody}>
                <Text style={styles.feedbackName}>{item.name}</Text>
                <Text style={styles.feedbackText}>{item.text}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Ready for launch</Text>
        <Text style={styles.footerText}>
          Add authentication, connect uploads, and publish to the feed.
        </Text>
        <View style={styles.footerButtons}>
          <Pressable style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Invite students</Text>
          </Pressable>
          <Pressable style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Preview as student</Text>
          </Pressable>
        </View>
      </View>
    </ScreenBackground>
  );
}
