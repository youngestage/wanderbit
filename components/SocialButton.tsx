import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';
import { spacing, typography } from '../constants/theme';
import { useTheme } from './ThemeProvider';

interface SocialButtonProps {
  onPress: () => void;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  style?: ViewStyle;
  disabled?: boolean;
}

export function SocialButton({ onPress, title, icon, style, disabled }: SocialButtonProps) {
  const theme = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: theme.background,
          borderColor: theme.secondary,
          opacity: disabled ? 0.6 : 1,
        },
        style,
      ]}
      disabled={disabled}
    >
      <Ionicons name={icon} size={20} color={theme.text} style={styles.icon} />
      <Text
        style={[
          typography.body,
          styles.text,
          { color: theme.text },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
    borderWidth: 2,
  },
  icon: {
    marginRight: spacing.sm,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'ClashDisplay-Medium',
  },
}); 