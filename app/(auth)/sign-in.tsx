import { View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useState } from 'react';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleSignIn = () => {
    router.replace('/(protected)/(tabs)/');
  };

  return (
    <SafeAreaView className="flex-1 bg-navy-900">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <View className="flex-1 px-6 pt-8 pb-10 justify-between">

          <Animated.View entering={FadeInDown.delay(100).springify()}>
            <Pressable onPress={() => router.back()} className="mb-8">
              <Text className="text-gold-500 text-sm font-medium">← Back</Text>
            </Pressable>
            <Text className="text-white text-4xl font-display font-bold mb-2">
              Welcome back
            </Text>
            <Text className="text-white/50 text-base">
              Sign in to your Crestline account
            </Text>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(200).springify()} className="gap-4">
            <View>
              <Text className="text-white/60 text-xs uppercase tracking-wider mb-2">
                Email Address
              </Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="you@example.com"
                placeholderTextColor="rgba(255,255,255,0.25)"
                keyboardType="email-address"
                autoCapitalize="none"
                className="bg-navy-800 border border-white/10 rounded-2xl px-4 py-4 text-white text-base"
              />
            </View>

            <View>
              <Text className="text-white/60 text-xs uppercase tracking-wider mb-2">
                Password
              </Text>
              <View className="relative">
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Enter your password"
                  placeholderTextColor="rgba(255,255,255,0.25)"
                  secureTextEntry={!isPasswordVisible}
                  className="bg-navy-800 border border-white/10 rounded-2xl px-4 py-4 text-white text-base pr-16"
                />
                <Pressable
                  onPress={() => setPasswordVisible(!isPasswordVisible)}
                  className="absolute right-4 top-4"
                >
                  <Text className="text-gold-500 text-sm font-medium">
                    {isPasswordVisible ? 'Hide' : 'Show'}
                  </Text>
                </Pressable>
              </View>
            </View>

            <Pressable className="items-end">
              <Text className="text-gold-500 text-sm font-medium">
                Forgot password?
              </Text>
            </Pressable>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(350).springify()} className="gap-4">
            <Pressable
              onPress={handleSignIn}
              className="bg-gold-500 rounded-2xl py-4 items-center active:opacity-80"
            >
              <Text className="text-navy-900 text-base font-bold">
                Sign In
              </Text>
            </Pressable>

            <View className="flex-row items-center gap-3">
              <View className="flex-1 h-px bg-white/10" />
              <Text className="text-white/30 text-xs">or continue with</Text>
              <View className="flex-1 h-px bg-white/10" />
            </View>

            <View className="flex-row gap-3">
              <Pressable className="flex-1 bg-navy-800 border border-white/10 rounded-xl py-3 items-center active:opacity-70">
                <Text className="text-white text-sm font-medium">Face ID</Text>
              </Pressable>
              <Pressable className="flex-1 bg-navy-800 border border-white/10 rounded-xl py-3 items-center active:opacity-70">
                <Text className="text-white text-sm font-medium">Touch ID</Text>
              </Pressable>
            </View>
          </Animated.View>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
