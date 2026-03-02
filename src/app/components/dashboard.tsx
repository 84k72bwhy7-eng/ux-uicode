import {
  Users,
  UserPlus,
  TrendingUp,
  DollarSign,
  Sparkles,
  PhoneCall,
  CheckCircle,
  Clock,
  StickyNote,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const monthlyData = [
  { month: "Sen", value: 2 },
  { month: "Okt", value: 5 },
  { month: "Noy", value: 3 },
  { month: "Dek", value: 8 },
  { month: "Yan", value: 4 },
  { month: "Fev", value: 12 },
  { month: "Mar", value: 15 },
];

const revenueData = [
  { month: "Sen", value: 0 },
  { month: "Okt", value: 200000 },
  { month: "Noy", value: 150000 },
  { month: "Dek", value: 500000 },
  { month: "Yan", value: 350000 },
  { month: "Fev", value: 1000000 },
  { month: "Mar", value: 1400000 },
];

const managers = [
  { name: "Amonov Jahongir", deals: 2, revenue: "$1,000,200", clients: 10 },
  { name: "Kasimova Ruxsora", deals: 0, revenue: "$200,000", clients: 3 },
  { name: "Bakhriddin Khaitov", deals: 0, revenue: "$0", clients: 0 },
];

const tariffs = [
  { name: "InstaBoost", price: "$200 / tarif", count: 0, revenue: "$0", color: "bg-yellow-400" },
  { name: "Level UP", price: "$300 / tarif", count: 0, revenue: "$0", color: "bg-blue-400" },
  { name: "Creative Pro", price: "$1,500,000 / tarif", count: 0, revenue: "$0", color: "bg-green-400" },
];

const recentClients = [
  { name: "Bakhriddin", sub: "Khaitov", status: "Yangi" },
  { name: "Farxod", sub: "664445522", status: "Yangi" },
];

const recentNotes = [
  { user: "Bakhriddin", note: "https://www.instagram.com/shahnoza_nl_buxara/", date: "21/02/2026" },
];

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1>Bosh sahifa</h1>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={<UserPlus className="w-5 h-5 text-blue-500" />}
          label="Bugungi lidlar"
          value="0"
          bg="bg-blue-50"
        />
        <StatCard
          icon={<Users className="w-5 h-5 text-green-500" />}
          label="Jami mijozlar"
          value="13"
          bg="bg-green-50"
        />
        <StatCard
          icon={<TrendingUp className="w-5 h-5 text-yellow-600" />}
          label="Sotuvlar"
          value="2"
          bg="bg-yellow-50"
        />
        <StatCard
          icon={<DollarSign className="w-5 h-5 text-emerald-500" />}
          label="Jami to'langan"
          value="3 627 314 so'm"
          bg="bg-emerald-50"
        />
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-5">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <div>
              <div className="text-xs text-gray-500">Yangilar</div>
              <div className="text-2xl text-blue-500">9</div>
            </div>
          </div>
        </Card>
        <Card className="p-5">
          <div className="flex items-center gap-3">
            <PhoneCall className="w-5 h-5 text-yellow-500" />
            <div>
              <div className="text-xs text-gray-500">Bog'lanildi</div>
              <div className="text-2xl text-yellow-500">2</div>
            </div>
          </div>
        </Card>
        <Card className="p-5">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <div>
              <div className="text-xs text-gray-500">Sotildi</div>
              <div className="text-2xl text-green-500">2</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Manager Stats Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-gray-400" />
            Menejerlar statistikasi
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs uppercase text-gray-400">Ism</TableHead>
                <TableHead className="text-xs uppercase text-gray-400">Bitimlar</TableHead>
                <TableHead className="text-xs uppercase text-gray-400">Tushum</TableHead>
                <TableHead className="text-xs uppercase text-gray-400">Jami mijozlar</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {managers.map((m) => (
                <TableRow key={m.name}>
                  <TableCell>{m.name}</TableCell>
                  <TableCell>{m.deals}</TableCell>
                  <TableCell className="text-green-600">{m.revenue}</TableCell>
                  <TableCell>{m.clients}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Revenue Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-5">
          <div className="text-xs text-gray-500 mb-1">Tushum (USD)</div>
          <div className="text-2xl">$1,200,200</div>
          <div className="text-xs text-red-500 mt-1">↘ -100.0% Oylar bo'yicha</div>
        </Card>
        <Card className="p-5">
          <div className="text-xs text-gray-500 mb-1">Bitimlar</div>
          <div className="text-2xl">2</div>
          <div className="text-xs text-red-500 mt-1">↘ -100.0% Oylar bo'yicha</div>
        </Card>
        <Card className="p-5">
          <div className="text-xs text-gray-500 mb-1">Yangilar</div>
          <div className="text-2xl">13</div>
        </Card>
        <Card className="p-5">
          <div className="text-xs text-gray-500 mb-1">Kamayish</div>
          <div className="text-2xl text-red-500">$-1,200,200</div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="text-sm text-gray-700">Oylik statistika</div>
          </div>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-4 h-4 text-gray-400" />
            <div className="text-sm text-gray-700">Tushum</div>
          </div>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Tariffs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-gray-400" />
            Tariflar bo'yicha
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {tariffs.map((t) => (
              <div key={t.name} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${t.color}`} />
                  <div>
                    <div className="text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.price}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm">{t.count}</div>
                  <div className="text-xs text-gray-400">{t.revenue}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Clients & Notes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-gray-400" />
              Oxirgi mijozlar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentClients.map((c) => (
                <div key={c.name} className="flex items-center justify-between">
                  <div>
                    <div className="text-sm">{c.name}</div>
                    <div className="text-xs text-gray-400">{c.sub}</div>
                  </div>
                  <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
                    {c.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <StickyNote className="w-5 h-5 text-gray-400" />
              Oxirgi eslatmalar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentNotes.map((n, i) => (
                <div key={i} className="flex items-start justify-between">
                  <div>
                    <div className="text-sm">{n.user}</div>
                    <div className="text-xs text-gray-400 truncate max-w-[250px]">{n.note}</div>
                  </div>
                  <div className="text-xs text-gray-400 shrink-0">{n.date}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  bg,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  bg: string;
}) {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center shrink-0`}>
          {icon}
        </div>
        <div>
          <div className="text-xs text-gray-500">{label}</div>
          <div className="text-xl">{value}</div>
        </div>
      </div>
    </Card>
  );
}
