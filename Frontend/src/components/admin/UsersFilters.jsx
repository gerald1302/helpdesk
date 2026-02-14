import React from "react";
import { Search, Download, Sliders } from "lucide-react";

export default function UsersFilters({
  q,
  role,
  status,
  onChange = () => {},
  onClear = () => {},
}) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 mb-6 shadow-sm">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              value={q}
              onChange={(e) => onChange({ q: e.target.value })}
              className="block w-full pl-10 pr-3 py-2 bg-slate-100 rounded-lg text-sm placeholder-slate-500 focus:ring-2 focus:ring-primary/50"
              placeholder="Search by name, email, or ID..."
              type="text"
            />
          </div>

          <button
            onClick={() => onClear()}
            className="hidden md:inline-flex items-center gap-2 rounded-lg bg-white border px-3 text-sm text-slate-700 hover:bg-slate-50"
            title="Clear filters"
          >
            Clear
          </button>
        </div>

        <div className="flex gap-3 flex-wrap">
          <select
            value={role}
            onChange={(e) => onChange({ role: e.target.value })}
            className="h-10 rounded-lg bg-slate-100 px-4 text-sm"
          >
            <option>All</option>
            <option>Admin</option>
            <option>Agent</option>
            <option>Technician</option>
            <option>Employee</option>
          </select>

          <select
            value={status}
            onChange={(e) => onChange({ status: e.target.value })}
            className="h-10 rounded-lg bg-slate-100 px-4 text-sm"
          >
            <option>All</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <button className="flex h-10 items-center gap-2 rounded-lg bg-slate-100 px-3 text-sm text-slate-600 hover:text-primary transition-colors">
            <Sliders className="w-4 h-4" />
            Filters
          </button>

          <button className="flex h-10 items-center gap-2 rounded-lg bg-white border px-3 text-sm text-slate-700 hover:bg-slate-50">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>
      </div>
    </div>
  );
}
