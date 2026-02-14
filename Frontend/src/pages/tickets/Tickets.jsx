//src/pages/tickets/Tickets.jsx
import React from "react";
import Navbar from "@/components/layout/Navbar"
import { NavLink } from "react-router-dom"
import TicketList from "@/components/tickets/TicketList";

const Tickets = () => {
  return (
    <>
      <Navbar
        /* LEFT */
        left={
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold">💬</span>
            </div>
            <span className="font-semibold text-slate-800 text-lg">
              Customer Portal
            </span>
          </div>
        }

        /* CENTER */
        center={
          <>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-slate-600 hover:text-blue-600"
                }`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/tickets"
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-slate-600 hover:text-blue-600"
                }`
              }
            >
              My Tickets
            </NavLink>

            <a
              href="#"
              className="text-sm font-medium text-slate-600 hover:text-blue-600"
            >
              Knowledge Base
            </a>

            <a
              href="#"
              className="text-sm font-medium text-slate-600 hover:text-blue-600"
            >
              Settings
            </a>
          </>
        }

        /* RIGHT */
        right={
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-green-700 font-semibold">JD</span>
          </div>
        }
      />

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
