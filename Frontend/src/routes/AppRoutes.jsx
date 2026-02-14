import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import AdminDashboard from "../pages/admin/Dashboard";
import Tickets from "../pages/tickets/Tickets";
import TicketDetails from "../pages/tickets/TicketDetails";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<AdminDashboard />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/login" replace />} />

      {/* Tickets */}
      <Route path="/tickets" element={<Tickets />} />

      {/* Ticket Details */}
      <Route path="/tickets/:id" element={<TicketDetails />} />
    </Routes>
  );
};

export default AppRoutes;
