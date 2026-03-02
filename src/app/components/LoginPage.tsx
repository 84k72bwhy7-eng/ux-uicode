import { useState } from "react";
import { useNavigate } from "react-router";
import { Eye, EyeOff, Globe } from "lucide-react";

export function LoginPage() {
  const [email, setEmail] = useState("admin@crm.local");
  const [password, setPassword] = useState("12345678");
  const [showPassword, setShowPassword] = useState(false);
  const [lang, setLang] = useState<"UZ" | "RU">("UZ");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="flex min-h-screen">
      {/* Left - Form */}
      <div className="flex-1 flex flex-col justify-center px-12 lg:px-24 bg-white">
        {/* Language Switcher */}
        <div className="absolute top-6 left-6 flex items-center gap-2">
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

        <div className="max-w-md w-full">
          <h1 className="mb-1">
            <span className="text-yellow-500">School</span>CRM
          </h1>
          <p className="text-gray-500 mb-8">Xush kelibsiz</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-600 mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all bg-white"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1.5">Parol</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all bg-white pr-12"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-yellow-400 hover:bg-yellow-500 text-[#1a1a2e] rounded-xl transition-all"
            >
              Tizimga kirish
            </button>
          </form>
        </div>
      </div>

      {/* Right - Branding */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-[#1a1a2e] to-[#0d0d1a] items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center text-[#1a1a2e] text-2xl mx-auto mb-6">
            K
          </div>
          <h2 className="text-white mb-2">SchoolCRM</h2>
          <p className="text-gray-400">Professional CRM for Education</p>
        </div>
      </div>
    </div>
  );
}
