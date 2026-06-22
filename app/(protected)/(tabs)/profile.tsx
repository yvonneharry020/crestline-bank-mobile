import { ScrollView, View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { mockUser } from '@/data';

const MENU_SECTIONS = [
  {
    title: 'Account',
    items: [
      { label: 'Personal Details', icon: '👤' },
      { label: 'Security & Biometrics', icon: '🔐' },
      { label: 'Notifications', icon: '🔔' },
      { label: 'Documents', icon: '📄' },
    ],
  },
  {
    title: 'Banking',
    items: [
      { label: 'Account Statements', icon: '📊' },
      { label: 'Interest Rates', icon: '📈' },
      { label: 'Linked Accounts', icon: '🔗' },
      { label: 'Beneficiaries', icon: '👥' },
    ],
  },
  {
    title: 'Support',
    items: [
      { label: 'Private Banker', icon: '🎩' },
      { label: 'Help Centre', icon: '💬' },
      { label: 'Terms & Conditions', icon: '📋' },
    ],
  },
];

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-navy-900">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>

        {/* Profile Header */}
        <Animated.View entering={FadeInDown.delay(50).springify()} className="px-6 pt-4 pb-6">
          <Text className="text-white text-2xl font-display font-bold mb-6">Profile</Text>
          <View className="flex-row items-center gap-4">
            <View className="w-16 h-16 rounded-full bg-gold-500/20 border-2 border-gold-500 items-center justify-center">
              <Text className="text-gold-500 text-xl font-bold">
                {mockUser.firstName[0]}{mockUser.lastName[0]}
              </Text>
            </View>
            <View className="flex-1">
              <Text className="text-white text-lg font-display font-bold">
                {mockUser.firstName} {mockUser.lastName}
              </Text>
              <Text className="text-white/40 text-sm">{mockUser.email}</Text>
              <View className="flex-row items-center gap-2 mt-1">
                <View className="bg-gold-500/20 rounded-full px-2.5 py-0.5">
                  <Text className="text-gold-400 text-[10px] font-semibold uppercase tracking-wide">
                    {mockUser.tier} Member
                  </Text>
                </View>
                <View className="bg-green-500/20 rounded-full px-2.5 py-0.5">
                  <Text className="text-green-400 text-[10px] font-semibold">KYC Verified</Text>
                </View>
              </View>
            </View>
          </View>
        </Animated.View>

        {/* Menu Sections */}
        {MENU_SECTIONS.map((section, sIndex) => (
          <Animated.View
            key={section.title}
            entering={FadeInDown.delay(150 + sIndex * 100).springify()}
            className="px-6 mb-6"
          >
            <Text className="text-white/30 text-xs uppercase tracking-widest mb-3">
              {section.title}
            </Text>
            <View className="bg-navy-800 rounded-2xl overflow-hidden border border-white/5">
              {section.items.map((item, idx) => (
                <Pressable
                  key={item.label}
                  className={`flex-row items-center px-4 py-4 active:opacity-60 ${
                    idx < section.items.length - 1 ? 'border-b border-white/5' : ''
                  }`}
                >
                  <Text className="text-xl mr-3">{item.icon}</Text>
                  <Text className="flex-1 text-white text-sm font-medium">{item.label}</Text>
                  <Text className="text-white/30 text-sm">›</Text>
                </Pressable>
              ))}
            </View>
          </Animated.View>
        ))}

        {/* Sign Out */}
        <Animated.View entering={FadeInDown.delay(500).springify()} className="mx-6">
          <Pressable
            onPress={() => router.replace('/(auth)')}
            className="border border-red-500/30 rounded-2xl py-4 items-center active:opacity-70"
          >
            <Text className="text-red-400 text-sm font-semibold">Sign Out</Text>
          </Pressable>
        </Animated.View>

      </ScrollView>
    </SafeAreaView>
  );
}
