import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GlassCard } from '../../components/GlassCard';
import { useTheme } from '../../components/ThemeProvider';
import { spacing, typography } from '../../constants/theme';

interface ProfileOption {
  id: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  action: () => void;
}

export default function ProfileScreen() {
  const theme = useTheme();
  const [hasProfileImage, setHasProfileImage] = useState(false);

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => {
            // Add any cleanup logic here (e.g., clear tokens, reset state)
            router.replace('/sign-in');
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handleLinkWallet = () => {
    // Implement wallet linking logic
    console.log('Link wallet');
  };

  const handleUpdateProfile = () => {
    // Implement profile update logic
    console.log('Update profile');
  };

  const PROFILE_OPTIONS: ProfileOption[] = [
    {
      id: '1',
      title: 'Link Lightning Wallet',
      icon: 'flash',
      color: '#FFE4E4',
      action: handleLinkWallet,
    },
    {
      id: '2',
      title: 'Preferences',
      icon: 'settings',
      color: '#E4FFEA',
      action: () => console.log('Preferences'),
    },
    {
      id: '3',
      title: 'Security',
      icon: 'shield',
      color: '#E4F1FF',
      action: () => console.log('Security'),
    },
    {
      id: '4',
      title: 'Help & Support',
      icon: 'help-circle',
      color: '#F4E4FF',
      action: () => console.log('Help'),
    },
  ];

  const renderProfileOption = ({ id, title, icon, color, action }: ProfileOption) => (
    <TouchableOpacity key={id} onPress={action} activeOpacity={0.8}>
      <GlassCard style={styles.optionCard}>
        <View style={[styles.iconContainer, { backgroundColor: color }]}>
          <Ionicons name={icon} size={24} color={theme.primary} />
        </View>
        <View style={styles.optionContent}>
          <Text style={[typography.body, { color: theme.text }]}>{title}</Text>
          <Ionicons name="chevron-forward" size={20} color={theme.secondary} />
        </View>
      </GlassCard>
    </TouchableOpacity>
  );

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      <GlassCard style={styles.profileCard}>
        <BlurView intensity={20} tint="light" style={StyleSheet.absoluteFill} />
        <LinearGradient
          colors={[theme.primary + '20', theme.primary + '10']}
          style={styles.profileGradient}
        >
          <TouchableOpacity onPress={handleUpdateProfile} style={styles.profileImageContainer}>
            {hasProfileImage ? (
              <Image
                source={{ uri: 'https://placeholder.com/150' }}
                style={styles.profileImage}
              />
            ) : (
              <View style={[styles.emptyProfile, { backgroundColor: theme.primary + '20' }]}>
                <Ionicons name="person" size={40} color={theme.primary} />
              </View>
            )}
            <View style={[styles.editBadge, { backgroundColor: theme.primary }]}>
              <Ionicons name="camera" size={14} color="white" />
            </View>
          </TouchableOpacity>
          
          <Text style={[typography.h2, { color: theme.text }]}>Anonymous Explorer</Text>
          <Text style={[typography.caption, { color: theme.secondary }]}>
            Complete your profile to earn more rewards
          </Text>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={[typography.h3, { color: theme.text }]}>12</Text>
              <Text style={[typography.caption, { color: theme.secondary }]}>Places Visited</Text>
            </View>
            <View style={[styles.divider, { backgroundColor: theme.secondary + '20' }]} />
            <View style={styles.statItem}>
              <Text style={[typography.h3, { color: theme.text }]}>21,450</Text>
              <Text style={[typography.caption, { color: theme.secondary }]}>Sats Earned</Text>
            </View>
          </View>
        </LinearGradient>
      </GlassCard>

      <View style={styles.section}>
        <Text style={[typography.h3, { color: theme.text, marginBottom: spacing.md }]}>
          Settings
        </Text>
        <View style={styles.optionsList}>
          {PROFILE_OPTIONS.map(renderProfileOption)}
        </View>
      </View>

      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={[typography.body, { color: theme.primary }]}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: spacing.xl,
  },
  profileCard: {
    overflow: 'hidden',
    marginBottom: spacing.xl,
  },
  profileGradient: {
    padding: spacing.xl,
    alignItems: 'center',
    gap: spacing.sm,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: spacing.md,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  emptyProfile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.md,
    paddingTop: spacing.md,
    width: '100%',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
    gap: spacing.xs,
  },
  divider: {
    width: 1,
    height: 40,
    marginHorizontal: spacing.md,
  },
  section: {
    marginBottom: spacing.xl,
  },
  optionsList: {
    gap: spacing.md,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    gap: spacing.md,
  },
  iconContainer: {
    padding: spacing.sm,
    borderRadius: 12,
  },
  optionContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoutButton: {
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
}); 