export type CardType = 'visa' | 'mastercard' | 'amex';
export type CardTier = 'standard' | 'premium' | 'elite';
export type CardStatus = 'active' | 'frozen' | 'expired';

export interface BankCard {
  id: string;
  cardNumber: string;
  cardholderName: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
  type: CardType;
  tier: CardTier;
  status: CardStatus;
  balance: number;
  creditLimit: number;
  color: string[];
  accountId: string;
}
