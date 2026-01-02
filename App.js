import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  useFonts,
  SpaceGrotesk_400Regular,
  SpaceGrotesk_600SemiBold,
  SpaceGrotesk_700Bold,
} from '@expo-google-fonts/space-grotesk';
import {
  IBM_Plex_Serif_400Regular,
  IBM_Plex_Serif_500Medium,
} from '@expo-google-fonts/ibm-plex-serif';

const SHORTS = [
  {
    id: '1',
    title: 'Factor quick: x^2 + 7x + 10',
    className: 'Algebra 1',
    teacher: 'Ms Vega',
    duration: '00:52',
    views: '1.2k',
    comments: '24',
    note: 'Find two numbers that multiply to 10.',
  },
  {
    id: '2',
    title: 'Reading tone in one paragraph',
    className: 'English 9',
    teacher: 'Mr Chang',
    duration: '01:08',
    views: '860',
    comments: '18',
    note: 'Look for word choice and pacing.',
  },
  {
    id: '3',
    title: 'Newton second law in 60s',
    className: 'Physics',
    teacher: 'Dr Iqbal',
    duration: '00:59',
    views: '2.3k',
    comments: '41',
    note: 'Force equals mass times acceleration.',
  },
];

const FEEDBACK = [
  {
    id: '1',
    name: 'Avery',
    text: 'Can you show one more example with negatives?',
  },
  {
    id: '2',
    name: 'Jordan',
    text: 'The step with isolating x finally clicked.',
  },
  {
    id: '3',
    name: 'Taylor',
    text: 'Can we get a slower walkthrough on line 3?',
  },
];

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    SpaceGrotesk_400Regular,
    SpaceGrotesk_600SemiBold,
    SpaceGrotesk_700Bold,
    IBM_Plex_Serif_400Regular,
    IBM_Plex_Serif_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return (
      <View style={styles.loadingRoot}>
        <LinearGradient
          colors={['#FFF6E5', '#F5F7FF', '#E7F6FF']}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 0.9, y: 0.9 }}
          style={StyleSheet.absoluteFill}
        />
        <Text style={styles.loadingText}>Loading Clementine...</Text>
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={['#FFF6E5', '#F5F7FF', '#E7F6FF']}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.9, y: 0.9 }}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.glowTop} />
      <View style={styles.glowBottom} />
      <SafeAreaView style={styles.safe}>
        <StatusBar style="dark" />
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.header}>
            <Text style={styles.brand}>Clementine</Text>
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
                    <Text style={styles.feedbackAvatarText}>
                      {item.name[0]}
                    </Text>
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
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  loadingRoot: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#453D33',
    fontWeight: '600',
  },
  safe: {
    flex: 1,
  },
  scroll: {
    padding: 20,
    paddingBottom: 60,
  },
  glowTop: {
    position: 'absolute',
    top: -120,
    right: -80,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: '#FFE3C4',
    opacity: 0.55,
  },
  glowBottom: {
    position: 'absolute',
    bottom: -140,
    left: -100,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: '#CDEBFF',
    opacity: 0.5,
  },
  header: {
    marginBottom: 24,
    gap: 10,
  },
  brand: {
    fontFamily: 'SpaceGrotesk_700Bold',
    fontSize: 34,
    color: '#1E1B16',
  },
  tagline: {
    fontFamily: 'IBM_Plex_Serif_400Regular',
    fontSize: 15,
    lineHeight: 22,
    color: '#453D33',
  },
  authRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    alignItems: 'center',
  },
  authPill: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 18,
    backgroundColor: '#1B6E6A',
  },
  authPillText: {
    fontFamily: 'SpaceGrotesk_600SemiBold',
    color: '#FFFFFF',
    fontSize: 12,
  },
  authSwitch: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#C1B7AA',
    backgroundColor: '#FFFFFF',
  },
  authSwitchText: {
    fontFamily: 'SpaceGrotesk_600SemiBold',
    fontSize: 12,
    color: '#453D33',
  },
  section: {
    marginBottom: 26,
  },
  sectionHeader: {
    marginBottom: 14,
    gap: 6,
  },
  sectionTitle: {
    fontFamily: 'SpaceGrotesk_700Bold',
    fontSize: 20,
    color: '#1E1B16',
  },
  sectionSubtitle: {
    fontFamily: 'IBM_Plex_Serif_400Regular',
    fontSize: 14,
    color: '#5B5144',
  },
  cardRow: {
    gap: 14,
  },
  card: {
    padding: 18,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EFE7DD',
    shadowColor: '#D9CBBE',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 4,
  },
  uploadCard: {
    borderColor: '#FFD6B8',
  },
  draftCard: {
    borderColor: '#D6E6FF',
  },
  cardEyebrow: {
    fontFamily: 'SpaceGrotesk_600SemiBold',
    fontSize: 12,
    color: '#B86B3C',
    textTransform: 'uppercase',
    letterSpacing: 1.3,
  },
  cardTitle: {
    fontFamily: 'SpaceGrotesk_700Bold',
    fontSize: 18,
    color: '#1E1B16',
    marginTop: 6,
  },
  cardBody: {
    fontFamily: 'IBM_Plex_Serif_400Regular',
    fontSize: 14,
    lineHeight: 20,
    color: '#5B5144',
    marginVertical: 10,
  },
  primaryButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: '#FF6B4A',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  primaryButtonText: {
    fontFamily: 'SpaceGrotesk_600SemiBold',
    color: '#FFFFFF',
    fontSize: 13,
  },
  secondaryButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: '#F4EFE8',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  secondaryButtonText: {
    fontFamily: 'SpaceGrotesk_600SemiBold',
    color: '#453D33',
    fontSize: 13,
  },
  feed: {
    gap: 16,
  },
  shortCard: {
    padding: 16,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EFE7DD',
    shadowColor: '#D9CBBE',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 3,
  },
  shortMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  classTag: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    backgroundColor: '#EAF4FF',
  },
  classTagText: {
    fontFamily: 'SpaceGrotesk_600SemiBold',
    fontSize: 12,
    color: '#1B6E6A',
  },
  duration: {
    fontFamily: 'SpaceGrotesk_600SemiBold',
    fontSize: 12,
    color: '#B86B3C',
  },
  preview: {
    height: 160,
    borderRadius: 18,
    overflow: 'hidden',
    justifyContent: 'space-between',
    padding: 14,
  },
  previewBadge: {
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  previewBadgeText: {
    fontFamily: 'SpaceGrotesk_700Bold',
    fontSize: 11,
    color: '#1E1B16',
  },
  previewFooter: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(30, 27, 22, 0.75)',
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  previewFooterText: {
    fontFamily: 'SpaceGrotesk_400Regular',
    color: '#FFFFFF',
    fontSize: 12,
  },
  shortContent: {
    marginTop: 14,
    gap: 6,
  },
  shortTitle: {
    fontFamily: 'SpaceGrotesk_700Bold',
    fontSize: 16,
    color: '#1E1B16',
  },
  shortNote: {
    fontFamily: 'IBM_Plex_Serif_400Regular',
    fontSize: 13,
    color: '#5B5144',
  },
  shortFooter: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shortTeacher: {
    fontFamily: 'SpaceGrotesk_600SemiBold',
    fontSize: 12,
    color: '#1B6E6A',
  },
  shortStats: {
    fontFamily: 'SpaceGrotesk_400Regular',
    fontSize: 12,
    color: '#8B7D6B',
  },
  feedbackCard: {
    padding: 18,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EFE7DD',
    gap: 14,
    shadowColor: '#D9CBBE',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 3,
  },
  feedbackRow: {
    flexDirection: 'row',
    gap: 12,
  },
  feedbackAvatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#FFD6B8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedbackAvatarText: {
    fontFamily: 'SpaceGrotesk_600SemiBold',
    color: '#7D3E1D',
  },
  feedbackBody: {
    flex: 1,
    gap: 4,
  },
  feedbackName: {
    fontFamily: 'SpaceGrotesk_600SemiBold',
    color: '#1E1B16',
  },
  feedbackText: {
    fontFamily: 'IBM_Plex_Serif_400Regular',
    color: '#5B5144',
    fontSize: 13,
    lineHeight: 18,
  },
  footer: {
    padding: 20,
    borderRadius: 22,
    backgroundColor: '#1E1B16',
    gap: 10,
  },
  footerTitle: {
    fontFamily: 'SpaceGrotesk_700Bold',
    fontSize: 18,
    color: '#FFF6E5',
  },
  footerText: {
    fontFamily: 'IBM_Plex_Serif_400Regular',
    fontSize: 13,
    color: '#E7D7C7',
  },
  footerButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 6,
  },
});
