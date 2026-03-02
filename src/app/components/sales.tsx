import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import { Plus, TrendingUp, DollarSign, ShoppingCart } from "lucide-react";

const salesData = [
  {
    id: 1,
    client: "Bakhriddin Khaitov",
    tariff: "InstaBoost",
    amount: "$200",
    status: "Yakunlangan",
    date: "21/02/2026",
    manager: "Amonov Jahongir",
  },
  {
    id: 2,
    client: "Farxod",
    tariff: "Creative Pro",
    amount: "$1,000,000",
    status: "Yakunlangan",
    date: "15/02/2026",
    manager: "Amonov Jahongir",
  },
  {
    id: 3,
    client: "Aziza",
    tariff: "Level UP",
    amount: "$300",
    status: "Kutilmoqda",
    date: "10/02/2026",
    manager: "Kasimova Ruxsora",
  },
];

const statusColors: Record<string, string> = {
  Yakunlangan: "bg-green-100 text-green-700",
  Kutilmoqda: "bg-yellow-100 text-yellow-700",
  "Bekor qilingan": "bg-red-100 text-red-700",
};

export function SalesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1>Sotilganlar</h1>
        <Button className="gap-1.5 bg-yellow-400 hover:bg-yellow-500 text-black" size="sm">
          <Plus className="w-4 h-4" />
          Yangi sotuv
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-xs text-gray-500">Jami tushum</div>
              <div className="text-xl">$1,200,200</div>
            </div>
          </div>
        </Card>
        <Card className="p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <div className="text-xs text-gray-500">Jami bitimlar</div>
              <div className="text-xl">2</div>
            </div>
          </div>
        </Card>
        <Card className="p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <div className="text-xs text-gray-500">O'rtacha bitim</div>
              <div className="text-xl">$600,100</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Sales Table */}
      <Card>
        <CardHeader>
          <CardTitle>Sotuvlar ro'yxati</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs uppercase text-gray-400">Mijoz</TableHead>
                <TableHead className="text-xs uppercase text-gray-400">Tarif</TableHead>
                <TableHead className="text-xs uppercase text-gray-400">Summa</TableHead>
                <TableHead className="text-xs uppercase text-gray-400">Holat</TableHead>
                <TableHead className="text-xs uppercase text-gray-400">Sana</TableHead>
                <TableHead className="text-xs uppercase text-gray-400">Menejer</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {salesData.map((sale) => (
                <TableRow key={sale.id}>
                  <TableCell className="text-sm">{sale.client}</TableCell>
                  <TableCell className="text-sm">{sale.tariff}</TableCell>
                  <TableCell className="text-sm text-green-600">{sale.amount}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={`${statusColors[sale.status] || ""} border-0 text-xs`}
                    >
                      {sale.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-gray-500">{sale.date}</TableCell>
                  <TableCell className="text-sm">{sale.manager}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
