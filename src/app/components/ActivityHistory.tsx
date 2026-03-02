import { useState } from "react";
import { Bell, DollarSign, Users, Clock } from "lucide-react";

interface Activity {
  id: number;
  type: "Reminder" | "Payment" | "Client";
  action: "Yangilandi" | "Yaratildi";
  user: string;
  details: string;
  date: string;
}

const activitiesData: Activity[] = [
  { id: 1, type: "Reminder", action: "Yangilandi", user: "Amonov Jahongir", details: '{"is_completed":true}', date: "02/03/2026, 11:02" },
  { id: 2, type: "Reminder", action: "Yangilandi", user: "Amonov Jahongir", details: '{"is_completed":true}', date: "02/03/2026, 11:01" },
  { id: 3, type: "Reminder", action: "Yangilandi", user: "Amonov Jahongir", details: '{"is_completed":true}', date: "02/03/2026, 11:01" },
  { id: 4, type: "Payment", action: "Yaratildi", user: "Bakhriddin Khaitov", details: '{"amount":200000,"client_id":"d6a6da85-4840-4341-83c0-abb0cb246dfc"}', date: "21/02/2026, 17:21" },
  { id: 5, type: "Client", action: "Yaratildi", user: "Bakhriddin Khaitov", details: '{"name":"Bakhriddin","source":"Instagram"}', date: "21/02/2026, 17:20" },
  { id: 6, type: "Client", action: "Yaratildi", user: "Amonov Jahongir", details: '{"name":"Farxod","source":"Instagram"}', date: "11/02/2026, 14:30" },
  { id: 7, type: "Payment", action: "Yaratildi", user: "Amonov Jahongir", details: '{"amount":500000,"client_id":"abc123"}', date: "08/02/2026, 10:15" },
  { id: 8, type: "Client", action: "Yangilandi", user: "Kasimova Ruxsora", details: '{"status":"Sotildi"}', date: "05/02/2026, 16:45" },
];

const typeIcons: Record<string, React.ReactNode> = {
  Reminder: <Bell size={18} className="text-yellow-500" />,
  Payment: <DollarSign size={18} className="text-green-500" />,
  Client: <Users size={18} className="text-blue-500" />,
};

const actionColors: Record<string, string> = {
  Yangilandi: "bg-yellow-50 text-yellow-600",
  Yaratildi: "bg-green-50 text-green-600",
};

export function ActivityHistory() {
  const [filter, setFilter] = useState("Barchasi");

  const filtered = activitiesData.filter(
    (a) => filter === "Barchasi" || a.type === filter
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="flex items-center gap-2">
          <Clock size={24} className="text-gray-400" />
          Faoliyat tarixi
        </h1>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
        >
          <option>Barchasi</option>
          <option>Reminder</option>
          <option>Payment</option>
          <option>Client</option>
        </select>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="divide-y divide-gray-50">
          {filtered.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4 px-6 py-5 hover:bg-gray-50/50 transition-colors">
              <div className="mt-0.5">{typeIcons[activity.type]}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-2 py-0.5 rounded-full text-xs ${actionColors[activity.action]}`}>
                    {activity.action}
                  </span>
                  <span className="text-sm">{activity.type}</span>
                </div>
                <p className="text-sm text-gray-500">
                  Foydalanuvchi: {activity.user}
                </p>
                <p className="text-xs text-gray-400 mt-0.5 font-mono truncate">
                  {activity.details}
                </p>
              </div>
              <span className="text-sm text-gray-400 whitespace-nowrap">
                {activity.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
