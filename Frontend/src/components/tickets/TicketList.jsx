//src/components/tickets/TicketList.jsx
import React, { useState, useMemo } from "react";
import Table from "@/components/common/Table";

const TicketList = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
 const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3;

  const tickets = [
    {
      id: "#TK-1024",
      subject: "Cannot access billing dashboard",
      category: "Billing & Payments",
      status: "Open",
      priority: "High",
      submitted: "Oct 24, 2023",
    },
    {
      id: "#TK-1018",
      subject: "API integration error in staging",
      category: "Developer Experience",
      status: "In Progress",
      priority: "Urgent",
      submitted: "Oct 22, 2023",
    },
    {
      id: "#TK-1015",
      subject: "Update billing email address",
      category: "Account Management",
      status: "Resolved",
      priority: "Low",
      submitted: "Oct 20, 2023",
    },
    {
      id: "#TK-1012",
      subject: "Feature request: Dark mode customization",
      category: "Feedback",
      status: "Closed",
      priority: "Medium",
      submitted: "Oct 18, 2023",
    },
    {
      id: "#TK-1024",
      subject: "Cannot access billing dashboard",
      category: "Billing & Payments",
      status: "Open",
      priority: "High",
      submitted: "Oct 24, 2023",
    },
    {
      id: "#TK-1018",
      subject: "API integration error in staging",
      category: "Developer Experience",
      status: "In Progress",
      priority: "Urgent",
      submitted: "Oct 22, 2023",
    },
    {
      id: "#TK-1015",
      subject: "Update billing email address",
      category: "Account Management",
      status: "Resolved",
      priority: "Low",
      submitted: "Oct 20, 2023",
    },
    {
      id: "#TK-1012",
      subject: "Feature request: Dark mode customization",
      category: "Feedback",
      status: "Open",
      priority: "Medium",
      submitted: "Oct 18, 2023",
    },
  ];

  // 🎯 Filtering logic
  const filteredTickets = useMemo(() => {
    return tickets.filter((ticket) => {
      const matchesSearch =
        ticket.id.toLowerCase().includes(search.toLowerCase()) ||
        ticket.subject.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || ticket.status === statusFilter;

      const matchesPriority =
        priorityFilter === "All" || ticket.priority === priorityFilter;

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [search, statusFilter, priorityFilter]);

   // 📄 Pagination logic
  const totalPages = Math.ceil(filteredTickets.length / itemsPerPage);

  const paginatedTickets = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredTickets.slice(start, start + itemsPerPage);
  }, [filteredTickets, currentPage]);

  const columns = [
    {
      key: "id",
      header: "TICKET ID",
      render: (row) => (
        <span className="text-blue-600 font-semibold cursor-pointer">
          {row.id}
        </span>
      ),
    },
    {
      key: "subject",
      header: "SUBJECT",
      render: (row) => (
        <div>
          <p className="font-medium text-slate-800">{row.subject}</p>
          <p className="text-sm text-slate-400">{row.category}</p>
        </div>
      ),
    },
    {
      key: "status",
      header: "STATUS",
      render: (row) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            row.status === "Open"
              ? "bg-blue-100 text-blue-600"
              : row.status === "In Progress"
              ? "bg-yellow-100 text-yellow-600"
              : row.status === "Resolved"
              ? "bg-green-100 text-green-600"
              : "bg-slate-100 text-slate-500"
          }`}
        >
          {row.status}
        </span>
      ),
    },
    {
      key: "priority",
      header: "PRIORITY",
      render: (row) => (
        <span
          className={`text-sm font-medium ${
            row.priority === "Urgent"
              ? "text-red-600"
              : row.priority === "High"
              ? "text-orange-600"
              : row.priority === "Medium"
              ? "text-yellow-600"
              : "text-slate-500"
          }`}
        >
          {row.priority}
        </span>
      ),
    },
    {
      key: "submitted",
      header: "SUBMITTED",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200 space-y-6">
      
      {/* 🔎 Filters Section */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search by ticket ID or subject..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-slate-200 rounded-lg px-4 py-2"
        >
          <option>All</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Resolved</option>
          <option>Closed</option>
        </select>

        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="border border-slate-200 rounded-lg px-4 py-2"
        >
          <option>All</option>
          <option>Urgent</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button
          onClick={() => {
            setSearch("");
            setStatusFilter("All");
            setPriorityFilter("All");
          }}
          className="px-4 py-2 border rounded-lg text-slate-600 hover:bg-slate-100"
        >
          Clear
        </button>
      </div>

      {/* 📋 Table */}
      <Table columns={columns} data={paginatedTickets} />

      {/* 📄 Pagination Footer */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-slate-500">
          Showing{" "}
          {(currentPage - 1) * itemsPerPage + 1} to{" "}
          {Math.min(currentPage * itemsPerPage, filteredTickets.length)} of{" "}
          {filteredTickets.length} results
        </p>

        <div className="flex gap-2 items-center">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
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
                  ? "bg-blue-600 text-white"
                  : "border"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketList;
