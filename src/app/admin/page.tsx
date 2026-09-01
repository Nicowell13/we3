import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/Table";

export default function AdminOverviewPage() {
  const dummyTrx = [
    { invoice: "INV-20260901-001", user: "user1@gmail.com", item: "86 Diamonds MLBB", amount: "Rp 21.000", status: "SUCCESS" },
    { invoice: "INV-20260901-002", user: "user2@gmail.com", item: "300 Genesis Crystals", amount: "Rp 65.000", status: "PROCESSING" },
    { invoice: "INV-20260901-003", user: "user3@gmail.com", item: "1000 VP Valorant", amount: "Rp 120.000", status: "PENDING" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-5">
          <p className="text-xs text-slate-400 font-medium uppercase">Total Omset Hari Ini</p>
          <h3 className="text-2xl font-bold text-slate-100 mt-1">Rp 4.250.000</h3>
        </Card>
        <Card className="p-5">
          <p className="text-xs text-slate-400 font-medium uppercase">Transaksi Sukses</p>
          <h3 className="text-2xl font-bold text-emerald-400 mt-1">142 Transaksi</h3>
        </Card>
        <Card className="p-5">
          <p className="text-xs text-slate-400 font-medium uppercase">Active Supplier</p>
          <h3 className="text-2xl font-bold text-indigo-400 mt-1">Digiflazz</h3>
        </Card>
      </div>

      <div className="space-y-3">
        <h2 className="text-base font-bold text-slate-100">Live Transaction Feeds</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Item</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyTrx.map((t) => (
              <TableRow key={t.invoice}>
                <TableCell className="font-mono text-xs text-indigo-300">{t.invoice}</TableCell>
                <TableCell>{t.user}</TableCell>
                <TableCell>{t.item}</TableCell>
                <TableCell className="font-medium">{t.amount}</TableCell>
                <TableCell>
                  <Badge variant={t.status === "SUCCESS" ? "success" : t.status === "PROCESSING" ? "warning" : "default"}>
                    {t.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
