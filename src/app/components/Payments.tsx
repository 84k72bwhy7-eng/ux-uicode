import { useState } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";

const paymentsData = [
  { id: 1, client: "Aziz Karimov", phone: "+998997654321", amount: "200 000 so'm", status: "To'langan", date: "08/02/2026" },
  { id: 2, client: "Malika Tosheva", phone: "+998911112233", amount: "500 000 so'm", status: "To'langan", date: "05/02/2026" },
  { id: 3, client: "Nodira Saidova", phone: "+998901234567", amount: "500 000 so'm", status: "To'langan", date: "15/02/2026" },
  { id: 4, client: "Bakhriddin Khaitov", phone: "+998883003020", amount: "$200", status: "To'langan", date: "21/02/2026" },
  { id: 5, client: "Farxod", phone: "664445522", amount: "300 000 so'm", status: "Kutilmoqda", date: "25/02/2026" },
];

const statusStyles: Record<string, string> = {
  "To'langan": "bg-green-50 text-green-600",
  "Kutilmoqda": "bg-yellow-50 text-yellow-600",
  "Bekor qilingan": "bg-red-50 text-red-500",
};

export function Payments() {
  const [filter, setFilter] = useState("Barcha holatlar");

  const filtered = paymentsData.filter(
    (p) => filter === "Barcha holatlar" || p.status === filter
  );

  return (
    <div>
      <h1 className="mb-6">To'lovlar</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500">
              <CheckCircle size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-400">To'lagan mijozlar</p>
              <p className="text-2xl text-green-600">$1,200,200</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
              <AlertCircle size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-400">Qarzdorlar</p>
              <p className="text-2xl text-red-500">$0</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="flex justify-end mb-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
        >
          <option>Barcha holatlar</option>
          <option>To'langan</option>
          <option>Kutilmoqda</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-xs text-gray-400 uppercase border-b border-gray-100">
              <th className="text-left px-6 py-4">Mijoz</th>
              <th className="text-left px-6 py-4">Telefon</th>
              <th className="text-left px-6 py-4">Summa</th>
              <th className="text-left px-6 py-4">Holat</th>
              <th className="text-left px-6 py-4">Sana</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id} className="border-t border-gray-50 hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4">{p.client}</td>
                <td className="px-6 py-4 text-gray-500">{p.phone}</td>
                <td className="px-6 py-4">{p.amount}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs ${statusStyles[p.status] || "bg-gray-100"}`}>
                    {p.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-500">{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
