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
    <div className="flex h-screen bg-gray-50">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#1a1a2e] text-white flex flex-col transform transition-transform duration-200 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
          <div className="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center text-black text-xs">
            SC
          </div>
          <span className="text-lg">
            <span className="text-yellow-400">School</span>CRM
          </span>
          <button
            className="ml-auto lg:hidden text-white/70"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors text-sm ${
                  isActive
                    ? "bg-yellow-400 text-black"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* User Info */}
        <div className="px-4 py-4 border-t border-white/10">
          <div className="text-xs text-white/50 mb-1">Administrator</div>
          <div className="text-sm">Amonov Jahongir</div>
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 text-white/50 hover:text-white text-sm mt-3 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Chiqish
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="h-14 bg-white border-b flex items-center justify-between px-4 lg:px-6 shrink-0">
          <button
            className="lg:hidden text-gray-600"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="lg:hidden" />
          <div className="hidden lg:block" />
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-gray-400" />
            <button
              onClick={() => setLang("UZ")}
              className={`px-2.5 py-1 rounded-full text-xs transition-colors ${
                lang === "UZ"
                  ? "bg-yellow-400 text-black"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              UZ
            </button>
            <button
              onClick={() => setLang("RU")}
              className={`px-2.5 py-1 rounded-full text-xs transition-colors ${
                lang === "RU"
                  ? "bg-yellow-400 text-black"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              RU
            </button>
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
