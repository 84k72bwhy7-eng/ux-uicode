import { useState } from "react";
import { useNavigate } from "react-router";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Eye, EyeOff } from "lucide-react";

export function LoginPage() {
  const [email, setEmail] = useState("admin@crm.local");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h1 className="mb-1">
            <span className="text-yellow-500">School</span>CRM
          </h1>
          <p className="text-gray-500 mb-8">Xush kelibsiz</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-600 mb-1.5">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@crm.local"
                className="h-11"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1.5">Parol</label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="h-11 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-11 bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg"
            >
              Tizimga kirish
            </Button>
          </form>
        </div>
      </div>

      {/* Right Side - Branding */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-[#1a1a2e] to-[#0d0d1a] items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 rounded-2xl bg-yellow-400/20 flex items-center justify-center mx-auto mb-6">
            <span className="text-yellow-400 text-2xl">SC</span>
          </div>
          <h2 className="text-white text-2xl mb-2">SchoolCRM</h2>
          <p className="text-white/50">Professional CRM for Education</p>
        </div>
      </div>
    </div>
  );
}
