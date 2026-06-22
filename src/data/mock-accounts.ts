import { Account } from '@/types/account';

export const mockAccounts: Account[] = [
  {
    id: 'acc_01',
    accountNumber: '4820 1937 4401',
    accountName: 'Main Current Account',
    type: 'checking',
    balance: 48250.75,
    availableBalance: 47800.00,
    currency: 'GBP',
    iban: 'GB29NWBK60161331926819',
  },
  {
    id: 'acc_02',
    accountNumber: '4820 1937 4402',
    accountName: 'Premium Savings',
    type: 'savings',
    balance: 124500.00,
    availableBalance: 124500.00,
    currency: 'GBP',
    iban: 'GB29NWBK60161331926820',
  },
  {
    id: 'acc_03',
    accountNumber: '4820 1937 4403',
    accountName: 'Investment Portfolio',
    type: 'investment',
    balance: 312840.50,
    availableBalance: 312840.50,
    currency: 'GBP',
    iban: 'GB29NWBK60161331926821',
  },
];
