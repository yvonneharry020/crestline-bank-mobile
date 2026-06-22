import { create } from 'zustand';
import { BankCard } from '@/types/card';
import { mockCards } from '@/data';

interface CardState {
  cards: BankCard[];
  activeCardIndex: number;
  isCardDetailsVisible: boolean;
  setActiveCard: (index: number) => void;
  toggleCardDetails: () => void;
  freezeCard: (id: string) => void;
  unfreezeCard: (id: string) => void;
  getActiveCard: () => BankCard | undefined;
}

export const useCardStore = create<CardState>((set, get) => ({
  cards: mockCards,
  activeCardIndex: 0,
  isCardDetailsVisible: false,

  setActiveCard: (index) => set({ activeCardIndex: index }),

  toggleCardDetails: () =>
    set((state) => ({ isCardDetailsVisible: !state.isCardDetailsVisible })),

  freezeCard: (id) =>
    set((state) => ({
      cards: state.cards.map((c) =>
        c.id === id ? { ...c, status: 'frozen' } : c
      ),
    })),

  unfreezeCard: (id) =>
    set((state) => ({
      cards: state.cards.map((c) =>
        c.id === id ? { ...c, status: 'active' } : c
      ),
    })),

  getActiveCard: () => {
    const { cards, activeCardIndex } = get();
    return cards[activeCardIndex];
  },
}));
