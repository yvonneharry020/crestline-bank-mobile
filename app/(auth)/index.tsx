import { View, Text, Pressable, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, {
  FadeInDown,
  FadeInUp,
} from 'react-native-reanimated';

export default function WelcomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-navy-900">
      <View className="flex-1 px-6 pt-16 pb-10 justify-between">

        <Animated.View entering={FadeInDown.delay(100).springify()}>
          <Text className="text-gold-500 text-xs font-semibold tracking-widest uppercase mb-3">
            Est. 1894
          </Text>
          <Text className="text-white text-5xl font-display font-bold leading-tight">
            Crestline{'\n'}Bank
          </Text>
          <Text className="text-slate-400 text-base mt-4 leading-relaxed">
            Private banking redefined for the modern generation of wealth.
          </Text>
        </Animated.View>

        <Animated.View
          entering={FadeInUp.delay(400).springify()}
          className="gap-4"
        >
          <View className="border border-white/10 rounded-2xl p-5 bg-white/5">
            <Text className="text-white/50 text-xs uppercase tracking-wider mb-1">
              Total Assets Under Management
            </Text>
            <Text className="text-white text-3xl font-bold font-display">
              £485,591.25
            </Text>
          </View>

          <Link href="/(auth)/sign-in" asChild>
            <Pressable className="bg-gold-500 rounded-2xl py-4 items-center active:opacity-80">
              <Text className="text-navy-900 text-base font-bold tracking-wide">
                Sign In to Your Account
              </Text>
            </Pressable>
          </Link>

          <Link href="/(auth)/sign-up" asChild>
            <Pressable className="border border-white/20 rounded-2xl py-4 items-center active:opacity-80">
              <Text className="text-white text-base font-medium">
                Request Private Banking Access
              </Text>
            </Pressable>
          </Link>

          <Text className="text-white/30 text-xs text-center mt-2">
            Protected by 256-bit AES encryption · FCA Regulated
          </Text>
        </Animated.View>

      </View>
    </SafeAreaView>
  );
}
