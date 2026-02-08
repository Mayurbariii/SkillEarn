import { NavLink } from "react-router-dom";
import {
  Briefcase,
  ClipboardList,
  MessageSquare,
  User,
  Moon,
  Sun,
} from "lucide-react";
import useDarkMode from "../../hooks/useDarkMode";

/* ----------------------------------
   Sidebar Item (unchanged)
----------------------------------- */
const SidebarItem = ({ to, icon: Icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `
      group relative flex items-center gap-3
      px-4 py-3 rounded-xl
      text-sm font-medium
      transition-all duration-200 ease-out
      ${
        isActive
          ? "bg-blue-500/10 text-blue-500 dark:bg-blue-500/15 dark:text-blue-400"
          : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100"
      }
    `}
  >
    {({ isActive }) => (
      <>
        {/* Active indicator */}
        <span
          className={`
            absolute left-0 top-1/2 -translate-y-1/2
            h-6 w-1 rounded-r
            bg-blue-500
            transition-opacity duration-200
            ${isActive ? "opacity-100" : "opacity-0"}
          `}
        />

        <Icon
          size={20}
          className="shrink-0 transition-transform duration-200 group-hover:scale-110"
        />

        <span className="hidden xl:inline">{label}</span>
      </>
    )}
  </NavLink>
);

/* ----------------------------------
   Sidebar (FIXED LAYOUT)
----------------------------------- */
const DashboardSidebar = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <aside
      className="
        hidden lg:flex flex-col
        min-h-screen
        w-[72px] xl:w-64
        bg-white dark:bg-slate-900
        border-r border-slate-200 dark:border-slate-800
      "
    >
      {/* Logo (fixed height) */}
      <div className="px-4 py-6 flex items-center gap-3 shrink-0">
        <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
          S
        </div>
        <span className="hidden xl:inline text-lg font-semibold text-slate-800 dark:text-slate-100">
          SkillEarn
        </span>
      </div>

      {/* Navigation (ONLY flexible section) */}
      <nav className="flex-1 px-2 space-y-1 overflow-y-auto">
        <SidebarItem to="/dashboard/earn/skills" icon={Briefcase} label="My Skills" />
        <SidebarItem to="/dashboard/earn/requests" icon={ClipboardList} label="Requests" />
        <SidebarItem to="/dashboard/earn/messages" icon={MessageSquare} label="Messages" />
        <SidebarItem to="/dashboard/earn/profile" icon={User} label="Profile" />
      </nav>

      {/* Theme Toggle (pinned bottom) */}
      <div className="px-3 py-4 border-t border-slate-200 dark:border-slate-800 shrink-0">
        <button
          onClick={() => setIsDark(!isDark)}
          className="
            w-full flex items-center gap-3
            px-3 py-2 rounded-xl
            text-sm font-medium
            text-slate-600 dark:text-slate-400
            hover:bg-slate-100 dark:hover:bg-slate-800
            transition
          "
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
          <span className="hidden xl:inline">
            {isDark ? "Light mode" : "Dark mode"}
          </span>
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;