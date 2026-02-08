import React from "react";

const ChartsPanel = () => {
  return (
    <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bold text-lg">Ticket Volume Trend</h3>
          <p className="text-sm text-slate-500">
            Daily ticket submissions (Last 30 Days)
          </p>
        </div>
        <select className="text-xs font-semibold bg-slate-100 border-none rounded-lg py-1.5 px-2">
          <option>Monthly</option>
          <option>Weekly</option>
        </select>
      </div>

      <div className="h-64 bg-slate-50 rounded-md border border-slate-100 flex items-center justify-center text-slate-400">
        SVG / chart placeholder
      </div>

      <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest pt-2">
        <span>Mar 01</span>
        <span>Mar 07</span>
        <span>Mar 14</span>
        <span>Mar 21</span>
        <span>Mar 28</span>
      </div>
    </div>
  );
}

export default ChartsPanel;