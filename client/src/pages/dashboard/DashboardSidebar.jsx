import { NavLink } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";

const SidebarItem = ({ to, icon: Icon, label }) => (
  <NavLink
    to={to}
    className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-slate-600 hover:bg-slate-100 transition"
  >
    <Icon fontSize="small" className="text-slate-500" />
    <span className="hidden xl:inline">{label}</span>
  </NavLink>
);

const DashboardSidebar = ({ mode }) => {
  return (
    <aside className="hidden lg:flex lg:flex-col w-[72px] xl:w-64 bg-white border-r border-slate-200">
      <div className="px-6 py-6 font-semibold text-slate-800">
        SkillEarn
      </div>

      <nav className="px-3 space-y-1">

        <SidebarItem
          to={`/dashboard?mode=${mode}`}
          icon={HomeRoundedIcon}
          label="Dashboard"
        />

        {mode === "earn" && (
          <>
            <SidebarItem
              to="/dashboard/earn/post-skill"
              icon={PaidRoundedIcon}
              label="Post Skill"
            />
            <SidebarItem
              to="/dashboard/earn/requests"
              icon={MessageRoundedIcon}
              label="Requests"
            />
          </>
        )}

        {mode === "discover" && (
          <>
            <SidebarItem
              to="/dashboard/discover/quiz"
              icon={QuizRoundedIcon}
              label="Skill Quiz"
            />
            <SidebarItem
              to="/dashboard/discover/tests"
              icon={ExploreRoundedIcon}
              label="Tests"
            />
          </>
        )}

        <div className="my-3 border-t border-slate-200" />

        <SidebarItem
          to="/dashboard/profile"
          icon={PersonRoundedIcon}
          label="Profile"
        />

        <SidebarItem
          to={`/dashboard?mode=${mode === "earn" ? "discover" : "earn"}`}
          icon={ExploreRoundedIcon}
          label={`Switch to ${mode === "earn" ? "Discover" : "Earn"}`}
        />
      </nav>
    </aside>
  );
};

export default DashboardSidebar;