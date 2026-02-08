import React from "react";
import Table from "@/components/common/Table";

const rows = [
  {
    name: "Sarah Johnson",
    role: "Tier 3 Specialist",
    resolved: 452,
    avg: "1h 12m",
    csat: "4.9/5.0",
    status: "EXCEPTIONAL",
  },
  {
    name: "Michael Chen",
    role: "Tier 2 Support",
    resolved: 398,
    avg: "1h 45m",
    csat: "4.8/5.0",
    status: "EXCEPTIONAL",
  },
  {
    name: "Jessica Lee",
    role: "Onboarding Expert",
    resolved: 374,
    avg: "2h 05m",
    csat: "4.6/5.0",
    status: "TARGET MET",
  },
];

const AgentLeaderboard = () => {
  const columns = [
    {
      key: "agent",
      header: "Agent",
      render: (r) => (
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full bg-slate-100 bg-center bg-cover"
            style={{
              backgroundImage: `url('https://i.pravatar.cc/60?u=${r.name}')`,
            }}
          />
          <div>
            <div className="text-sm font-bold">{r.name}</div>
            <div className="text-[11px] text-slate-500">{r.role}</div>
          </div>
        </div>
      ),
    },
    {
      key: "resolved",
      header: "Tickets Resolved",
      render: (r) => <div className="text-sm font-medium">{r.resolved}</div>,
    },
    {
      key: "avg",
      header: "Avg Response",
      render: (r) => <div className="text-sm font-medium">{r.avg}</div>,
    },
    {
      key: "csat",
      header: "CSAT Score",
      render: (r) => (
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 bg-emerald-500 rounded-full" />
          <span className="text-sm font-bold">{r.csat}</span>
        </div>
      ),
    },
    {
      key: "status",
      header: "Performance",
      render: (r) => (
        <div className="text-right">
          <span
            className={`inline-flex px-2 py-1 rounded text-[10px] font-bold ${r.status === "EXCEPTIONAL" ? "bg-emerald-100 text-emerald-600" : "bg-primary/10 text-primary"}`}
          >
            {r.status}
          </span>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-bold text-lg">Top Performing Agents</h3>
          <p className="text-sm text-slate-500">
            Based on resolved tickets and satisfaction score.
          </p>
        </div>
        <button className="px-3 py-2 text-sm font-bold bg-white border border-slate-200 rounded-lg">
          Filter
        </button>
      </div>

      <Table columns={columns} data={rows} />
    </div>
  );
}

export default AgentLeaderboard;