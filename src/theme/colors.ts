export const Colors = {
  navy: {
    950: '#060D26',
    900: '#0B1437',
    800: '#111F4D',
    700: '#162660',
    600: '#1C2E75',
  },
  gold: {
    300: '#E8D5A3',
    400: '#D4B96A',
    500: '#C9A84C',
    600: '#A8832B',
    700: '#7A5F1E',
  },
  white: '#FFFFFF',
  text: {
    primary: '#FFFFFF',
    secondary: '#8B9DC3',
    muted: '#4A5A7A',
  },
  surface: {
    card: '#111F4D',
    elevated: '#162660',
    overlay: 'rgba(11, 20, 55, 0.85)',
  },
  status: {
    success: '#22C55E',
    danger: '#EF4444',
    warning: '#F59E0B',
    info: '#3B82F6',
  },
  border: {
    default: 'rgba(139, 157, 195, 0.15)',
    subtle: 'rgba(139, 157, 195, 0.08)',
  },
} as const;

export type ColorToken = typeof Colors;
