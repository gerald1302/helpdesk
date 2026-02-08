import { useLocation } from "react-router-dom";
import { Shield, ChartColumnIcon } from "lucide-react";

export default function AuthLayout({ children }) {
  const { pathname } = useLocation();
  const isRegister = pathname.includes("register");

  const left = {
    title: isRegister ? "Empower Your Support Team" : "The world's best support",
    description: isRegister
      ? "The ultimate ticket management system for global enterprise operations. Track, prioritize, and resolve customer issues with precision."
      : "Welcome back! Sign in to access your enterprise dashboard and manage support tickets with efficiency and ease.",
    features: [
      {
        icon: <ChartColumnIcon/>,
        title: "Real-time Analytics",
        desc: "Monitor resolution times and team performance live.",
      },
      {
        icon: <Shield/>,
        title: "Enterprise Security",
        desc: "Role-based access and SOC2 compliant data handling.",
      },
    ],
  };

  return (
    <div className="min-h-screen flex bg-background-light dark:bg-background-dark">
      {/* Left panel - fixed/sticky on large screens */}
      <aside className="hidden lg:flex lg:w-1/2 lg:h-screen lg:sticky lg:top-0 flex-col justify-center p-16
        bg-gradient-to-br from-[#137fec] to-[#0c5eb3] text-white">
        <div className="max-w-md z-10">
          <div className="mb-8">
            <h1 className="text-6xl font-black leading-tight tracking-tight mb-4">
              {left.title}
            </h1>
            <p className="text-lg text-white/80">{left.description}</p>
          </div>

          <div className="space-y-6">
            {isRegister && left.features.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <div className="bg-white/20 p-2 rounded-lg">
                  <span className="material-symbols-outlined">{f.icon}</span>
                </div>
                <div>
                  <p className="font-bold">{f.title}</p>
                  <p className="text-sm text-white/70">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="absolute bottom-0 right-0 w-full h-1/2 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at bottom right, rgba(255,255,255,0.2) 0%, transparent 70%)" }}
        />
      </aside>

      {/* Right panel - scrollable */}
      <div className="flex-1 flex flex-col lg:w-1/2 overflow-auto">
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-background-dark px-6 md:px-10 py-3">
          <div className="flex items-center gap-3">
            <div className="text-primary">
              <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-tight">SupportPro Enterprise</h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:block text-sm text-slate-500 dark:text-slate-400">
              {isRegister ? "Already have an account?" : "Need help? Contact support"}
            </span>

            {isRegister ? (
              <a
                href="/login"
                className="hidden md:inline-flex min-w-[84px] items-center justify-center rounded-lg h-10 px-4 border border-slate-300 text-sm font-semibold hover:bg-slate-50 transition-colors"
              >
                Sign In
              </a>
            ) : (
              <button className="hidden md:inline-flex min-w-[84px] items-center justify-center rounded-lg h-10 px-4 border border-slate-300 text-sm font-semibold hover:bg-slate-50 transition-colors">
                Contact
              </button>
            )}
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center p-6 md:p-12 bg-white dark:bg-background-dark">
          <div className="w-full max-w-md">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
