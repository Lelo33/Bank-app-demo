// server/storage.ts - Data storage for Bank-app-demo
import type { Account, Transaction } from "../shared/schema";

export const accounts: Account[] = [
  { id: "1", name: "Savings", type: "savings", balance: 52300, accountNumber: "**** 4521" },
  { id: "2", name: "Checking", type: "checking", balance: 18950, accountNumber: "**** 7890" },
  { id: "3", name: "Investment", type: "investment", balance: 13000, accountNumber: "**** 1123" },
];

export const transactions: Transaction[] = [
  { id: "1", accountId: "2", amount: -250, type: "debit", description: "Woolworths", date: "2026-11-07", category: "Food" },
  { id: "2", accountId: "2", amount: 15000, type: "credit", description: "Salary - LeloNova Digitals", date: "2026-11-06", category: "Income" },
  { id: "3", accountId: "1", amount: -1200, type: "debit", description: "Rent - Sebokeng", date: "2026-11-05", category: "Bills" },
  { id: "4", accountId: "2", amount: -450, type: "debit", description: "Taxi", date: "2026-11-04", category: "Transport" },
  { id: "5", accountId: "3", amount: 2000, type: "credit", description: "Gumroad Sale", date: "2026-11-03", category: "Income" },
];

export function getAccounts() { return accounts; }
export function getTransactions() { return transactions; }
