import { BankCard } from '@/types/card';
import { Colors } from '@/theme/colors';

export const mockCards: BankCard[] = [
  {
    id: 'card_01',
    cardNumber: '4532 •••• •••• 9871',
    cardholderName: 'SOPHIA HARRINGTON',
    expiryMonth: '09',
    expiryYear: '28',
    cvv: '•••',
    type: 'visa',
    tier: 'elite',
    status: 'active',
    balance: 48250.75,
    creditLimit: 75000,
    color: [Colors.navy[800], Colors.navy[700]],
    accountId: 'acc_01',
  },
  {
    id: 'card_02',
    cardNumber: '5412 •••• •••• 3344',
    cardholderName: 'SOPHIA HARRINGTON',
    expiryMonth: '03',
    expiryYear: '27',
    cvv: '•••',
    type: 'mastercard',
    tier: 'premium',
    status: 'active',
    balance: 12400.00,
    creditLimit: 20000,
    color: ['#1A1A2E', '#16213E'],
    accountId: 'acc_02',
  },
];
