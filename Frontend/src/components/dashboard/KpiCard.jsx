import React from "react";

const KpiCard = ({ title, value, delta, icon }) => {
  return (
    <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <span className="text-sm text-slate-500">{title}</span>
        <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
          {icon}
        </div>
      </div>

      <div className="flex items-end gap-3">
        <p className="text-3xl font-bold">{value}</p>
        {delta && (
          <span
            className={`text-sm font-bold ${delta.startsWith("-") ? "text-rose-500" : "text-emerald-500"}`}
          >
            {delta}
          </span>
        )}
      </div>

      <p className="text-xs text-slate-400">vs. last 30 days</p>
    </div>
  );
}

export default KpiCard;