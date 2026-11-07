// client/src/pages/Dashboard.tsx
import { useQuery } from "@tanstack/react-query";
import type { Account, Transaction } from "../../../shared/schema";

export default function Dashboard() {
  const { data: accounts } = useQuery<Account[]>({
    queryKey: ["/api/accounts"],
  });
  const { data: transactions } = useQuery<Transaction[]>({
    queryKey: ["/api/transactions"],
  });

  const total = accounts?.reduce((sum, a) => sum + a.balance, 0) || 0;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      <div className="mt-4 p-4 bg-zinc-900 rounded-xl">
        <p className="text-sm text-zinc-400">Total Balance</p>
        <p className="text-3xl font-bold">R {total.toLocaleString()}.00</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {accounts?.map((a) => (
          <div key={a.id} className="p-4 bg-zinc-800 rounded-xl">
            <p>{a.name}</p>
            <p className="font-bold">R {a.balance.toLocaleString()}</p>
            <p className="text-xs text-zinc-400">{a.accountNumber}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-6 font-bold">Recent Transactions</h2>
      <div className="mt-2 space-y-2">
        {transactions?.slice(0, 5).map((t) => (
          <div key={t.id} className="flex justify-between p-3 bg-zinc-800 rounded-lg">
            <span>{t.description}</span>
            <span className={t.type === "credit" ? "text-green-400" : "text-red-400"}>
              {t.type === "credit" ? "+" : "-"} R {Math.abs(t.amount)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
