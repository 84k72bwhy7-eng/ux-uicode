import { NavLink, useNavigate } from "react-router";
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
} from "lucide-react";
import { useState } from "react";

const menuItems = [
  { path: "/", icon: LayoutDashboard, label: "Bosh sahifa" },
  { path: "/clients", icon: Users, label: "Mijozlar" },
  { path: "/sales", icon: ShoppingCart, label: "Sotilganlar" },
  { path: "/payments", icon: CreditCard, label: "To'lovlar" },
  { path: "/users", icon: UserCog, label: "Foydalanuvchilar" },
  { path: "/activity", icon: History, label: "Faoliyat tarixi" },
  { path: "/settings", icon: Settings, label: "Sozlamalar" },
];

export function Sidebar() {
  const [lang, setLang] = useState<"UZ" | "RU">("UZ");
  const navigate = useNavigate();

  return (
    <aside className="w-[220px] min-h-screen bg-[#1a1a2e] flex flex-col justify-between">
      {/* Logo */}
      <div>
        <div className="flex items-center gap-2 px-5 py-5">
          <div className="w-8 h-8 bg-yellow-400 rounded-md flex items-center justify-center text-[#1a1a2e] text-xs">
            K
          </div>
          <span className="text-white">
            <span className="text-yellow-400">School</span>CRM
          </span>
        </div>

        {/* Menu */}
        <nav className="mt-2 flex flex-col gap-1 px-3">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all text-sm ${
                  isActive
                    ? "bg-yellow-400 text-[#1a1a2e]"
                    : "text-gray-300 hover:bg-white/10"
                }`
              }
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom section */}
      <div className="px-3 pb-5">
        <div className="border-t border-white/10 pt-4 mb-3 px-2">
          <p className="text-gray-500 text-xs">Administrator</p>
          <p className="text-white text-sm mt-0.5">Amonov Jahongir</p>
        </div>
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-3 px-4 py-2.5 text-gray-300 hover:bg-white/10 rounded-lg transition-all w-full text-sm"
        >
          <LogOut size={18} />
          <span>Chiqish</span>
        </button>
      </div>
    </aside>
  );
}

export function TopBar() {
  const [lang, setLang] = useState<"UZ" | "RU">("UZ");
  return (
    <div className="flex items-center justify-end gap-2 px-6 py-3">
      <Globe size={18} className="text-gray-400" />
      <button
        onClick={() => setLang("UZ")}
        className={`px-3 py-1 rounded-full text-sm transition-all ${
          lang === "UZ"
            ? "bg-yellow-400 text-[#1a1a2e]"
            : "text-gray-500 hover:bg-gray-100"
        }`}
      >
        UZ
      </button>
      <button
        onClick={() => setLang("RU")}
        className={`px-3 py-1 rounded-full text-sm transition-all ${
          lang === "RU"
            ? "bg-yellow-400 text-[#1a1a2e]"
            : "text-gray-500 hover:bg-gray-100"
        }`}
      >
        RU
      </button>
    </div>
  );
}
