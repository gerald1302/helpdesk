import React, { useMemo, useState, useEffect } from "react";
import Table from "@/components/common/Table";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Edit2, User, Download } from "lucide-react";

/**
 * Self-contained UsersTable:
 * - Filters are inside the component (search / role / status)
 * - Pagination footer styled like TicketList
 * - onSelectionChange(selectedCount) callback preserved
 */

const sampleUsers = [
  {
    id: "U-1001",
    name: "John Doe",
    email: "john.doe@enterprise.com",
    role: "Admin",
    status: "Active",
    lastLogin: "Oct 24, 2023 10:15 AM",
  },
  {
    id: "U-1002",
    name: "Sarah Jenkins",
    email: "s.jenkins@support.tech",
    role: "Agent",
    status: "Active",
    lastLogin: "Oct 24, 2023 09:30 AM",
  },
  {
    id: "U-1003",
    name: "Michael Chen",
    email: "m.chen@client-corp.com",
    role: "Employee",
    status: "Inactive",
    lastLogin: "Sep 15, 2023 02:45 PM",
  },
  {
    id: "U-1004",
    name: "Emily Blunt",
    email: "e.blunt@agent-network.com",
    role: "Agent",
    status: "Active",
    lastLogin: "Oct 23, 2023 04:50 PM",
  },
  {
    id: "U-1005",
    name: "David Miller",
    email: "dmiller@enterprise.com",
    role: "Technician",
    status: "Active",
    lastLogin: "Oct 24, 2023 08:20 AM",
  },
  // add more for better pagination during dev
  {
    id: "U-1006",
    name: "Anna White",
    email: "anna.white@example.com",
    role: "Employee",
    status: "Active",
    lastLogin: "Oct 20, 2023 10:00 AM",
  },
  {
    id: "U-1007",
    name: "Tom Harris",
    email: "tom.harris@example.com",
    role: "Technician",
    status: "Inactive",
    lastLogin: "Sep 10, 2023 11:20 AM",
  },
  {
    id: "U-1008",
    name: "Linda Park",
    email: "linda.park@example.com",
    role: "Agent",
    status: "Active",
    lastLogin: "Oct 01, 2023 09:00 AM",
  },
  {
    id: "U-1009",
    name: "Robert King",
    email: "robert.king@example.com",
    role: "Employee",
    status: "Active",
    lastLogin: "Oct 02, 2023 15:00 PM",
  },
];

export default function UsersTable({ onSelectionChange = () => {} }) {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(() => new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [loading, setLoading] = useState(false);

  // internal filters (moved inside component)
  const [q, setQ] = useState("");
  const [role, setRole] = useState("All");
  const [status, setStatus] = useState("All");

  // Simulated fetch - replace with API call
  async function fetchUsers({ q, role, status }) {
    setLoading(true);
    // simulate network latency
    await new Promise((r) => setTimeout(r, 150));
    // simple filtering client-side for demo
    const filtered = sampleUsers.filter((u) => {
      const matchesQ =
        !q ||
        u.name.toLowerCase().includes(q.toLowerCase()) ||
        u.email.toLowerCase().includes(q.toLowerCase()) ||
        u.id.toLowerCase().includes(q.toLowerCase());
      const matchesRole = !role || role === "All" || u.role === role;
      const matchesStatus = !status || status === "All" || u.status === status;
      return matchesQ && matchesRole && matchesStatus;
    });
    setLoading(false);
    return filtered;
  }

  // load data whenever filters change
  useEffect(() => {
    let mounted = true;
    setCurrentPage(1); // reset page when filters change
    fetchUsers({ q, role, status }).then((res) => {
      if (!mounted) return;
      setData(res);
      // clear selection when data changes
      setSelected(new Set());
    });
    return () => (mounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, role, status]);

  useEffect(() => {
    onSelectionChange(selected.size);
  }, [selected, onSelectionChange]);

  const toggle = (id) => {
    setSelected((prev) => {
      const copy = new Set(prev);
      if (copy.has(id)) copy.delete(id);
      else copy.add(id);
      return copy;
    });
  };

  const totalPages = Math.max(1, Math.ceil(data.length / itemsPerPage));
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  }, [data, currentPage]);

  const allVisibleSelected =
    paginated.length > 0 && paginated.every((r) => selected.has(r.id));

  const columns = [
    {
      key: "select",
      header: (
        <input
          type="checkbox"
          checked={allVisibleSelected}
          onChange={(e) => {
            if (e.target.checked) {
              const toAdd = paginated.map((r) => r.id);
              setSelected((prev) => {
                const copy = new Set(prev);
                toAdd.forEach((id) => copy.add(id));
                return copy;
              });
            } else {
              setSelected((prev) => {
                const copy = new Set(prev);
                paginated.forEach((r) => copy.delete(r.id));
                return copy;
              });
            }
          }}
          className="rounded text-primary h-4 w-4"
        />
      ),
      render: (r) => (
        <input
          type="checkbox"
          checked={selected.has(r.id)}
          onChange={() => toggle(r.id)}
          className="rounded text-primary h-4 w-4"
        />
      ),
    },
    {
      key: "name",
      header: "USER",
      render: (r) => (
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full bg-slate-100 bg-center bg-cover flex items-center justify-center text-sm font-semibold text-slate-700"
            style={{
              backgroundImage: `url('https://i.pravatar.cc/100?u=${r.id}')`,
            }}
          >
            {/* {!r.avatar && <User className="w-4 h-4 text-slate-500" />} */}
          </div>
          <div className="min-w-0">
            <div className="text-sm font-semibold truncate">{r.name}</div>
            <div className="text-xs text-slate-500 truncate">{r.email}</div>
          </div>
        </div>
      ),
    },
    {
      key: "role",
      header: "ROLE",
      render: (r) => (
        <div>
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              r.role === "Admin"
                ? "bg-blue-100 text-blue-800"
                : r.role === "Agent"
                  ? "bg-purple-100 text-purple-800"
                  : r.role === "Technician"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-slate-100 text-slate-800"
            }`}
          >
            {r.role}
          </span>
        </div>
      ),
    },
    {
      key: "status",
      header: "STATUS",
      render: (r) => (
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${r.status === "Active" ? "bg-emerald-500" : "bg-gray-400"}`}
          />
          <span className="text-sm">{r.status}</span>
        </div>
      ),
    },
    { key: "lastLogin", header: "LAST LOGIN" },
    {
      key: "actions",
      header: <div className="text-right">ACTIONS</div>,
      render: (r) => (
        <div className="text-right flex items-center justify-end gap-3">
          <button
            className={`text-xs font-medium rounded-md p-2 text-white ${r.status === "Active" ? "bg-rose-600" : "bg-emerald-600"}`}
          >
            {r.status === "Active" ? "Deactivate" : "Activate"}
          </button>
          <button className="text-white bg-blue-500 hover:bg-blue-500/80 p-2 rounded-md">
            <Edit2 className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 space-y-4">
      {/* Filters (moved into UsersTable) */}
      <div className="flex flex-col md:flex-row gap-3 items-center">
        <div className="relative w-full md:max-w-md">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="block focus:outline-none focus:ring-blue-500 w-full pl-3 pr-3 py-2 bg-slate-100 rounded-lg text-sm placeholder-slate-500 focus:ring-2"
            placeholder="Search by name, email, or ID..."
            type="text"
          />
        </div>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
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
          onChange={(e) => setStatus(e.target.value)}
          className="h-10 rounded-lg bg-slate-100 px-4 text-sm"
        >
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <button
          onClick={() => {
            setQ("");
            setRole("All");
            setStatus("All");
          }}
          className="px-4 py-2 border rounded-lg text-slate-600 hover:bg-slate-100"
        >
          Clear
        </button>

        <button className="flex h-10 items-center gap-2 rounded-lg bg-white border px-3 text-sm text-slate-700 hover:bg-slate-50">
            <Download className="w-4 h-4" />
            Export CSV
        </button>
      </div>

      {loading ? (
        <div className="py-12 flex items-center justify-center text-slate-400">
          Loading users...
        </div>
      ) : (
        <>
          <Table columns={columns} data={paginated} />

          {/* Footer (uniform with TicketList) */}
          <div className="flex justify-between items-center mt-4 px-2">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-medium">
                {data.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1}
              </span>{" "}
              to{" "}
              <span className="font-medium">
                {Math.min(currentPage * itemsPerPage, data.length)}
              </span>{" "}
              of{" "}
              <span className="font-medium">{data.length}</span>{" "}
              results
            </p>

            <div className="flex gap-2 items-center">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Prev
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "border"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
