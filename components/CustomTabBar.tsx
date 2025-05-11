import { useTheme } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import React from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import { borderRadius, darkTheme, lightTheme, spacing } from '../constants/theme';

interface TabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

export function CustomTabBar({ state, descriptors, navigation }: TabBarProps) {
  const { colors } = useTheme();
  const theme = colors.background === lightTheme.background ? lightTheme : darkTheme;

  return (
    <View style={styles.container}>
      <BlurView intensity={30} style={StyleSheet.absoluteFill} />
      <View style={[styles.tabBar, { backgroundColor: theme.card }]}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const icon = options.tabBarIcon({ color: isFocused ? theme.primary : theme.secondary, size: 24 });

          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
              style={styles.tab}
              activeOpacity={0.7}
            >
              <Animated.View
                style={[
                  styles.iconContainer,
                  {
                    backgroundColor: isFocused ? theme.primary + '20' : 'transparent',
                  },
                ]}
              >
                {icon}
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    paddingBottom: spacing.md,
  },
  tabBar: {
    flexDirection: 'row',
    marginHorizontal: spacing.md,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    overflow: 'hidden',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },
  iconContainer: {
    padding: spacing.sm,
    borderRadius: borderRadius.round,
  },
}); 