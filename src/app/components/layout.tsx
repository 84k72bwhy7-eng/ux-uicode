import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  CreditCard,
  UserCog,
  History,
  Settings,
  LogOut,
  Globe,
  Menu,
  X,
  Search,
  Bell,
} from "lucide-react";

const navItems = [
  { to: "/", icon: LayoutDashboard, label: "Bosh sahifa" },
  { to: "/clients", icon: Users, label: "Mijozlar" },
  { to: "/sales", icon: ShoppingCart, label: "Sotilganlar" },
  { to: "/payments", icon: CreditCard, label: "To'lovlar" },
  { to: "/users", icon: UserCog, label: "Foydalanuvchilar" },
  { to: "/activity", icon: History, label: "Faoliyat tarixi" },
  { to: "/settings", icon: Settings, label: "Sozlamalar" },
];

export function Layout() {
  const [lang, setLang] = useState<"UZ" | "RU">("UZ");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-background">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-[260px] bg-sidebar flex flex-col border-r border-sidebar-border transform transition-transform duration-300 ease-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 h-16 border-b border-sidebar-border">
          <img
            src="/images/logo.jpg"
            alt="Khaitov School"
            className="w-9 h-9 rounded-lg object-cover"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground tracking-tight">Khaitov School</span>
            <span className="text-[11px] text-muted-foreground">CRM Platform</span>
          </div>
          <button
            className="ml-auto lg:hidden text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 flex flex-col gap-1 overflow-y-auto">
          <div className="px-3 mb-2">
            <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground/60">Menu</span>
          </div>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `group flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sm ${
                  isActive
                    ? "bg-primary text-primary-foreground font-medium shadow-[0_0_20px_rgba(245,197,24,0.15)]"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface-elevated"
                }`
              }
            >
              <item.icon className="w-[18px] h-[18px]" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* User Info */}
        <div className="px-4 py-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-semibold">
              AJ
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-foreground truncate">Amonov Jahongir</div>
              <div className="text-[11px] text-muted-foreground">Administrator</div>
            </div>
          </div>
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 text-muted-foreground hover:text-destructive text-sm transition-colors duration-200 w-full px-1"
          >
            <LogOut className="w-4 h-4" />
            Chiqish
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="h-16 bg-card/80 backdrop-blur-md border-b border-border flex items-center justify-between px-4 lg:px-6 shrink-0 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="hidden sm:flex items-center gap-2 bg-surface-elevated rounded-lg px-3 py-2 w-64">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Qidirish..."
                className="bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground/50 w-full"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-all duration-200">
              <Bell className="w-[18px] h-[18px]" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
            </button>
            <div className="h-5 w-px bg-border" />
            <div className="flex items-center gap-1 bg-surface-elevated rounded-lg p-1">
              <Globe className="w-3.5 h-3.5 text-muted-foreground ml-1.5" />
              <button
                onClick={() => setLang("UZ")}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-200 ${
                  lang === "UZ"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                UZ
              </button>
              <button
                onClick={() => setLang("RU")}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-200 ${
                  lang === "RU"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                RU
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
