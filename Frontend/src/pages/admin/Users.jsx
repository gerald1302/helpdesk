import React, { useState } from "react";
import AdminLayout from "@/components/layout/admin/AdminLayout";
import UsersFilters from "@/components/admin/UsersFilters";
import UsersTable from "@/components/admin/UsersTable";
import BulkActionsBar from "@/components/admin/BulkActionsBar";

export default function Users() {
  const [selectedCount, setSelectedCount] = useState(0);

  // Lifted filter state so it can be used to query an API
  const [filters, setFilters] = useState({
    q: "",
    role: "All",
    status: "All",
  });

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-black text-[#111418]">
            User Management
          </h1>
          <p className="text-slate-500 mt-1">
            Manage permissions, monitor activity, and oversee enterprise
            accounts.
          </p>
        </div>

        <div className="flex justify-end">
          <button className="flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-white text-sm font-bold shadow-md bg-blue-600 hover:bg-blue-600/70">
            Invite New User
          </button>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <UsersTable
            filters={filters}
            onSelectionChange={(n) => setSelectedCount(n)}
          />
        </div>
      </div>

      {selectedCount > 0 && <BulkActionsBar selectedCount={selectedCount} />}
    </AdminLayout>
  );
}
