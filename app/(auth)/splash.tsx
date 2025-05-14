import { router } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Logo } from '../../components/Logo';
import { useTheme } from '../../components/ThemeProvider';

export default function SplashScreen() {
  const theme = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/sign-in');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Logo width={200} height={200} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 