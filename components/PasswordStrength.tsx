import { StyleSheet, Text, View } from 'react-native';
import { spacing, typography } from '../constants/theme';
import { useTheme } from './ThemeProvider';

interface PasswordStrengthProps {
  password: string;
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const theme = useTheme();

  const getStrength = () => {
    if (!password) return 0;
    let strength = 0;
    
    // Length check
    if (password.length >= 8) strength += 1;
    
    // Contains number
    if (/\d/.test(password)) strength += 1;
    
    // Contains lowercase
    if (/[a-z]/.test(password)) strength += 1;
    
    // Contains uppercase
    if (/[A-Z]/.test(password)) strength += 1;
    
    // Contains special character
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1;
    
    return strength;
  };

  const getStrengthText = () => {
    const strength = getStrength();
    switch (strength) {
      case 0:
        return 'Very Weak';
      case 1:
        return 'Weak';
      case 2:
        return 'Fair';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      case 5:
        return 'Very Strong';
      default:
        return '';
    }
  };

  const getStrengthColor = () => {
    const strength = getStrength();
    switch (strength) {
      case 0:
      case 1:
        return '#FF4444';
      case 2:
        return '#FFBB33';
      case 3:
        return '#00C851';
      case 4:
      case 5:
        return '#007E33';
      default:
        return theme.secondary;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.bars}>
        {[...Array(5)].map((_, index) => (
          <View
            key={index}
            style={[
              styles.bar,
              {
                backgroundColor:
                  index < getStrength()
                    ? getStrengthColor()
                    : theme.secondary + '40',
              },
            ]}
          />
        ))}
      </View>
      <Text style={[typography.caption, { color: getStrengthColor() }]}>
        {getStrengthText()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.xs,
  },
  bars: {
    flexDirection: 'row',
    gap: spacing.xs,
  },
  bar: {
    flex: 1,
    height: 4,
    borderRadius: 2,
  },
}); 