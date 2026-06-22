import { Tabs } from 'expo-router';
import { View, Text } from 'react-native';
import { Colors } from '@/theme/colors';

type TabIconProps = {
  focused: boolean;
  label: string;
  icon: string;
};

function TabIcon({ focused, label, icon }: TabIconProps) {
  return (
    <View className="items-center pt-1">
      <Text style={{ fontSize: 20, opacity: focused ? 1 : 0.4 }}>{icon}</Text>
      <Text
        className={`text-[10px] mt-0.5 font-medium ${
          focused ? 'text-gold-500' : 'text-white/40'
        }`}
      >
        {label}
      </Text>
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.navy[900],
          borderTopColor: 'rgba(255,255,255,0.06)',
          borderTopWidth: 1,
          height: 80,
          paddingBottom: 20,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} label="Home" icon="⌂" />
          ),
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} label="Cards" icon="▣" />
          ),
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} label="Pay" icon="↕" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} label="Profile" icon="◉" />
          ),
        }}
      />
    </Tabs>
  );
}
