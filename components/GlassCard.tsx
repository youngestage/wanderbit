import { useTheme } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { borderRadius, spacing } from '../constants/theme';

interface GlassCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  intensity?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  style,
  intensity = 50,
}) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, style]}>
      <BlurView
        intensity={intensity}
        tint="light"
        style={[styles.blurContainer, { backgroundColor: colors.card }]}
      >
        {children}
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  blurContainer: {
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
}); 