//src/components/tickets/TicketList.jsx
import React from "react";
import Table from "@/components/common/Table";

const TicketList = () => {
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
  ];

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
    <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
      <Table columns={columns} data={tickets} />
    </div>
  );
};

export default TicketList;
