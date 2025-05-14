import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { spacing, typography } from '../constants/theme';
import { useTheme } from './ThemeProvider';

interface InputProps extends TextInputProps {
  label: string;
  error?: string;
}

export function Input({ label, error, style, ...props }: InputProps) {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[typography.caption, { color: theme.text }]}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          {
            color: theme.text,
            backgroundColor: theme.background,
            borderColor: error ? theme.accent : theme.secondary,
          },
          style,
        ]}
        placeholderTextColor={theme.secondary}
        {...props}
      />
      {error && (
        <Text style={[typography.caption, { color: theme.accent }]}>{error}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.xs,
  },
  input: {
    height: 48,
    borderRadius: 24,
    paddingHorizontal: spacing.md,
    borderWidth: 2,
    fontFamily: 'ClashDisplay',
    fontSize: 16,
  },
}); 