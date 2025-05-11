import { BlurView } from 'expo-blur';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native';
import { borderRadius, darkTheme, lightTheme, spacing, typography } from '../../constants/theme';

const rewardsActivity = [
  {
    id: '1',
    place: 'The Hidden Cafe',
    date: '2024-06-01',
    sats: 500,
    usd: 0.25,
    type: 'Earned',
  },
  {
    id: '2',
    place: 'Mountain View Restaurant',
    date: '2024-05-28',
    sats: 1200,
    usd: 0.60,
    type: 'Earned',
  },
  {
    id: '3',
    place: 'Referral Bonus',
    date: '2024-05-25',
    sats: 800,
    usd: 0.40,
    type: 'Referral',
  },
];

export default function RewardsScreen() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: spacing.xxl }}>
        {/* Rewards Summary Card */}
        <BlurView intensity={40} tint={colorScheme === 'dark' ? 'dark' : 'light'} style={styles.summaryCard}>
          <Text style={[styles.summaryTitle, { color: theme.text }]}>Available Balance</Text>
          <Text style={[styles.summaryAmount, { color: theme.primary }]}>2,500 <Text style={{ fontWeight: '400' }}>sats</Text></Text>
          <Text style={[styles.summaryUsd, { color: theme.secondary }]}>≈ $1.25 USD</Text>
          <TouchableOpacity style={[styles.ctaButton, { backgroundColor: theme.primary }]}
            activeOpacity={0.85}
          >
            <Text style={[styles.ctaText, { color: theme.background }]}>Claim Rewards</Text>
          </TouchableOpacity>
        </BlurView>

        {/* Recent Activity */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Recent Activity</Text>
          {rewardsActivity.map((item) => (
            <BlurView key={item.id} intensity={30} tint={colorScheme === 'dark' ? 'dark' : 'light'} style={styles.activityCard}>
              <View style={styles.activityRow}>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.activityPlace, { color: theme.text }]}>{item.place}</Text>
                  <Text style={[styles.activityDate, { color: theme.secondary }]}>{item.date}</Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <Text style={[styles.activitySats, { color: theme.primary }]}>{item.sats} sats</Text>
                  <Text style={[styles.activityUsd, { color: theme.secondary }]}>${item.usd.toFixed(2)}</Text>
                  <Text style={[styles.activityType, { color: theme.secondary }]}>{item.type}</Text>
                </View>
              </View>
            </BlurView>
          ))}
        </View>

        {/* Learn More CTA */}
        <BlurView intensity={30} tint={colorScheme === 'dark' ? 'dark' : 'light'} style={styles.learnCard}>
          <Text style={[styles.learnTitle, { color: theme.text }]}>How do Bitcoin rewards work?</Text>
          <Text style={[styles.learnSubtitle, { color: theme.secondary }]}>Earn sats by exploring, spending, and referring friends. Rewards are paid instantly to your wallet!</Text>
          <TouchableOpacity style={[styles.learnButton, { backgroundColor: theme.primary }]} activeOpacity={0.85}>
            <Text style={[styles.learnButtonText, { color: theme.background }]}>Learn More</Text>
          </TouchableOpacity>
        </BlurView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  summaryCard: {
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
  summaryTitle: {
    ...typography.h2,
    marginBottom: spacing.sm,
    fontWeight: 'bold',
  },
  summaryAmount: {
    ...typography.h1,
    marginBottom: spacing.xs,
    fontWeight: 'bold',
  },
  summaryUsd: {
    ...typography.body,
    marginBottom: spacing.lg,
  },
  ctaButton: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.lg,
    marginTop: spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 4,
  },
  ctaText: {
    ...typography.h2,
    fontSize: 18,
    fontWeight: 'bold',
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
  activityCard: {
    borderRadius: borderRadius.lg,
    marginBottom: spacing.md,
    padding: spacing.md,
    backgroundColor: 'rgba(255,255,255,0.18)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    overflow: 'hidden',
  },
  activityRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityPlace: {
    ...typography.h3,
    fontWeight: 'bold',
  },
  activityDate: {
    ...typography.caption,
    marginBottom: spacing.xs,
  },
  activitySats: {
    ...typography.body,
    fontWeight: 'bold',
  },
  activityUsd: {
    ...typography.caption,
  },
  activityType: {
    ...typography.caption,
    fontStyle: 'italic',
  },
  learnCard: {
    marginHorizontal: spacing.xl,
    marginBottom: spacing.xl,
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
  learnTitle: {
    ...typography.h2,
    fontWeight: 'bold',
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  learnSubtitle: {
    ...typography.body,
    opacity: 0.8,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  learnButton: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.lg,
    marginTop: spacing.sm,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 4,
  },
  learnButtonText: {
    ...typography.h2,
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 