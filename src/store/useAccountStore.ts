import { create } from 'zustand';
import { Account } from '@/types/account';
import { mockAccounts } from '@/data';

interface AccountState {
  accounts: Account[];
  selectedAccountId: string;
  isBalanceVisible: boolean;
  setSelectedAccount: (id: string) => void;
  toggleBalanceVisibility: () => void;
  getSelectedAccount: () => Account | undefined;
  getTotalBalance: () => number;
}

export const useAccountStore = create<AccountState>((set, get) => ({
  accounts: mockAccounts,
  selectedAccountId: mockAccounts[0].id,
  isBalanceVisible: true,

  setSelectedAccount: (id) => set({ selectedAccountId: id }),

  toggleBalanceVisibility: () =>
    set((state) => ({ isBalanceVisible: !state.isBalanceVisible })),

  getSelectedAccount: () => {
    const { accounts, selectedAccountId } = get();
    return accounts.find((a) => a.id === selectedAccountId);
  },

  getTotalBalance: () => {
    const { accounts } = get();
    return accounts.reduce((sum, a) => sum + a.balance, 0);
  },
}));
