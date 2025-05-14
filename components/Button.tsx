import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';
import { spacing, typography } from '../constants/theme';
import { useTheme } from './ThemeProvider';

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  style?: ViewStyle;
  disabled?: boolean;
}

export function Button({ onPress, title, variant = 'primary', style, disabled }: ButtonProps) {
  const theme = useTheme();

  const getBackgroundColor = () => {
    if (disabled) {
      return theme.secondary;
    }
    switch (variant) {
      case 'primary':
        return theme.primary;
      case 'secondary':
        return theme.secondary;
      case 'outline':
        return 'transparent';
      default:
        return theme.primary;
    }
  };

  const getBorderColor = () => {
    if (disabled) {
      return 'transparent';
    }
    switch (variant) {
      case 'outline':
        return theme.primary;
      default:
        return 'transparent';
    }
  };

  const getTextColor = () => {
    if (disabled) {
      return theme.text;
    }
    switch (variant) {
      case 'outline':
        return theme.primary;
      default:
        return theme.background;
    }
  };

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: getBackgroundColor(),
          borderColor: getBorderColor(),
          opacity: disabled ? 0.6 : 1,
        },
        style,
      ]}
      disabled={disabled}
    >
      <Text
        style={[
          typography.body,
          styles.text,
          { color: getTextColor() },
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
    borderWidth: 2,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'ClashDisplay-Medium',
  },
}); 