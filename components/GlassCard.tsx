import { BlurView } from 'expo-blur';
import { Platform, StyleSheet, useColorScheme, View, ViewProps } from 'react-native';
import { spacing } from '../constants/theme';
import { useTheme } from './ThemeProvider';

interface GlassCardProps extends ViewProps {
  intensity?: number;
  children: React.ReactNode;
}

export function GlassCard({ intensity = 40, style, children, ...props }: GlassCardProps) {
  const theme = useTheme();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  if (Platform.OS === 'ios') {
    return (
      <BlurView
        intensity={isDark ? 30 : intensity}
        tint={isDark ? 'dark' : 'light'}
        style={[
          styles.card,
          {
            borderColor: isDark ? theme.border : 'rgba(255, 255, 255, 0.1)',
            backgroundColor: isDark ? 'rgba(30, 41, 59, 0.7)' : 'rgba(255, 255, 255, 0.7)',
            shadowColor: isDark ? '#000' : '#fff',
            shadowOffset: {
              width: isDark ? 0 : -2,
              height: isDark ? 8 : -2,
            },
            shadowOpacity: isDark ? 0.25 : 0.15,
            shadowRadius: isDark ? 16 : 12,
          },
          style,
        ]}
        {...props}
      >
        {children}
      </BlurView>
    );
  }

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: isDark ? theme.card : theme.surface,
          borderColor: isDark ? theme.border : theme.secondary + '20',
          shadowColor: isDark ? '#000' : '#fff',
          shadowOffset: {
            width: isDark ? 0 : -2,
            height: isDark ? 8 : -2,
          },
          shadowOpacity: isDark ? 0.25 : 0.15,
          shadowRadius: isDark ? 16 : 12,
          elevation: isDark ? 8 : 4,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: spacing.md,
    borderWidth: 1,
  },
}); 