import { useState } from "react";
import { useNavigate } from "react-router";
import { Eye, EyeOff, Globe, ArrowRight } from "lucide-react";

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
    <div className="flex min-h-screen bg-background">
      {/* Left - Form */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-24">
        {/* Language Switcher */}
        <div className="absolute top-6 left-6 flex items-center gap-1 bg-surface-elevated rounded-lg p-1">
          <Globe size={14} className="text-muted-foreground ml-1.5" />
          <button
            onClick={() => setLang("UZ")}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-200 ${
              lang === "UZ"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            UZ
          </button>
          <button
            onClick={() => setLang("RU")}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-200 ${
              lang === "RU"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            RU
          </button>
        </div>

        <div className="max-w-sm w-full mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <img
              src="/images/logo.jpg"
              alt="Khaitov School"
              className="w-11 h-11 rounded-xl object-cover"
            />
            <div>
              <h1 className="text-xl font-semibold tracking-tight">
                <span className="text-primary">Khaitov</span>{" "}
                <span className="text-foreground">School</span>
              </h1>
              <p className="text-xs text-muted-foreground">CRM Platform</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-1">Xush kelibsiz</h2>
            <p className="text-sm text-muted-foreground">Tizimga kirish uchun ma'lumotlaringizni kiriting</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-xl text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200"
                placeholder="email@example.com"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Parol</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-xl text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200 pr-12"
                  placeholder="Parolingizni kiriting"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground transition-colors rounded-md"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-primary hover:bg-gold-500 text-primary-foreground rounded-xl transition-all duration-200 font-semibold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,197,24,0.2)] hover:shadow-[0_0_30px_rgba(245,197,24,0.3)]"
            >
              Tizimga kirish
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>

      {/* Right - Branding */}
      <div className="hidden lg:flex flex-1 bg-card items-center justify-center border-l border-border relative overflow-hidden">
        {/* Subtle gradient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,197,24,0.06)_0%,transparent_70%)]" />
        <div className="text-center relative z-10">
          <img
            src="/images/logo.jpg"
            alt="Khaitov School"
            className="w-24 h-24 rounded-2xl object-cover mx-auto mb-6 shadow-[0_0_40px_rgba(245,197,24,0.15)]"
          />
          <h2 className="text-foreground text-2xl font-semibold mb-2">Khaitov School</h2>
          <p className="text-muted-foreground text-sm">Professional CRM for Education</p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-8 h-1 rounded-full bg-primary" />
            <div className="w-2 h-1 rounded-full bg-muted-foreground/30" />
            <div className="w-2 h-1 rounded-full bg-muted-foreground/30" />
          </div>
        </div>
      </div>
    </div>
  );
}
