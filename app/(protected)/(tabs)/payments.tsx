import { ScrollView, View, Text, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useState } from 'react';
import { formatCurrency } from '@/lib/utils/currency';

const RECENT_PAYEES = [
  { id: '1', name: 'James Wilson', initials: 'JW', color: '#6366F1' },
  { id: '2', name: 'Sarah Chen', initials: 'SC', color: '#EC4899' },
  { id: '3', name: 'Marcus Reid', initials: 'MR', color: '#22C55E' },
  { id: '4', name: 'Olivia Park', initials: 'OP', color: '#F59E0B' },
];

export default function PaymentsScreen() {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-navy-900">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>

        <Animated.View entering={FadeInDown.delay(50).springify()} className="px-6 pt-4 pb-2">
          <Text className="text-white text-2xl font-display font-bold">Payments</Text>
          <Text className="text-white/40 text-sm mt-1">Send & receive funds instantly</Text>
        </Animated.View>

        {/* Amount Input */}
        <Animated.View entering={FadeInDown.delay(150).springify()} className="mx-6 mt-6">
          <Text className="text-white/40 text-xs uppercase tracking-wider mb-3">Amount</Text>
          <View className="bg-navy-800 border border-white/10 rounded-3xl px-6 py-6 items-center">
            <View className="flex-row items-center">
              <Text className="text-gold-500 text-3xl font-bold mr-2">£</Text>
              <TextInput
                value={amount}
                onChangeText={setAmount}
                placeholder="0.00"
                placeholderTextColor="rgba(255,255,255,0.15)"
                keyboardType="decimal-pad"
                className="text-white text-5xl font-display font-bold"
                style={{ minWidth: 120 }}
              />
            </View>
            <Text className="text-white/30 text-sm mt-2">
              Available: {formatCurrency(48250.75)}
            </Text>
          </View>

          <View className="flex-row gap-2 mt-3">
            {['£50', '£100', '£500', '£1,000'].map((preset) => (
              <Pressable
                key={preset}
                onPress={() => setAmount(preset.replace('£', '').replace(',', ''))}
                className="flex-1 bg-navy-800 border border-white/10 rounded-xl py-2 items-center active:opacity-70"
              >
                <Text className="text-white/60 text-xs font-medium">{preset}</Text>
              </Pressable>
            ))}
          </View>
        </Animated.View>

        {/* Recent Payees */}
        <Animated.View entering={FadeInDown.delay(250).springify()} className="px-6 mt-8">
          <Text className="text-white/50 text-xs uppercase tracking-wider mb-4">Recent Payees</Text>
          <View className="flex-row gap-4">
            {RECENT_PAYEES.map((payee) => (
              <Pressable key={payee.id} className="items-center gap-2 active:opacity-70">
                <View
                  className="w-14 h-14 rounded-full items-center justify-center"
                  style={{ backgroundColor: `${payee.color}30` }}
                >
                  <Text style={{ color: payee.color, fontSize: 16, fontWeight: '700' }}>
                    {payee.initials}
                  </Text>
                </View>
                <Text className="text-white/60 text-[10px] text-center" numberOfLines={1}>
                  {payee.name.split(' ')[0]}
                </Text>
              </Pressable>
            ))}
          </View>
        </Animated.View>

        {/* Recipient */}
        <Animated.View entering={FadeInDown.delay(350).springify()} className="mx-6 mt-8">
          <Text className="text-white/40 text-xs uppercase tracking-wider mb-3">Send To</Text>
          <TextInput
            value={recipient}
            onChangeText={setRecipient}
            placeholder="Name, account number or IBAN"
            placeholderTextColor="rgba(255,255,255,0.25)"
            className="bg-navy-800 border border-white/10 rounded-2xl px-4 py-4 text-white text-base"
          />
        </Animated.View>

        {/* Send Button */}
        <Animated.View entering={FadeInDown.delay(450).springify()} className="mx-6 mt-8">
          <Pressable className="bg-gold-500 rounded-2xl py-4 items-center active:opacity-80">
            <Text className="text-navy-900 text-base font-bold">Send Payment</Text>
          </Pressable>
        </Animated.View>

      </ScrollView>
    </SafeAreaView>
  );
}
