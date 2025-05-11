import { BlurView } from 'expo-blur';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native';
import { borderRadius, darkTheme, lightTheme, spacing, typography } from '../../constants/theme';

const featuredPlaces = [
  {
    id: '1',
    name: 'The Hidden Cafe',
    category: 'Cafe',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500',
    reward: 'Earn 5% back',
  },
  {
    id: '2',
    name: 'Mountain View Restaurant',
    category: 'Restaurant',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500',
    reward: 'Earn 4% back',
  },
  {
    id: '3',
    name: 'Sunset Beach Bar',
    category: 'Bar',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1572116469696-31de9f17c34c?w=500',
    reward: 'Earn 6% back',
  },
];

const quickActions = [
  { id: 'explore', label: 'Explore', icon: '🧭', color: '#FF6B00' },
  { id: 'claim', label: 'Claim Rewards', icon: '🎁', color: '#4CAF50' },
  { id: 'create', label: 'Create List', icon: '📝', color: '#2196F3' },
];

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: spacing.xxl }}>
        {/* Welcome Card */}
        <BlurView intensity={40} tint={colorScheme === 'dark' ? 'dark' : 'light'} style={styles.welcomeCard}>
          <Text style={[styles.welcomeTitle, { color: theme.text }]}>Welcome back 👋</Text>
          <Text style={[styles.welcomeSubtitle, { color: theme.secondary }]}>Ready to discover new places and earn Bitcoin rewards?</Text>
        </BlurView>

        {/* Quick Actions */}
        <View style={styles.quickActionsRow}>
          {quickActions.map((action) => (
            <TouchableOpacity key={action.id} style={[styles.quickAction, { backgroundColor: action.color + '22' }]}
              activeOpacity={0.85}
            >
              <Text style={styles.quickActionIcon}>{action.icon}</Text>
              <Text style={[styles.quickActionLabel, { color: theme.text }]}>{action.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Rewards Summary Glass Card */}
        <BlurView intensity={40} tint={colorScheme === 'dark' ? 'dark' : 'light'} style={styles.glassCard}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Your Rewards</Text>
          <Text style={[styles.rewardsAmount, { color: theme.primary }]}>2,500 <Text style={{ fontWeight: '400' }}>sats</Text></Text>
          <Text style={[styles.rewardsUsd, { color: theme.secondary }]}>≈ $1.25 USD</Text>
        </BlurView>

        {/* Featured Places */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Featured Places</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredScroll}>
            {featuredPlaces.map((place) => (
              <BlurView key={place.id} intensity={30} tint={colorScheme === 'dark' ? 'dark' : 'light'} style={styles.featuredCard}>
                <Image source={{ uri: place.image }} style={styles.featuredImage} />
                <View style={styles.featuredContent}>
                  <Text style={[styles.featuredName, { color: theme.text }]}>{place.name}</Text>
                  <Text style={[styles.featuredCategory, { color: theme.secondary }]}>{place.category}</Text>
                  <View style={styles.featuredFooter}>
                    <Text style={[styles.featuredReward, { color: theme.primary }]}>{place.reward}</Text>
                    <Text style={[styles.featuredRating, { color: theme.secondary }]}>⭐ {place.rating}</Text>
                  </View>
                </View>
              </BlurView>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeCard: {
    marginTop: spacing.xl,
    marginHorizontal: spacing.xl,
    marginBottom: spacing.lg,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.18)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 8,
    overflow: 'hidden',
  },
  welcomeTitle: {
    ...typography.h1,
    textAlign: 'center',
    marginBottom: spacing.sm,
    fontWeight: 'bold',
  },
  welcomeSubtitle: {
    ...typography.body,
    textAlign: 'center',
    opacity: 0.85,
  },
  quickActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: spacing.xl,
    marginBottom: spacing.xl,
  },
  quickAction: {
    flex: 1,
    marginHorizontal: spacing.sm,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 90,
    backgroundColor: 'rgba(255,255,255,0.12)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  quickActionIcon: {
    fontSize: 32,
    marginBottom: spacing.sm,
  },
  quickActionLabel: {
    ...typography.body,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  glassCard: {
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.18)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 8,
    overflow: 'hidden',
    marginHorizontal: spacing.xl,
    marginBottom: spacing.xl,
  },
  section: {
    marginTop: 8,
    paddingHorizontal: spacing.xl,
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    ...typography.h2,
    marginBottom: spacing.md,
    fontWeight: 'bold',
  },
  // Featured Places
  featuredScroll: {
    flexDirection: 'row',
  },
  featuredCard: {
    width: 220,
    marginRight: spacing.md,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.18)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  featuredImage: {
    width: '100%',
    height: 120,
  },
  featuredContent: {
    padding: spacing.md,
  },
  featuredName: {
    ...typography.h3,
    marginBottom: spacing.xs,
    fontWeight: 'bold',
  },
  featuredCategory: {
    ...typography.body,
    marginBottom: spacing.sm,
  },
  featuredFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  featuredReward: {
    ...typography.body,
    fontWeight: 'bold',
  },
  featuredRating: {
    ...typography.caption,
    marginLeft: spacing.sm,
  },
  rewardsAmount: {
    ...typography.h1,
    marginBottom: spacing.xs,
    fontWeight: 'bold',
  },
  rewardsUsd: {
    ...typography.body,
  },
}); 