import { ScrollView, View, Text, Pressable, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, {
  FadeInDown,
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';
import { useCardStore } from '@/store/useCardStore';
import { formatCurrency } from '@/lib/utils/currency';
import { Colors } from '@/theme/colors';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH - 48;

const CARD_ACTIONS = [
  { label: 'Freeze Card', icon: '❄️' },
  { label: 'Card Limit', icon: '⚙️' },
  { label: 'Virtual Card', icon: '▣' },
  { label: 'Statements', icon: '📄' },
];

export default function CardsScreen() {
  const { cards, activeCardIndex, setActiveCard, toggleCardDetails, isCardDetailsVisible } =
    useCardStore();
  const activeCard = cards[activeCardIndex];

  return (
    <SafeAreaView className="flex-1 bg-navy-900">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>

        {/* Header */}
        <Animated.View
          entering={FadeInDown.delay(50).springify()}
          className="px-6 pt-4 pb-2"
        >
          <Text className="text-white text-2xl font-display font-bold">My Cards</Text>
          <Text className="text-white/40 text-sm mt-1">
            {cards.length} card{cards.length > 1 ? 's' : ''} linked
          </Text>
        </Animated.View>

        {/* Card Display */}
        <Animated.View entering={FadeInDown.delay(150).springify()} className="mt-4 pl-6">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH + 16}
            decelerationRate="fast"
            onMomentumScrollEnd={(e) => {
              const index = Math.round(e.nativeEvent.contentOffset.x / (CARD_WIDTH + 16));
              setActiveCard(index);
            }}
            contentContainerStyle={{ paddingRight: 24 }}
          >
            {cards.map((card, index) => (
              <View
                key={card.id}
                className="rounded-3xl p-6 mr-4 justify-between"
                style={{
                  width: CARD_WIDTH,
                  height: 200,
                  backgroundColor: card.color[0],
                  borderWidth: 1,
                  borderColor: 'rgba(255,255,255,0.1)',
                }}
              >
                {/* Card Top Row */}
                <View className="flex-row justify-between items-start">
                  <View>
                    <Text className="text-white/50 text-[10px] uppercase tracking-widest">
                      Crestline Bank
                    </Text>
                    <Text className="text-gold-400 text-xs font-semibold mt-0.5 uppercase tracking-wide">
                      {card.tier}
                    </Text>
                  </View>
                  <View className="items-end">
                    <Text className="text-white text-xl font-bold">{card.type === 'visa' ? 'VISA' : 'MC'}</Text>
                  </View>
                </View>

                {/* Card Number */}
                <Text className="text-white text-lg font-mono tracking-widest mt-4">
                  {card.cardNumber}
                </Text>

                {/* Card Bottom */}
                <View className="flex-row justify-between items-end">
                  <View>
                    <Text className="text-white/40 text-[9px] uppercase tracking-wider">Card Holder</Text>
                    <Text className="text-white text-xs font-semibold mt-0.5">{card.cardholderName}</Text>
                  </View>
                  <View>
                    <Text className="text-white/40 text-[9px] uppercase tracking-wider">Expires</Text>
                    <Text className="text-white text-xs font-semibold mt-0.5">
                      {card.expiryMonth}/{card.expiryYear}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>

          {/* Dot indicator */}
          <View className="flex-row gap-1.5 mt-4">
            {cards.map((_, i) => (
              <View
                key={i}
                className="h-1.5 rounded-full"
                style={{
                  width: i === activeCardIndex ? 20 : 6,
                  backgroundColor: i === activeCardIndex ? Colors.gold[500] : 'rgba(255,255,255,0.2)',
                }}
              />
            ))}
          </View>
        </Animated.View>

        {/* Card Balance */}
        <Animated.View
          entering={FadeInDown.delay(250).springify()}
          className="mx-6 mt-5 bg-navy-800 rounded-2xl p-5"
        >
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-white/40 text-xs uppercase tracking-wider mb-1">Available Balance</Text>
              <Text className="text-white text-3xl font-display font-bold">
                {formatCurrency(activeCard?.balance ?? 0)}
              </Text>
            </View>
            <View className="items-end">
              <Text className="text-white/40 text-xs uppercase tracking-wider mb-1">Credit Limit</Text>
              <Text className="text-white/70 text-lg font-semibold">
                {formatCurrency(activeCard?.creditLimit ?? 0, 'GBP', true)}
              </Text>
            </View>
          </View>
          <View className="mt-4 bg-navy-900 rounded-full h-1.5">
            <View
              className="h-1.5 rounded-full bg-gold-500"
              style={{
                width: `${((activeCard?.balance ?? 0) / (activeCard?.creditLimit ?? 1)) * 100}%`,
              }}
            />
          </View>
        </Animated.View>

        {/* Card Actions */}
        <Animated.View
          entering={FadeInDown.delay(350).springify()}
          className="mx-6 mt-5"
        >
          <View className="flex-row flex-wrap gap-3">
            {CARD_ACTIONS.map((action) => (
              <Pressable
                key={action.label}
                className="flex-1 min-w-[40%] bg-navy-800 border border-white/8 rounded-2xl p-4 items-center gap-2 active:opacity-70"
              >
                <Text className="text-2xl">{action.icon}</Text>
                <Text className="text-white/70 text-xs font-medium text-center">
                  {action.label}
                </Text>
              </Pressable>
            ))}
          </View>
        </Animated.View>

      </ScrollView>
    </SafeAreaView>
  );
}
