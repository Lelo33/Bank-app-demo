// client/src/pages/Accounts.tsx
import { useQuery } from "@tanstack/react-query";
import type { Account } from "../../../shared/schema";

export default function Accounts() {
  const { data: accounts } = useQuery<Account[]>({ queryKey: ["/api/accounts"] });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Account Management</h1>
      <p className="text-zinc-400 text-sm">View and manage multiple account types</p>
      <div className="grid gap-4 mt-4">
        {accounts?.map((a) => (
          <div key={a.id} className="p-4 bg-zinc-800 rounded-xl flex justify-between">
            <div>
              <p className="font-bold">{a.name} — {a.type}</p>
              <p className="text-zinc-400 text-sm">{a.accountNumber}</p>
            </div>
            <p className="text-xl font-bold">R {a.balance.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
