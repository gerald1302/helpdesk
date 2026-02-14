import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Grid, Ticket, Users, BarChart2, Settings } from "lucide-react";

const NavItem = ({ to, icon: Icon, label }) => {
  const activeClass = "bg-indigo-50 text-indigo-600";
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </Link>
  );
};

export default function Sidebar() {
  return (
    // make sidebar full height and sticky
    <aside className="w-64 h-screen sticky top-0 border-r border-slate-200 bg-white flex flex-col">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
          <Grid className="w-4 h-4" />
        </div>
        <h1 className="font-bold text-lg">SupportAdmin</h1>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <div className="mt-2">
          <NavItem to="/dashboard" icon={Grid} label="Dashboard" />
          <NavItem to="/tickets" icon={Ticket} label="Tickets" />
          <NavItem to="/users" icon={Users} label="Agents" />
          <NavItem to="/reports" icon={BarChart2} label="Reports" />
        </div>

        <div className="mt-8 pt-8 border-t border-slate-100 px-3">
          <NavItem to="/settings" icon={Settings} label="Settings" />
        </div>
      </nav>

      <div className="p-4 border-t border-slate-100">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full bg-slate-100 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://i.pravatar.cc/100')`,
            }}
          />
          <div className="flex-1">
            <div className="text-sm font-bold truncate">Alex Richards</div>
            <div className="text-xs text-slate-500 uppercase tracking-wider">
              Admin
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
