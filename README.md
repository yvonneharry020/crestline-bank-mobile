# Crestline Bank — Mobile Banking App

A premium private banking mobile application built with React Native and Expo. This project showcases production-grade frontend architecture, a refined UI/UX design system, and fluid animations — crafted to the standard of a senior frontend engineer.

---

## What This App Demonstrates

- **Design System** — Custom colour tokens, typography scale, spacing primitives, and shadow utilities built from scratch
- **Component Architecture** — Atomic UI components with typed props, feature-scoped components, and clean separation of concerns
- **State Management** — Zustand stores with immutable update patterns, selector hooks, and zero prop-drilling
- **Navigation** — Expo Router v3 with typed routes, nested navigators, and modal presentation
- **Animations** — Reanimated 3 with spring physics, enter animations, gesture-driven interactions, and animated counters
- **TypeScript** — Strict mode throughout, fully typed models, discriminated unions, and module path aliases
- **Code Quality** — ESLint, Prettier, consistent naming conventions, and clean file organisation

---

## Screens

| Area | Screens |
|------|---------|
| Auth | Welcome · Sign In · Sign Up · Forgot Password |
| Home | Dashboard · Balance Overview · Quick Actions · Recent Transactions |
| Cards | Card Carousel · Card Details · Freeze / Limit Controls |
| Payments | Send Money · Payee Management · Amount Input |
| Profile | Account Settings · Security · Support |
| Detail | Transaction Detail · Notifications |

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Expo SDK 52 | Cross-platform runtime |
| Expo Router v3 | File-based navigation |
| TypeScript (strict) | Type safety throughout |
| NativeWind 4 | Tailwind CSS for React Native |
| Reanimated 3 | High-performance animations |
| Moti | Declarative animation API |
| Zustand | Lightweight state management |
| React Native Gesture Handler | Gesture-driven interactions |
| React Native SVG | Icon and graphic rendering |

---

## Project Structure

```
crestline-bank-mobile/
├── app/                        # Expo Router file-based routes
│   ├── (auth)/                 # Unauthenticated screens
│   └── (protected)/            # Authenticated screens & tabs
├── src/
│   ├── components/
│   │   ├── ui/                 # Design system primitives
│   │   ├── features/           # Feature-scoped components
│   │   └── shared/             # Reusable cross-feature components
│   ├── hooks/                  # Custom React hooks
│   ├── lib/
│   │   ├── utils/              # Pure utility functions
│   │   └── constants/          # App-wide constants
│   ├── store/                  # Zustand state slices
│   ├── theme/                  # Design tokens (colours, type, spacing)
│   ├── types/                  # TypeScript interfaces & enums
│   └── data/                   # Structured mock data
└── assets/                     # Fonts, images, icons
```

---

## Getting Started

```bash
git clone https://github.com/yvonneharry020/crestline-bank-mobile.git
cd crestline-bank-mobile
npm install
npx expo start
```

Scan the QR code with the Expo Go app or run on a simulator.

---

## Design Language

- **Primary colour** — Deep Navy `#0B1437`
- **Accent** — Antique Gold `#C9A84C`
- **Typography** — Inter (body) · Syne (display)
- **Radius** — 12–32px rounded corners, consistent across all surfaces
- **Motion** — Spring physics with natural deceleration, no linear easing
