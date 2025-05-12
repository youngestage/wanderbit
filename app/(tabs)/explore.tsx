import React from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { darkTheme, lightTheme, spacing, typography } from '../../constants/theme';

export default function ExploreScreen() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>  
      <Text style={[styles.title, { color: theme.text }]}>Explore</Text>
      <Text style={[styles.subtitle, { color: theme.secondary }]}>Discover new places and experiences.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  title: {
    ...typography.h1,
    marginBottom: spacing.md,
  },
  subtitle: {
    ...typography.body,
    textAlign: 'center',
  },
}); 