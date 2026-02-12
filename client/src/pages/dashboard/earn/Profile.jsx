import DashboardLayout from "../DashboardLayout";
import useDarkMode from "../../../hooks/useDarkMode";
import { Sun, Moon } from "lucide-react";

/**
 * Profile Page (Earn Mode)
 */
const Profile = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <DashboardLayout
      mode="earn"
      title="My Profile"
      subtitle="Manage how others see you on SkillEarn."
    >
      <div className="max-w-4xl space-y-8">

        {/* Profile Header */}
        <div
          className="
            bg-white dark:bg-slate-900
            border border-slate-200 dark:border-slate-800
            rounded-2xl p-6
            flex flex-col sm:flex-row items-center gap-6
          "
        >
          {/* Avatar */}
          <div
            className="
              w-24 h-24 rounded-full
              bg-slate-200 dark:bg-slate-700
              flex items-center justify-center
              text-slate-500 dark:text-slate-200
              text-2xl font-semibold
            "
          >
            M
          </div>

          {/* Info */}
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
              Mayur Bari
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              UI/UX Designer • SkillEarn Creator
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
              Joined January 2025
            </p>
          </div>

          {/* Edit Button */}
          <button
            className="
              px-5 py-2.5 rounded-xl text-sm font-medium
              border border-slate-300 dark:border-slate-700
              text-slate-700 dark:text-slate-300
              hover:bg-slate-100 dark:hover:bg-slate-800
              transition
            "
          >
            Edit profile
          </button>
        </div>

        {/* 🌙 Dark Mode Toggle (Mobile & Tablet Only) */}
        <div className="md:hidden">
          <div
            className="
              bg-white dark:bg-slate-900
              border border-slate-200 dark:border-slate-800
              rounded-2xl p-6
              flex items-center justify-between
            "
          >
            <div className="flex items-center gap-3">
              {darkMode ? (
                <Moon size={20} className="text-slate-700 dark:text-slate-300" />
              ) : (
                <Sun size={20} className="text-slate-700 dark:text-slate-300" />
              )}
              <span className="font-medium text-slate-800 dark:text-slate-100">
                Dark Mode
              </span>
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`
                w-12 h-6 flex items-center rounded-full p-1
                transition-all duration-300
                ${darkMode ? "bg-[#5A7ACD]" : "bg-slate-300"}
              `}
            >
              <div
                className={`
                  bg-white w-4 h-4 rounded-full shadow-md
                  transform transition-transform duration-300
                  ${darkMode ? "translate-x-6" : "translate-x-0"}
                `}
              />
            </button>
          </div>
        </div>

        {/* Basic Info */}
        <div
          className="
            bg-white dark:bg-slate-900
            border border-slate-200 dark:border-slate-800
            rounded-2xl p-6
          "
        >
          <h4 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-4">
            Basic information
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-slate-500 dark:text-slate-400">Full name</p>
              <p className="text-slate-800 dark:text-slate-100 font-medium mt-1">
                Mayur Bari
              </p>
            </div>

            <div>
              <p className="text-slate-500 dark:text-slate-400">Email</p>
              <p className="text-slate-800 dark:text-slate-100 font-medium mt-1">
                mayur@example.com
              </p>
            </div>

            <div>
              <p className="text-slate-500 dark:text-slate-400">Role</p>
              <p className="text-slate-800 dark:text-slate-100 font-medium mt-1">
                Skill Provider
              </p>
            </div>

            <div>
              <p className="text-slate-500 dark:text-slate-400">Location</p>
              <p className="text-slate-800 dark:text-slate-100 font-medium mt-1">
                India
              </p>
            </div>
          </div>
        </div>

        {/* About */}
        <div
          className="
            bg-white dark:bg-slate-900
            border border-slate-200 dark:border-slate-800
            rounded-2xl p-6
          "
        >
          <h4 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-3">
            About
          </h4>

          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            I’m a UI/UX designer passionate about building clean, minimal,
            and user-friendly digital experiences. I enjoy helping others
            bring their ideas to life through thoughtful design.
          </p>
        </div>

        {/* Skills Summary */}
        <div
          className="
            bg-white dark:bg-slate-900
            border border-slate-200 dark:border-slate-800
            rounded-2xl p-6
          "
        >
          <h4 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-4">
            Skills on SkillEarn
          </h4>

          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1.5 rounded-full text-xs bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400">
              UI/UX Design
            </span>
            <span className="px-3 py-1.5 rounded-full text-xs bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400">
              Web Design
            </span>
            <span className="px-3 py-1.5 rounded-full text-xs bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400">
              Prototyping
            </span>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default Profile;