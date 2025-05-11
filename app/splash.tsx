import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { borderRadius, darkTheme, lightTheme, spacing, typography } from '../constants/theme';

export default function SplashScreen() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;
  const router = useRouter();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 10,
        friction: 3,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      router.replace('/(tabs)');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>  
      <BlurView intensity={30} style={StyleSheet.absoluteFill} />
      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>🧭</Text>
        </View>
        <Text style={[styles.title, { color: theme.text }]}>WanderBit</Text>
        <Text style={[styles.subtitle, { color: theme.secondary }]}>Explore Places. Earn Rewards.</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: borderRadius.round,
    backgroundColor: 'rgba(255,255,255,0.18)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 8,
  },
  logo: {
    fontSize: 48,
  },
  title: {
    ...typography.h1,
    marginBottom: spacing.sm,
    fontWeight: 'bold',
  },
  subtitle: {
    ...typography.body,
    opacity: 0.8,
  },
}); 