import { useState } from "react";
import { Save, Building, Globe, Bell, Shield, Palette } from "lucide-react";

export function SettingsPage() {
  const [companyName, setCompanyName] = useState("Khaitov School");
  const [crmName, setCrmName] = useState("SchoolCRM");
  const [lang, setLang] = useState("UZ");
  const [currency, setCurrency] = useState("USD");
  const [notifications, setNotifications] = useState(true);
  const [emailNotif, setEmailNotif] = useState(false);
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <h1 className="mb-6">Sozlamalar</h1>

      <div className="max-w-2xl space-y-6">
        {/* Company Settings */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h3 className="flex items-center gap-2 mb-4">
            <Building size={18} className="text-gray-400" />
            Kompaniya
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Kompaniya nomi</label>
              <input
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">CRM nomi</label>
              <input
                value={crmName}
                onChange={(e) => setCrmName(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
              />
            </div>
          </div>
        </div>

        {/* Localization */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h3 className="flex items-center gap-2 mb-4">
            <Globe size={18} className="text-gray-400" />
            Til va valyuta
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Til</label>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50 bg-white"
              >
                <option value="UZ">O'zbek</option>
                <option value="RU">Русский</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Valyuta</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50 bg-white"
              >
                <option value="USD">USD ($)</option>
                <option value="UZS">UZS (so'm)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h3 className="flex items-center gap-2 mb-4">
            <Bell size={18} className="text-gray-400" />
            Bildirishnomalar
          </h3>
          <div className="space-y-3">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm">Telegram bildirishnomalar</span>
              <div
                onClick={() => setNotifications(!notifications)}
                className={`w-11 h-6 rounded-full transition-colors cursor-pointer flex items-center ${notifications ? "bg-yellow-400" : "bg-gray-300"}`}
              >
                <div className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform mx-0.5 ${notifications ? "translate-x-5" : ""}`} />
              </div>
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm">Email bildirishnomalar</span>
              <div
                onClick={() => setEmailNotif(!emailNotif)}
                className={`w-11 h-6 rounded-full transition-colors cursor-pointer flex items-center ${emailNotif ? "bg-yellow-400" : "bg-gray-300"}`}
              >
                <div className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform mx-0.5 ${emailNotif ? "translate-x-5" : ""}`} />
              </div>
            </label>
          </div>
        </div>

        {/* Theme */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h3 className="flex items-center gap-2 mb-4">
            <Palette size={18} className="text-gray-400" />
            Mavzu
          </h3>
          <div className="flex gap-3">
            <button
              onClick={() => setTheme("light")}
              className={`px-6 py-3 rounded-xl border-2 transition-all text-sm ${
                theme === "light" ? "border-yellow-400 bg-yellow-50" : "border-gray-200 hover:bg-gray-50"
              }`}
            >
              ☀️ Yorug'
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`px-6 py-3 rounded-xl border-2 transition-all text-sm ${
                theme === "dark" ? "border-yellow-400 bg-yellow-50" : "border-gray-200 hover:bg-gray-50"
              }`}
            >
              🌙 Qorong'u
            </button>
          </div>
        </div>

        {/* Save Button */}
        <button className="flex items-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-[#1a1a2e] rounded-xl transition-all">
          <Save size={18} />
          Saqlash
        </button>
      </div>
    </div>
  );
}
