// server/routes.ts - API routes for Bank-app-demo
import express from "express";
import { accounts, transactions, getAccounts, getTransactions } from "./storage";

const router = express.Router();

// GET /api/accounts - list all accounts
router.get("/api/accounts", (req, res) => {
  res.json(getAccounts());
});

// GET /api/transactions - list all transactions
router.get("/api/transactions", (req, res) => {
  res.json(getTransactions());
});

// POST /api/transfer - transfer funds between accounts
router.post("/api/transfer", (req, res) => {
  const { fromId, toId, amount, description } = req.body;
  const from = accounts.find(a => a.id === fromId);
  const to = accounts.find(a => a.id === toId);

  if (!from || !to) {
    return res.status(404).json({ error: "Account not found" });
  }
  if (from.balance < amount) {
    return res.status(400).json({ error: "Insufficient funds" });
  }

  from.balance -= amount;
  to.balance += amount;

  const tx = {
    id: String(transactions.length + 1),
    accountId: toId,
    amount: amount,
    type: "credit" as const,
    description: description || `Transfer from ${from.name}`,
    date: new Date().toISOString().split("T")[0],
    category: "Transfer",
  };
  transactions.push(tx);

  res.json({ success: true, message: "Transfer successful", transaction: tx });
});

export default router;
