import { NavLink } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";

const params = new URLSearchParams(window.location.search);
const mode = params.get("mode");
const SidebarItem = ({ to, icon: Icon, label, active }) => {
    return (
      <NavLink
        to={to}
        className={`
          flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition
          ${active
            ? "bg-blue-50 text-blue-600"
            : "text-slate-600 hover:bg-slate-100"}
        `}
      >
        <Icon
        fontSize="small"
        className={`
            min-w-[20px]
            ${active ? "text-blue-600" : "text-slate-500"}
        `}
        />
        <span className="hidden xl:inline">{label}</span>
      </NavLink>
    );
  };

const DashboardSidebar = () => {
  return (
    <aside className="
    hidden lg:flex lg:flex-col
    w-[72px] xl:w-64
    bg-white border-r border-slate-200
    transition-all duration-200
    ">
      {/* Brand */}
      <div className="px-6 py-6">
        <h1 className="text-lg font-semibold text-slate-800">
          SkillEarn
        </h1>
      </div>

      {/* Nav */}
      <nav className="px-3 space-y-1">
      <p className="px-4 pt-2 pb-1 text-xs font-medium text-slate-400 uppercase hidden xl:block">
            Workspace
        </p>
      <SidebarItem
        to="/dashboard?mode=earn"
        icon={HomeRoundedIcon}
        label="Dashboard"
        active={mode === "earn"}
        />

        <SidebarItem
        to="/dashboard?mode=earn"
        icon={PaidRoundedIcon}
        label="Earn"
        active={mode === "earn"}
        />

        <p className="px-4 pt-2 pb-1 text-xs font-medium text-slate-400 uppercase hidden xl:block">
            Explore
        </p>
        <SidebarItem
        to="/dashboard?mode=discover"
        icon={ExploreRoundedIcon}
        label="Discover"
        active={mode === "discover"}
        />
      </nav>
    </aside>
  );
};

export default DashboardSidebar;