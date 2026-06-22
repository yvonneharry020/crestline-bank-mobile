export type TransactionType = 'debit' | 'credit' | 'transfer';
export type TransactionStatus = 'completed' | 'pending' | 'failed';
export type TransactionCategory =
  | 'food'
  | 'transport'
  | 'shopping'
  | 'utilities'
  | 'entertainment'
  | 'health'
  | 'travel'
  | 'income'
  | 'transfer'
  | 'other';

export interface Transaction {
  id: string;
  title: string;
  description: string;
  amount: number;
  type: TransactionType;
  status: TransactionStatus;
  category: TransactionCategory;
  date: string;
  merchant?: string;
  merchantLogo?: string;
  accountId: string;
  cardId?: string;
  reference: string;
}
