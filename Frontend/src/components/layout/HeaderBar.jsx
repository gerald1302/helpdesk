import React from "react";
import { Search, Bell, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeaderBar() {
  return (
    <header className="h-16 border-b border-slate-200 bg-white sticky top-0 z-10 flex items-center justify-between px-6">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            className="w-full pl-10 pr-4 py-2 text-sm bg-slate-100 border-none rounded-lg focus:ring-2 focus:ring-indigo-200 placeholder:text-slate-500"
            placeholder="Search tickets, agents or reports..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-100">
          <Bell className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-100">
          <HelpCircle className="w-5 h-5" />
        </button>

        <div className="hidden md:flex items-center gap-4">
          <div className="text-sm text-slate-600">Mar 24, 2024</div>
          <Link to="/profile" className="inline-flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full bg-slate-100"
              style={{
                backgroundImage: `url('https://i.pravatar.cc/80')`,
                backgroundSize: "cover",
              }}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
