import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GlassCard } from '../../components/GlassCard';
import { useTheme } from '../../components/ThemeProvider';
import { spacing, typography } from '../../constants/theme';

interface FeaturedPlace {
  id: string;
  name: string;
  type: string;
  reward: string;
  distance: string;
  image: string;
}

interface QuickAction {
  id: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
}

const FEATURED_PLACES: FeaturedPlace[] = [
  {
    id: '1',
    name: 'Crypto Cafe',
    type: 'Coffee Shop',
    reward: '1,500',
    distance: '0.3',
    image: '☕️',
  },
  {
    id: '2',
    name: 'Bitcoin Beach',
    type: 'Restaurant',
    reward: '2,000',
    distance: '1.2',
    image: '🏖️',
  },
  {
    id: '3',
    name: 'Satoshi\'s Sushi',
    type: 'Japanese',
    reward: '1,800',
    distance: '0.8',
    image: '🍱',
  },
];

const QUICK_ACTIONS: QuickAction[] = [
  {
    id: '1',
    title: 'Scan QR',
    icon: 'qr-code',
    color: '#FFE4E4',
  },
  {
    id: '2',
    title: 'Send Sats',
    icon: 'flash',
    color: '#E4FFEA',
  },
  {
    id: '3',
    title: 'Receive',
    icon: 'wallet',
    color: '#E4F1FF',
  },
];

export default function HomeScreen() {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      padding: spacing.xl,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: spacing.xl,
    },
    notificationBadge: {
      padding: spacing.sm,
      position: 'relative',
    },
    notificationDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      position: 'absolute',
      top: spacing.sm,
      right: spacing.sm,
    },
    balanceCard: {
      overflow: 'hidden',
      marginBottom: spacing.xl,
    },
    balanceGradient: {
      padding: spacing.lg,
    },
    balanceHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: spacing.sm,
    },
    refreshButton: {
      padding: spacing.xs,
    },
    balanceAmount: {
      flexDirection: 'row',
      alignItems: 'baseline',
    },
    quickActions: {
      flexDirection: 'row',
      gap: spacing.md,
      marginBottom: spacing.xl,
    },
    quickAction: {
      flex: 1,
      alignItems: 'center',
      gap: spacing.xs,
      padding: spacing.md,
    },
    iconContainer: {
      padding: spacing.sm,
      borderRadius: 12,
    },
    section: {
      gap: spacing.md,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    placesList: {
      gap: spacing.md,
    },
    placeCard: {
      overflow: 'hidden',
    },
    placeGradient: {
      padding: spacing.lg,
      gap: spacing.md,
    },
    placeHeader: {
      flexDirection: 'row',
      gap: spacing.md,
      alignItems: 'center',
    },
    placeEmoji: {
      fontSize: 40,
    },
    placeInfo: {
      flex: 1,
      gap: spacing.xs,
    },
    placeDetails: {
      flexDirection: 'row',
      gap: spacing.md,
    },
    rewardBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.xs,
      backgroundColor: theme.primary + '20',
      paddingHorizontal: spacing.sm,
      paddingVertical: spacing.xs,
      borderRadius: 8,
    },
    distanceBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.xs,
      backgroundColor: theme.secondary + '20',
      paddingHorizontal: spacing.sm,
      paddingVertical: spacing.xs,
      borderRadius: 8,
    },
  });

  const renderQuickAction = ({ id, title, icon, color }: QuickAction) => (
    <TouchableOpacity key={id} activeOpacity={0.8}>
      <GlassCard style={[styles.quickAction, { backgroundColor: color }]}>
        <View style={[styles.iconContainer, { backgroundColor: theme.background + '80' }]}>
          <Ionicons name={icon} size={24} color={theme.primary} />
        </View>
        <Text style={[typography.caption, { color: theme.text }]}>{title}</Text>
      </GlassCard>
    </TouchableOpacity>
  );

  const renderFeaturedPlace = ({ id, name, type, reward, distance, image }: FeaturedPlace) => (
    <TouchableOpacity key={id} activeOpacity={0.8}>
      <GlassCard style={styles.placeCard}>
        <LinearGradient
          colors={[theme.background + '40', theme.background + '80']}
          style={styles.placeGradient}
        >
          <View style={styles.placeHeader}>
            <Text style={styles.placeEmoji}>{image}</Text>
            <View style={styles.placeInfo}>
              <Text style={[typography.h3, { color: theme.text }]}>{name}</Text>
              <Text style={[typography.caption, { color: theme.secondary }]}>{type}</Text>
            </View>
          </View>
          <View style={styles.placeDetails}>
            <View style={styles.rewardBadge}>
              <Ionicons name="flash" size={14} color={theme.primary} />
              <Text style={[typography.caption, { color: theme.primary }]}>{reward} sats</Text>
            </View>
            <View style={styles.distanceBadge}>
              <Ionicons name="location" size={14} color={theme.secondary} />
              <Text style={[typography.caption, { color: theme.secondary }]}>{distance} km</Text>
            </View>
          </View>
        </LinearGradient>
      </GlassCard>
    </TouchableOpacity>
  );

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: theme.background }]}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <View>
          <Text style={[typography.h1, { color: theme.text }]}>
            Welcome back 👋
          </Text>
          <Text style={[typography.body, { color: theme.secondary }]}>
            Ready to explore and stack sats?
          </Text>
        </View>
        <TouchableOpacity>
          <GlassCard style={styles.notificationBadge}>
            <Ionicons name="notifications" size={24} color={theme.primary} />
            <View style={[styles.notificationDot, { backgroundColor: theme.primary }]} />
          </GlassCard>
        </TouchableOpacity>
      </View>

      <GlassCard style={styles.balanceCard}>
        <BlurView intensity={20} tint="light" style={StyleSheet.absoluteFill} />
        <LinearGradient
          colors={[theme.primary + '20', theme.primary + '10']}
          style={styles.balanceGradient}
        >
          <View style={styles.balanceHeader}>
            <Text style={[typography.h3, { color: theme.text }]}>Your Balance</Text>
            <TouchableOpacity style={styles.refreshButton}>
              <Ionicons name="refresh" size={20} color={theme.primary} />
            </TouchableOpacity>
          </View>
          <View style={styles.balanceAmount}>
            <Text style={[typography.h1, { color: theme.text }]}>21,000</Text>
            <Text style={[typography.h2, { color: theme.secondary }]}> sats</Text>
          </View>
          <Text style={[typography.caption, { color: theme.secondary }]}>
            ≈ $8.40 USD
          </Text>
        </LinearGradient>
      </GlassCard>

      <View style={styles.quickActions}>
        {QUICK_ACTIONS.map(renderQuickAction)}
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={[typography.h2, { color: theme.text }]}>Featured Places</Text>
          <TouchableOpacity>
            <Text style={[typography.body, { color: theme.primary }]}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.placesList}>
          {FEATURED_PLACES.map(renderFeaturedPlace)}
        </View>
      </View>
    </ScrollView>
  );
} 