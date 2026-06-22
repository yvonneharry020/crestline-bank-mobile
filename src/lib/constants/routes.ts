export const Routes = {
  auth: {
    root: '/(auth)',
    signIn: '/(auth)/sign-in',
    signUp: '/(auth)/sign-up',
    forgotPassword: '/(auth)/forgot-password',
  },
  tabs: {
    home: '/(protected)/(tabs)/',
    cards: '/(protected)/(tabs)/cards',
    payments: '/(protected)/(tabs)/payments',
    profile: '/(protected)/(tabs)/profile',
  },
  transaction: (id: string) => `/(protected)/transaction/${id}`,
  transfer: '/(protected)/transfer',
  notifications: '/(protected)/notifications',
} as const;
