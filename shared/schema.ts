// shared/schema.ts - Data models for Bank-app-demo
export interface Account {
  id: string;
  name: string;
  type: 'savings' | 'checking' | 'investment';
  balance: number;
  accountNumber: string;
}

export interface Transaction {
  id: string;
  accountId: string;
  amount: number;
  type: 'credit' | 'debit';
  description: string;
  date: string;
  category: string;
}
