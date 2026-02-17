import { Routes, Route } from "react-router-dom";

/* Entry */
import Intent from "../pages/intent/Intent";
import EarnEntry from "../pages/entry/EarnEntry";
import DiscoverEntry from "../pages/entry/DiscoverEntry";

/* Auth */
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

/* Dashboard entry */
import Dashboard from "../pages/dashboard/Dashboard";

/* Earn dashboard pages */
import Skills from "../pages/dashboard/earn/Skills";
import Explore from "../pages/dashboard/earn/Explore";
import SkillDetail from "../pages/dashboard/earn/SkillDetail";
import Notifications from "../pages/dashboard/earn/Notifications";
import Requests from "../pages/dashboard/earn/Requests";
import Messages from "../pages/dashboard/earn/Messages";
import Profile from "../pages/dashboard/earn/Profile";
import PostSkill from "../pages/dashboard/earn/PostSkill";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Entry */}
      <Route path="/" element={<Intent />} />
      <Route path="/earn" element={<EarnEntry />} />
      <Route path="/discover" element={<DiscoverEntry />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboard entry */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Earn dashboard */}
      <Route path="/dashboard/earn/skills" element={<Skills />} />
      <Route path="/dashboard/earn/explore" element={<Explore />} />
      <Route path="/dashboard/earn/explore/:id" element={<SkillDetail />} />
      <Route path="/dashboard/earn/notifications" element={<Notifications />} />
      <Route path="/dashboard/earn/requests" element={<Requests />} />
      <Route path="/dashboard/earn/messages" element={<Messages />} />
      <Route path="/dashboard/earn/profile" element={<Profile />} />
      <Route path="/dashboard/earn/post-skill" element={<PostSkill />} />
    </Routes>
  );
};

export default AppRoutes;