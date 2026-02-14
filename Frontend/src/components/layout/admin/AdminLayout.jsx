import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import HeaderBar from "@/components/layout/HeaderBar";

export default function AdminLayout({ children }) {
  return (
    // full viewport height; sidebar will fill, right side scrolls
    <div className="h-screen flex bg-slate-50 text-slate-900">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <HeaderBar />

        {/* scrollable content area only */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}