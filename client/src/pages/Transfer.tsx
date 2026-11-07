// client/src/pages/Transfer.tsx
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { Account } from "../../../shared/schema";

export default function Transfer() {
  const { data: accounts } = useQuery<Account[]>({ queryKey: ["/api/accounts"] });
  const [fromId, setFromId] = useState("2");
  const [toId, setToId] = useState("1");
  const [amount, setAmount] = useState("");
  const [done, setDone] = useState(false);

  async function handleTransfer() {
    const res = await fetch("/api/transfer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fromId, toId, amount: Number(amount), description: "Transfer via Bank-app-demo" }),
    });
    if (res.ok) setDone(true);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Transfer Funds</h1>
      <p className="text-zinc-400 text-sm">Transfer funds between accounts with confirmation</p>

      <div className="mt-4 space-y-3 max-w-md">
        <label className="block">From
          <select value={fromId} onChange={(e) => setFromId(e.target.value)} className="w-full p-2 bg-zinc-800 rounded">
            {accounts?.map((a) => <option key={a.id} value={a.id}>{a.name} - R {a.balance}</option>)}
          </select>
        </label>

        <label className="block">To
          <select value={toId} onChange={(e) => setToId(e.target.value)} className="w-full p-2 bg-zinc-800 rounded">
            {accounts?.map((a) => <option key={a.id} value={a.id}>{a.name} - R {a.balance}</option>)}
          </select>
        </label>

        <label className="block">Amount (R)
          <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="500" className="w-full p-2 bg-zinc-800 rounded" />
        </label>

        <button onClick={handleTransfer} className="w-full p-3 bg-green-600 rounded font-bold">Transfer Now</button>
        {done && <p className="text-green-400">✅ Transfer successful!</p>}
      </div>
    </div>
  );
}
