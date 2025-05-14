import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../components/ThemeProvider';
import { spacing, typography } from '../../constants/theme';

export default function ExploreScreen() {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[typography.h1, { color: theme.text }]}>Explore</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.xl,
  },
}); 