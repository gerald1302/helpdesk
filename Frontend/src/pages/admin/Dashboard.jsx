import React from "react";
import AdminLayout from "@/components/layout/admin/AdminLayout";
import KpiCard from "@/components/dashboard/KpiCard";
import ChartsPanel from "@/components/dashboard/ChartsPanel";
import AgentLeaderboard from "@/components/dashboard/AgentLeaderboard";
import ByCategory from "@/components/dashboard/ByCategory";
import { ChartLine, Timer, Verified, CheckCircle } from "lucide-react";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Analytics Overview
          </h2>
          <p className="text-slate-500">
            Real-time performance metrics for the enterprise support platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KpiCard
            title="Total Open Tickets"
            value="1,284"
            delta="+12%"
            icon={<ChartLine className="w-5 h-5" />}
          />
          <KpiCard
            title="Avg. Response Time"
            value="2h 15m"
            delta="-5%"
            icon={<Timer className="w-5 h-5" />}
          />
          <KpiCard
            title="SLA Compliance"
            value="94.2%"
            delta="+0.5%"
            icon={<Verified className="w-5 h-5" />}
          />
          <KpiCard
            title="Total Resolved"
            value="8,432"
            delta="+8%"
            icon={<CheckCircle className="w-5 h-5" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-rows-2 gap-8">
          {/* Left: charts + agents (stacked) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 space-x-8">
            <ChartsPanel />
            <ByCategory />
          </div>

          {/* Right: by category */}
          <div>
            <AgentLeaderboard />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
