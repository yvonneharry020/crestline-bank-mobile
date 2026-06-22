import { create } from 'zustand';
import { Transaction, TransactionCategory } from '@/types/transaction';
import { mockTransactions } from '@/data';

interface TransactionState {
  transactions: Transaction[];
  activeFilter: TransactionCategory | 'all';
  setFilter: (filter: TransactionCategory | 'all') => void;
  getFilteredTransactions: () => Transaction[];
  getTransactionById: (id: string) => Transaction | undefined;
}

export const useTransactionStore = create<TransactionState>((set, get) => ({
  transactions: mockTransactions,
  activeFilter: 'all',

  setFilter: (filter) => set({ activeFilter: filter }),

  getFilteredTransactions: () => {
    const { transactions, activeFilter } = get();
    if (activeFilter === 'all') return transactions;
    return transactions.filter((t) => t.category === activeFilter);
  },

  getTransactionById: (id) => {
    return get().transactions.find((t) => t.id === id);
  },
}));
