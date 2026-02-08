import React from "react";

const items = [
  { label: "Billing & Payments", pct: 42, color: "bg-primary" },
  { label: "Technical Support", pct: 28, color: "bg-indigo-400" },
  { label: "Sales Inquiries", pct: 15, color: "bg-amber-400" },
  { label: "Access Issues", pct: 10, color: "bg-emerald-400" },
  { label: "Feature Requests", pct: 5, color: "bg-slate-400" },
];

const ByCategory = () => {
  return (
    <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bold text-lg">By Category</h3>
          <p className="text-sm text-slate-500">Distribution of cases</p>
        </div>
        <span className="text-slate-400">info</span>
      </div>

      <div className="space-y-5 flex-1">
        {items.map((it) => (
          <div key={it.label} className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold">
              <span>{it.label}</span>
              <span>{it.pct}%</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`${it.color} h-full rounded-full`}
                style={{ width: `${it.pct}%` }}
              />
            </div>
          </div>
        ))}

        <button className="w-full py-2.5 text-sm font-bold text-primary bg-primary/5 hover:bg-primary/10 rounded-lg transition-colors mt-auto">
          View Full Distribution
        </button>
      </div>
    </div>
  );
}

export default ByCategory;
