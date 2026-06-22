import { ScrollView, View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';

const NOTIFICATIONS = [
  {
    id: '1',
    title: 'Payment Received',
    body: 'You received £14,500.00 from Hive Digital Studio.',
    time: '2h ago',
    icon: '💰',
    read: false,
  },
  {
    id: '2',
    title: 'Card Used',
    body: 'Your Elite card was used at Harrods for £1,240.00.',
    time: '5h ago',
    icon: '💳',
    read: false,
  },
  {
    id: '3',
    title: 'Savings Interest',
    body: 'Interest of £312.50 was credited to your Premium Savings account.',
    time: '1d ago',
    icon: '📈',
    read: true,
  },
  {
    id: '4',
    title: 'Security Alert',
    body: 'New device login detected from London, UK.',
    time: '2d ago',
    icon: '🔐',
    read: true,
  },
];

export default function NotificationsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-navy-900">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        <Animated.View entering={FadeInDown.delay(50).springify()} className="px-6 pt-4 pb-4">
          <Pressable onPress={() => router.back()} className="mb-4">
            <Text className="text-gold-500 text-sm font-medium">← Back</Text>
          </Pressable>
          <View className="flex-row justify-between items-center">
            <Text className="text-white text-2xl font-display font-bold">Notifications</Text>
            <Pressable>
              <Text className="text-gold-500 text-sm font-medium">Mark all read</Text>
            </Pressable>
          </View>
        </Animated.View>

        <View className="px-6 gap-2">
          {NOTIFICATIONS.map((notif, index) => (
            <Animated.View
              key={notif.id}
              entering={FadeInDown.delay(100 + index * 80).springify()}
            >
              <Pressable
                className={`flex-row items-start gap-3 p-4 rounded-2xl border active:opacity-70 ${
                  notif.read
                    ? 'bg-navy-800 border-white/5'
                    : 'bg-navy-700 border-gold-500/20'
                }`}
              >
                <View className="w-10 h-10 rounded-xl bg-navy-900 items-center justify-center flex-shrink-0">
                  <Text>{notif.icon}</Text>
                </View>
                <View className="flex-1">
                  <View className="flex-row justify-between items-center mb-1">
                    <Text className="text-white text-sm font-semibold">{notif.title}</Text>
                    {!notif.read && (
                      <View className="w-2 h-2 rounded-full bg-gold-500" />
                    )}
                  </View>
                  <Text className="text-white/50 text-xs leading-relaxed">{notif.body}</Text>
                  <Text className="text-white/30 text-[10px] mt-2">{notif.time}</Text>
                </View>
              </Pressable>
            </Animated.View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
