import { StyleSheet } from 'react-native';

export const lightTheme = {
  text: '#22262a',
  background: '#f9fafb',
  primary: '#0a7ea4',
  secondary: '#64748b',
  accent: '#0284c7',
  card: '#ffffff',
  success: '#059669',
  warning: '#d97706',
  error: '#dc2626',
  surface: '#ffffff',
  surfaceHover: '#f1f5f9',
  border: '#e2e8f0',
  placeholder: '#94a3b8',
};

export const darkTheme = {
  text: '#f8fafc',
  background: '#0f172a',
  primary: '#38bdf8',
  secondary: '#94a3b8',
  accent: '#0ea5e9',
  card: '#1e293b',
  success: '#34d399',
  warning: '#fbbf24',
  error: '#f87171',
  surface: '#1e293b',
  surfaceHover: '#334155',
  border: '#334155',
  placeholder: '#64748b',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const typography = StyleSheet.create({
  h1: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: -0.5,
  },
  h2: {
    fontFamily: 'ClashDisplay-Semibold',
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -0.3,
  },
  h3: {
    fontFamily: 'ClashDisplay-Medium',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.2,
  },
  body: {
    fontFamily: 'ClashDisplay',
    fontSize: 16,
    lineHeight: 24,
  },
  bodySmall: {
    fontFamily: 'ClashDisplay',
    fontSize: 14,
    lineHeight: 20,
  },
  caption: {
    fontFamily: 'ClashDisplay',
    fontSize: 12,
    lineHeight: 16,
  },
});

export type Theme = typeof lightTheme;

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  round: 9999,
}; 