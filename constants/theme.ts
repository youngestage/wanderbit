export const lightTheme = {
  background: '#FFFFFF',
  card: 'rgba(255, 255, 255, 0.8)',
  text: '#1A1A1A',
  secondary: '#666666',
  primary: '#FF6B00',
  border: 'rgba(0, 0, 0, 0.1)',
  accent: '#353b41',
  // Additional theme variables
  shadow: 'rgba(0, 0, 0, 0.1)',
  success: '#4CAF50',
  error: '#f44336',
  warning: '#ff9800',
  info: '#2196F3',
};

export const darkTheme = {
  background: '#040506',
  card: 'rgba(255, 255, 255, 0.05)',
  text: '#FFFFFF',
  secondary: '#A1A1A1',
  primary: '#FF6B00',
  border: 'rgba(255, 255, 255, 0.1)',
  accent: '#bec4ca',
  // Additional theme variables
  shadow: 'rgba(0, 0, 0, 0.3)',
  success: '#81C784',
  error: '#E57373',
  warning: '#FFB74D',
  info: '#64B5F6',
};

export type Theme = typeof lightTheme;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const typography = {
  h1: {
    fontFamily: 'Inter-Bold',
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: -0.5,
  },
  h2: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -0.25,
  },
  h3: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 0,
  },
  body: {
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  caption: {
    fontFamily: 'Inter',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
};

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  round: 9999,
}; 