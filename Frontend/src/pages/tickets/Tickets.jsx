//src/pages/tickets/Tickets.jsx
import React from "react";
import Navbar from "@/components/layout/Navbar";
import TicketList from "@/components/tickets/TicketList";

const Tickets = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              My Tickets
            </h1>
            <p className="text-slate-500 mt-1">
              Manage and track your support inquiries
            </p>
          </div>

          <button className="px-5 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
            + Create New Ticket
          </button>
        </div>

        {/* Table */}
        <TicketList />
      </div>
    </>
  );
};

export default Tickets;
