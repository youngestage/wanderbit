import { BlurView } from 'expo-blur';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import { borderRadius, darkTheme, lightTheme, spacing, typography } from '../../constants/theme';

const AVATAR = 'https://randomuser.me/api/portraits/men/32.jpg';

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  // Mock auth state
  const [user, setUser] = useState<null | { name: string; wallet: string }>(null);

  const handleConnect = () => {
    // Mock wallet connect
    setUser({ name: 'Satoshi Nakamoto', wallet: 'bc1qxy...0p7x' });
  };
  const handleSignOut = () => setUser(null);

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      {/* Hero Section with Glass Morphism */}
      <View style={styles.heroContainer}>
        <View style={styles.avatarWrapper}>
          <Image source={{ uri: AVATAR }} style={styles.avatar} />
        </View>
        <BlurView intensity={40} tint={colorScheme === 'dark' ? 'dark' : 'light'} style={styles.heroGlass}>
          <Text style={[styles.heroTitle, { color: theme.text }]}>Profile</Text>
          {user ? (
            <>
              <Text style={[styles.name, { color: theme.text }]}>{user.name}</Text>
              <Text style={[styles.wallet, { color: theme.secondary }]}>{user.wallet}</Text>
              <TouchableOpacity style={[styles.button, { backgroundColor: theme.primary }]} onPress={handleSignOut}>
                <Text style={[styles.buttonText, { color: theme.background }]}>Sign Out</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={[styles.subtitle, { color: theme.secondary }]}>Sign in to save your lists and earn rewards.</Text>
              <TouchableOpacity style={[styles.button, { backgroundColor: theme.primary }]} onPress={handleConnect}>
                <Text style={[styles.buttonText, { color: theme.background }]}>Connect Wallet</Text>
              </TouchableOpacity>
            </>
          )}
        </BlurView>
      </View>
      {/* Placeholder for future features */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>My Lists</Text>
        <Text style={[styles.sectionSubtitle, { color: theme.secondary }]}>Coming soon: Curated lists, reviews, and more.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heroContainer: {
    height: 340,
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    marginTop: spacing.xl,
  },
  avatarWrapper: {
    position: 'absolute',
    top: 4,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 2,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: borderRadius.round,
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.7)',
    backgroundColor: '#eee',
  },
  heroGlass: {
    marginTop: 48,
    marginHorizontal: spacing.xl,
    paddingTop: 64,
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.xl,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 8,
    backgroundColor: 'rgba(255,255,255,0.18)',
    overflow: 'hidden',
  },
  heroTitle: {
    ...typography.h1,
    textAlign: 'center',
    marginBottom: spacing.md,
    fontWeight: 'bold',
  },
  name: {
    ...typography.h2,
    marginBottom: spacing.sm,
    fontWeight: 'bold',
  },
  wallet: {
    ...typography.body,
    marginBottom: spacing.lg,
  },
  subtitle: {
    ...typography.body,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  button: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 4,
    marginTop: spacing.md,
  },
  buttonText: {
    ...typography.h2,
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
  },
  section: {
    marginTop: spacing.xl,
    paddingHorizontal: spacing.xl,
  },
  sectionTitle: {
    ...typography.h2,
    marginBottom: spacing.sm,
    fontWeight: 'bold',
  },
  sectionSubtitle: {
    ...typography.body,
    color: '#888',
  },
}); 