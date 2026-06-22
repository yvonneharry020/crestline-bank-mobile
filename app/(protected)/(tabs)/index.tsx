import { ScrollView, View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useAccountStore } from '@/store/useAccountStore';
import { useTransactionStore } from '@/store/useTransactionStore';
import { mockUser } from '@/data';
import { formatCurrency, maskBalance } from '@/lib/utils/currency';
import { formatDate } from '@/lib/utils/date';
import { Colors } from '@/theme/colors';

const QUICK_ACTIONS = [
  { label: 'Send', icon: '↑', color: Colors.gold[500] },
  { label: 'Receive', icon: '↓', color: '#22C55E' },
  { label: 'Pay Bills', icon: '⚡', color: '#3B82F6' },
  { label: 'Top Up', icon: '+', color: '#A855F7' },
];

export default function HomeScreen() {
  const { getSelectedAccount, getTotalBalance, isBalanceVisible, toggleBalanceVisibility } =
    useAccountStore();
  const { transactions } = useTransactionStore();
  const account = getSelectedAccount();
  const totalBalance = getTotalBalance();

  return (
    <SafeAreaView className="flex-1 bg-navy-900">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        {/* Header */}
        <Animated.View
          entering={FadeInDown.delay(50).springify()}
          className="flex-row justify-between items-center px-6 pt-4 pb-2"
        >
          <View>
            <Text className="text-white/50 text-sm">Good morning,</Text>
            <Text className="text-white text-xl font-display font-bold">
              {mockUser.firstName} ✦
            </Text>
          </View>
          <Pressable
            onPress={() => router.push('/(protected)/notifications')}
            className="w-10 h-10 rounded-full bg-navy-800 border border-white/10 items-center justify-center"
          >
            <Text className="text-white text-base">🔔</Text>
          </Pressable>
        </Animated.View>

        {/* Balance Card */}
        <Animated.View
          entering={FadeInDown.delay(150).springify()}
          className="mx-6 mt-4 rounded-3xl p-6 overflow-hidden"
          style={{ backgroundColor: Colors.navy[800] }}
        >
          <View className="flex-row justify-between items-start mb-6">
            <View>
              <Text className="text-white/50 text-xs uppercase tracking-widest mb-2">
                Total Balance
              </Text>
              <Pressable onPress={toggleBalanceVisibility}>
                <Text className="text-white text-4xl font-display font-bold tracking-tight">
                  {maskBalance(totalBalance, isBalanceVisible)}
                </Text>
              </Pressable>
              <Text className="text-green-400 text-sm font-medium mt-1">
                +£2,340.50 this month
              </Text>
            </View>
            <View className="bg-gold-500/20 rounded-full px-3 py-1">
              <Text className="text-gold-400 text-xs font-semibold">Elite</Text>
            </View>
          </View>

          <View className="h-px bg-white/8 mb-4" />

          <View className="flex-row justify-between">
            <View>
              <Text className="text-white/40 text-xs mb-1">Account No.</Text>
              <Text className="text-white text-sm font-mono">
                {account?.accountNumber}
              </Text>
            </View>
            <View className="items-end">
              <Text className="text-white/40 text-xs mb-1">Currency</Text>
              <Text className="text-white text-sm font-semibold">
                {account?.currency}
              </Text>
            </View>
          </View>
        </Animated.View>

        {/* Quick Actions */}
        <Animated.View
          entering={FadeInDown.delay(250).springify()}
          className="px-6 mt-6"
        >
          <Text className="text-white/50 text-xs uppercase tracking-widest mb-4">
            Quick Actions
          </Text>
          <View className="flex-row justify-between">
            {QUICK_ACTIONS.map((action, index) => (
              <Pressable
                key={action.label}
                className="items-center gap-2 active:opacity-70"
              >
                <View
                  className="w-14 h-14 rounded-2xl items-center justify-center"
                  style={{ backgroundColor: `${action.color}18` }}
                >
                  <Text style={{ fontSize: 20, color: action.color }}>
                    {action.icon}
                  </Text>
                </View>
                <Text className="text-white/60 text-xs font-medium">
                  {action.label}
                </Text>
              </Pressable>
            ))}
          </View>
        </Animated.View>

        {/* Recent Transactions */}
        <Animated.View
          entering={FadeInDown.delay(350).springify()}
          className="px-6 mt-8"
        >
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-white text-base font-display font-semibold">
              Recent Transactions
            </Text>
            <Pressable>
              <Text className="text-gold-500 text-sm font-medium">See all</Text>
            </Pressable>
          </View>

          <View className="gap-1">
            {transactions.slice(0, 5).map((txn) => (
              <Pressable
                key={txn.id}
                onPress={() => router.push(`/(protected)/transaction/${txn.id}`)}
                className="flex-row items-center py-3 border-b border-white/5 active:opacity-70"
              >
                <View className="w-10 h-10 rounded-xl bg-navy-800 items-center justify-center mr-3">
                  <Text className="text-base">
                    {txn.category === 'food' ? '🍽️' :
                     txn.category === 'shopping' ? '🛍️' :
                     txn.category === 'travel' ? '✈️' :
                     txn.category === 'income' ? '💰' :
                     txn.category === 'transfer' ? '↕️' :
                     txn.category === 'entertainment' ? '🎭' : '💳'}
                  </Text>
                </View>
                <View className="flex-1">
                  <Text className="text-white text-sm font-semibold">
                    {txn.title}
                  </Text>
                  <Text className="text-white/40 text-xs mt-0.5">
                    {formatDate(txn.date, 'relative')}
                  </Text>
                </View>
                <View className="items-end">
                  <Text
                    className={`text-sm font-bold ${
                      txn.amount > 0 ? 'text-green-400' : 'text-white'
                    }`}
                  >
                    {txn.amount > 0 ? '+' : ''}
                    {formatCurrency(txn.amount)}
                  </Text>
                  {txn.status === 'pending' && (
                    <Text className="text-yellow-400 text-[10px] mt-0.5">
                      Pending
                    </Text>
                  )}
                </View>
              </Pressable>
            ))}
          </View>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}
