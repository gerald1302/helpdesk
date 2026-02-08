import { Link } from "react-router-dom";

const AuthHeader = ({ isRegister = false, showLoginLink = false }) => {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-100 bg-white px-6 md:px-10 py-3">
      <div className="flex items-center gap-3">
        <div className="text-primary flex items-center justify-center">
          <svg className="w-7 h-7 text-[#137fec]" viewBox="0 0 48 48" fill="none" aria-hidden>
            <path d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-tight">Enterprise Support</h2>
      </div>

      <div className="flex items-center gap-4">
        <a className="text-sm font-medium text-gray-600 hover:text-[#137fec] transition-colors" href="#">
          Documentation
        </a>

        {showLoginLink ? (
          <Link to="/login" className="flex min-w-[84px] items-center justify-center rounded-lg h-10 px-4 bg-[#137fec] text-white text-sm font-bold hover:opacity-90">
            Login
          </Link>
        ) : isRegister ? (
          <Link to="/login" className="hidden md:inline-flex min-w-[84px] items-center justify-center rounded-lg h-10 px-4 border border-slate-300 text-sm font-semibold hover:bg-slate-50 transition-colors">
            Sign In
          </Link>
        ) : (
          <button className="hidden md:inline-flex min-w-[84px] items-center justify-center rounded-lg h-10 px-4 border border-slate-300 text-sm font-semibold hover:bg-slate-50 transition-colors">
            Contact
          </button>
        )}
      </div>
    </header>
  );
}

export default AuthHeader;