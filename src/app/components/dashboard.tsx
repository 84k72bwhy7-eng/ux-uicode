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
  ArrowDownRight,
} from "lucide-react";
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
  { name: "InstaBoost", price: "$200 / tarif", count: 0, revenue: "$0", color: "bg-primary" },
  { name: "Level UP", price: "$300 / tarif", count: 0, revenue: "$0", color: "bg-chart-2" },
  { name: "Creative Pro", price: "$1,500,000 / tarif", count: 0, revenue: "$0", color: "bg-chart-3" },
];

const recentClients = [
  { name: "Bakhriddin", sub: "Khaitov", status: "Yangi" },
  { name: "Farxod", sub: "664445522", status: "Yangi" },
];

const recentNotes = [
  { user: "Bakhriddin", note: "https://www.instagram.com/shahnoza_nl_buxara/", date: "21/02/2026" },
];

const customTooltipStyle = {
  backgroundColor: '#1A1A22',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '8px',
  color: '#E8E8ED',
  fontSize: '12px',
};

export function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1>Bosh sahifa</h1>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={<UserPlus className="w-5 h-5" />}
          label="Bugungi lidlar"
          value="0"
          iconColor="text-chart-2"
          iconBg="bg-chart-2/10"
        />
        <StatCard
          icon={<Users className="w-5 h-5" />}
          label="Jami mijozlar"
          value="13"
          iconColor="text-chart-3"
          iconBg="bg-chart-3/10"
        />
        <StatCard
          icon={<TrendingUp className="w-5 h-5" />}
          label="Sotuvlar"
          value="2"
          iconColor="text-primary"
          iconBg="bg-primary/10"
        />
        <StatCard
          icon={<DollarSign className="w-5 h-5" />}
          label="Jami to'langan"
          value="3 627 314 so'm"
          iconColor="text-chart-3"
          iconBg="bg-chart-3/10"
        />
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-xl p-5 hover:border-chart-2/30 transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-chart-2/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-chart-2" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Yangilar</div>
              <div className="text-2xl font-semibold text-chart-2">9</div>
            </div>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <PhoneCall className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">{"Bog'lanildi"}</div>
              <div className="text-2xl font-semibold text-primary">2</div>
            </div>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 hover:border-chart-3/30 transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-chart-3/10 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-chart-3" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Sotildi</div>
              <div className="text-2xl font-semibold text-chart-3">2</div>
            </div>
          </div>
        </div>
      </div>

      {/* Manager Stats Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-border flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-muted-foreground" />
          <h3 className="text-sm font-medium text-foreground">Menejerlar statistikasi</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-6 py-3 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Ism</th>
                <th className="text-left px-6 py-3 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Bitimlar</th>
                <th className="text-left px-6 py-3 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Tushum</th>
                <th className="text-left px-6 py-3 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Jami mijozlar</th>
              </tr>
            </thead>
            <tbody>
              {managers.map((m) => (
                <tr key={m.name} className="border-b border-border/50 last:border-0 hover:bg-surface-elevated/50 transition-colors">
                  <td className="px-6 py-3.5 text-sm text-foreground">{m.name}</td>
                  <td className="px-6 py-3.5 text-sm text-foreground">{m.deals}</td>
                  <td className="px-6 py-3.5 text-sm text-chart-3 font-medium">{m.revenue}</td>
                  <td className="px-6 py-3.5 text-sm text-foreground">{m.clients}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Revenue Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Tushum (USD)</div>
          <div className="text-2xl font-semibold text-foreground">$1,200,200</div>
          <div className="flex items-center gap-1 text-xs text-destructive mt-2">
            <ArrowDownRight className="w-3 h-3" />
            -100.0% Oylar bo{"'"}yicha
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Bitimlar</div>
          <div className="text-2xl font-semibold text-foreground">2</div>
          <div className="flex items-center gap-1 text-xs text-destructive mt-2">
            <ArrowDownRight className="w-3 h-3" />
            -100.0% Oylar bo{"'"}yicha
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Yangilar</div>
          <div className="text-2xl font-semibold text-foreground">13</div>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Kamayish</div>
          <div className="text-2xl font-semibold text-destructive">$-1,200,200</div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="text-sm font-medium text-foreground mb-4">Oylik statistika</div>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#8B8B9E' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#8B8B9E' }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={customTooltipStyle} />
                <Bar dataKey="value" fill="#F5C518" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
            <div className="text-sm font-medium text-foreground">Tushum</div>
          </div>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#8B8B9E' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#8B8B9E' }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={customTooltipStyle} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Tariffs */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-border flex items-center gap-2">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <h3 className="text-sm font-medium text-foreground">Tariflar bo{"'"}yicha</h3>
        </div>
        <div className="p-6 flex flex-col gap-3">
          {tariffs.map((t) => (
            <div key={t.name} className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-surface-elevated/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className={`w-2.5 h-2.5 rounded-full ${t.color}`} />
                <div>
                  <div className="text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.price}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-foreground">{t.count}</div>
                <div className="text-xs text-muted-foreground">{t.revenue}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Clients & Notes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-border flex items-center gap-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <h3 className="text-sm font-medium text-foreground">Oxirgi mijozlar</h3>
          </div>
          <div className="p-6 flex flex-col gap-4">
            {recentClients.map((c) => (
              <div key={c.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-semibold">
                    {c.name[0]}
                  </div>
                  <div>
                    <div className="text-sm text-foreground">{c.name}</div>
                    <div className="text-xs text-muted-foreground">{c.sub}</div>
                  </div>
                </div>
                <span className="text-[11px] bg-chart-2/10 text-chart-2 px-2.5 py-1 rounded-full font-medium">
                  {c.status}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-border flex items-center gap-2">
            <StickyNote className="w-4 h-4 text-muted-foreground" />
            <h3 className="text-sm font-medium text-foreground">Oxirgi eslatmalar</h3>
          </div>
          <div className="p-6 flex flex-col gap-4">
            {recentNotes.map((n, i) => (
              <div key={i} className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-semibold shrink-0">
                    {n.user[0]}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-foreground">{n.user}</div>
                    <div className="text-xs text-muted-foreground truncate max-w-[220px]">{n.note}</div>
                  </div>
                </div>
                <div className="text-[11px] text-muted-foreground shrink-0">{n.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  iconColor,
  iconBg,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  iconColor: string;
  iconBg: string;
}) {
  return (
    <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 transition-all duration-300 group">
      <div className="flex items-center gap-4">
        <div className={`w-11 h-11 rounded-lg ${iconBg} flex items-center justify-center shrink-0 ${iconColor} group-hover:scale-105 transition-transform duration-300`}>
          {icon}
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
          <div className="text-xl font-semibold text-foreground">{value}</div>
        </div>
      </div>
    </div>
  );
}
