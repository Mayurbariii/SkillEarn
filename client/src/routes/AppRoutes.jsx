import { Routes, Route } from "react-router-dom";

import Intent from "../pages/intent/Intent";
import EarnEntry from "../pages/entry/EarnEntry";
import DiscoverEntry from "../pages/entry/DiscoverEntry";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

import Dashboard from "../pages/dashboard/dashboard";
import DashboardEarn from "../pages/dashboard/DashboardEarn";
import DashboardDiscover from "../pages/dashboard/DashboardDiscover";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Entry */}
      <Route path="/" element={<Intent />} />

      {/* Intent paths */}
      <Route path="/earn" element={<EarnEntry />} />
      <Route path="/discover" element={<DiscoverEntry />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/earn" element={<DashboardEarn />} />
      <Route path="/dashboard/discover" element={<DashboardDiscover />} />
    </Routes>
  );
};

export default AppRoutes;