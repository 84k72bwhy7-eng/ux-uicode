import { useState } from "react";
import { Plus, Pencil, Trash2, ExternalLink, X } from "lucide-react";

interface User {
  id: number;
  name: string;
  initials: string;
  email: string;
  phone: string;
  role: string;
  telegram: string;
  telegramLink?: string;
}

const usersData: User[] = [
  {
    id: 1,
    name: "Kasimova Ruxsora",
    initials: "K",
    email: "ruxsora@crm.school",
    phone: "+998883083020",
    role: "Menejer",
    telegram: "Ulanmagan",
  },
  {
    id: 2,
    name: "Bakhriddin Khaitov",
    initials: "B",
    email: "khaitov@crm.school",
    phone: "+998883003020",
    role: "Administrator",
    telegram: "@jiyan_cha",
    telegramLink: "https://t.me/jiyan_cha",
  },
  {
    id: 3,
    name: "Amonov Jahongir",
    initials: "A",
    email: "admin@crm.local",
    phone: "+998931535966",
    role: "Administrator",
    telegram: "@jony599",
    telegramLink: "https://t.me/jony599",
  },
];

const roleColors: Record<string, string> = {
  Administrator: "bg-yellow-50 text-yellow-600",
  Menejer: "bg-blue-50 text-blue-600",
};

const initialsColors = ["bg-red-100 text-red-600", "bg-blue-100 text-blue-600", "bg-green-100 text-green-600"];

export function UsersPage() {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1>Foydalanuvchilar</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-[#1a1a2e] rounded-xl transition-all text-sm"
        >
          <Plus size={16} />
          Foydalanuvchi qo'shish
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-xs text-gray-400 uppercase border-b border-gray-100">
              <th className="text-left px-6 py-4">Ism</th>
              <th className="text-left px-6 py-4">Email</th>
              <th className="text-left px-6 py-4">Telefon</th>
              <th className="text-left px-6 py-4">Rol</th>
              <th className="text-left px-6 py-4">Telegram</th>
              <th className="text-left px-6 py-4">Amallar</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user, idx) => (
              <tr key={user.id} className="border-t border-gray-50 hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${initialsColors[idx % initialsColors.length]}`}>
                      {user.initials}
                    </div>
                    <span>{user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-500">{user.email}</td>
                <td className="px-6 py-4 text-gray-500">{user.phone}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs ${roleColors[user.role] || "bg-gray-100"}`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {user.telegramLink ? (
                    <a
                      href={user.telegramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-blue-500 hover:text-blue-600"
                    >
                      {user.telegram}
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="text-gray-400">{user.telegram}</span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600">
                      <Pencil size={16} />
                    </button>
                    <button className="p-1.5 hover:bg-red-50 rounded-lg text-gray-400 hover:text-red-500">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add User Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg">
            <div className="flex items-center justify-between mb-5">
              <h2>Yangi foydalanuvchi</h2>
              <button onClick={() => setShowAddModal(false)} className="p-1 hover:bg-gray-100 rounded-lg">
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Ism</label>
                <input className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50" placeholder="Ismni kiriting" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50" placeholder="email@crm.school" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Telefon</label>
                <input className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50" placeholder="+998..." />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Rol</label>
                <select className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50 bg-white">
                  <option>Administrator</option>
                  <option>Menejer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Telegram</label>
                <input className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50" placeholder="@username" />
              </div>
              <button className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-[#1a1a2e] rounded-xl transition-all mt-2">
                Saqlash
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
