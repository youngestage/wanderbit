import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Animated, Keyboard, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { KeyboardDismissView } from '../../components/KeyboardDismissView';
import { Logo } from '../../components/Logo';
import { PasswordStrength } from '../../components/PasswordStrength';
import { SocialButton } from '../../components/SocialButton';
import { useTheme } from '../../components/ThemeProvider';
import { spacing, typography } from '../../constants/theme';
import { enableLayoutAnimations } from '../../utils/animations';

export default function SignUpScreen() {
  const theme = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; password?: string } = {};
    
    if (!name) {
      newErrors.name = 'Name is required';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = async () => {
    Keyboard.dismiss();
    if (!validateForm()) return;

    setIsLoading(true);
    enableLayoutAnimations();

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      router.replace('/(tabs)');
    } catch (error) {
      setErrors({ email: 'This email is already registered' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialAuth = async (provider: string) => {
    setIsLoading(true);
    try {
      // Simulate social auth
      await new Promise(resolve => setTimeout(resolve, 1500));
      router.replace('/(tabs)');
    } catch (error) {
      setErrors({ email: `${provider} authentication failed` });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardDismissView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
          <View style={styles.header}>
            <Logo width={120} height={120} />
            <Text style={[typography.h1, { color: theme.text }]}>Join WanderBit</Text>
            <Text style={[typography.body, { color: theme.secondary }]}>
              Create an account to start exploring
            </Text>
          </View>

          <View style={styles.form}>
            <Input
              label="Name"
              placeholder="Enter your name"
              value={name}
              onChangeText={(text) => {
                setName(text);
                setErrors({ ...errors, name: undefined });
              }}
              autoCapitalize="words"
              error={errors.name}
            />
            <Input
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setErrors({ ...errors, email: undefined });
              }}
              autoCapitalize="none"
              keyboardType="email-address"
              error={errors.email}
            />
            <Input
              label="Password"
              placeholder="Create a password"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setErrors({ ...errors, password: undefined });
              }}
              secureTextEntry
              error={errors.password}
            />
            <PasswordStrength password={password} />
            <Button
              title={isLoading ? "Creating account..." : "Sign Up"}
              onPress={handleSignUp}
              style={styles.button}
              disabled={isLoading}
            />
          </View>

          <View style={styles.socialAuth}>
            <View style={styles.divider}>
              <View style={[styles.dividerLine, { backgroundColor: theme.secondary }]} />
              <Text style={[typography.body, { color: theme.secondary }]}>or continue with</Text>
              <View style={[styles.dividerLine, { backgroundColor: theme.secondary }]} />
            </View>
            <View style={styles.socialButtons}>
              <SocialButton
                title="Google"
                icon="logo-google"
                onPress={() => handleSocialAuth('Google')}
                style={styles.socialButton}
                disabled={isLoading}
              />
              <SocialButton
                title="Apple"
                icon="logo-apple"
                onPress={() => handleSocialAuth('Apple')}
                style={styles.socialButton}
                disabled={isLoading}
              />
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={[typography.body, { color: theme.secondary }]}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => router.push('/sign-in')}>
              <Text style={[typography.body, { color: theme.primary, marginLeft: spacing.xs }]}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </ScrollView>
    </KeyboardDismissView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    padding: spacing.xl,
    minHeight: '100%',
  },
  header: {
    alignItems: 'center',
    gap: spacing.sm,
    marginVertical: spacing.xxl,
  },
  form: {
    gap: spacing.lg,
  },
  button: {
    marginTop: spacing.md,
  },
  socialAuth: {
    marginTop: spacing.xl,
    gap: spacing.lg,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    opacity: 0.2,
  },
  socialButtons: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  socialButton: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto',
    paddingBottom: spacing.xl,
  },
}); 