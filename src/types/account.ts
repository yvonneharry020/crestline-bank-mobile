export interface Account {
  id: string;
  accountNumber: string;
  accountName: string;
  type: 'checking' | 'savings' | 'investment';
  balance: number;
  availableBalance: number;
  currency: string;
  iban: string;
}

export interface AccountSummary {
  totalBalance: number;
  totalSavings: number;
  totalInvestments: number;
  monthlyChange: number;
  monthlyChangePercent: number;
}
