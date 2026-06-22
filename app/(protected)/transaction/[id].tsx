import { View, Text, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useTransactionStore } from '@/store/useTransactionStore';
import { formatCurrency } from '@/lib/utils/currency';
import { formatDate, formatTime } from '@/lib/utils/date';
import { Colors } from '@/theme/colors';

export default function TransactionDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { getTransactionById } = useTransactionStore();
  const txn = getTransactionById(id);

  if (!txn) {
    return (
      <SafeAreaView className="flex-1 bg-navy-900 items-center justify-center">
        <Text className="text-white">Transaction not found</Text>
      </SafeAreaView>
    );
  }

  const isCredit = txn.amount > 0;
  const statusColor = txn.status === 'completed' ? Colors.status.success :
    txn.status === 'pending' ? Colors.status.warning : Colors.status.danger;

  return (
    <SafeAreaView className="flex-1 bg-navy-900">
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>

        {/* Header */}
        <Animated.View entering={FadeInDown.delay(50).springify()} className="px-6 pt-4 pb-2">
          <Pressable onPress={() => router.back()} className="mb-6">
            <Text className="text-gold-500 text-sm font-medium">← Back</Text>
          </Pressable>
          <Text className="text-white/40 text-xs uppercase tracking-widest mb-1">Transaction</Text>
          <Text className="text-white text-2xl font-display font-bold">{txn.title}</Text>
        </Animated.View>

        {/* Amount Display */}
        <Animated.View
          entering={FadeInDown.delay(150).springify()}
          className="mx-6 mt-4 bg-navy-800 rounded-3xl p-8 items-center"
        >
          <Text
            className={`text-5xl font-display font-bold ${
              isCredit ? 'text-green-400' : 'text-white'
            }`}
          >
            {isCredit ? '+' : ''}{formatCurrency(txn.amount)}
          </Text>
          <View
            className="mt-3 px-4 py-1.5 rounded-full"
            style={{ backgroundColor: `${statusColor}20` }}
          >
            <Text style={{ color: statusColor }} className="text-xs font-semibold capitalize">
              {txn.status}
            </Text>
          </View>
        </Animated.View>

        {/* Transaction Details */}
        <Animated.View entering={FadeInDown.delay(250).springify()} className="mx-6 mt-4">
          {[
            { label: 'Description', value: txn.description },
            { label: 'Date', value: formatDate(txn.date, 'long') },
            { label: 'Time', value: formatTime(txn.date) },
            { label: 'Category', value: txn.category.charAt(0).toUpperCase() + txn.category.slice(1) },
            { label: 'Reference', value: txn.reference },
            ...(txn.merchant ? [{ label: 'Merchant', value: txn.merchant }] : []),
          ].map((detail, index, arr) => (
            <View
              key={detail.label}
              className={`flex-row justify-between py-4 ${
                index < arr.length - 1 ? 'border-b border-white/5' : ''
              }`}
            >
              <Text className="text-white/40 text-sm">{detail.label}</Text>
              <Text className="text-white text-sm font-medium text-right flex-1 ml-8">
                {detail.value}
              </Text>
            </View>
          ))}
        </Animated.View>

        {/* Actions */}
        <Animated.View entering={FadeInDown.delay(350).springify()} className="mx-6 mt-6 gap-3">
          <Pressable className="bg-navy-800 border border-white/10 rounded-2xl py-4 items-center active:opacity-70">
            <Text className="text-white text-sm font-medium">Download Receipt</Text>
          </Pressable>
          <Pressable className="border border-red-500/30 rounded-2xl py-4 items-center active:opacity-70">
            <Text className="text-red-400 text-sm font-medium">Dispute Transaction</Text>
          </Pressable>
        </Animated.View>

      </ScrollView>
    </SafeAreaView>
  );
}
