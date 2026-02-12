import { NavLink, useLocation } from "react-router-dom";
import { Briefcase, Compass, MessageSquare, User } from "lucide-react";
import { motion } from "framer-motion";

const tabs = [
  { name: "My Skills", path: "/dashboard/earn/skills", icon: Briefcase },
  { name: "Explore", path: "/discover", icon: Compass },
  { name: "Messages", path: "/dashboard/earn/messages", icon: MessageSquare },
  { name: "Profile", path: "/dashboard/earn/profile", icon: User },
];

const BottomNavbar = () => {
  const location = useLocation();

  return (
    <div className="fixed bottom-5 left-0 w-full flex justify-center z-50">
      <div
        className="
          flex items-center
          w-[94%] max-w-md
          h-18
          p-2
          rounded-full
          bg-white/60 dark:bg-slate-900/60
          backdrop-blur-xl
          border border-slate-200/60 dark:border-slate-700/60
          shadow-xl
        "
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = location.pathname.startsWith(tab.path);

          return (
            <NavLink
              key={tab.name}
              to={tab.path}
              className="flex-1 relative flex items-center justify-center"
            >
              {isActive && (
                <motion.div
                  layoutId="pill"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                  className="absolute inset-0 rounded-full bg-[#5A7ACD]"
                />
              )}

              <motion.div
                className="relative z-10 flex items-center gap-2 px-5 py-3"
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <motion.div
                  animate={{ scale: isActive ? 1.1 : 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon
                    size={20}
                    className={isActive ? "text-white" : "text-slate-500 dark:text-slate-400"}
                  />
                </motion.div>

                <motion.span
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    width: isActive ? "auto" : 0,
                  }}
                  transition={{ duration: 0.25 }}
                  className="text-sm font-medium whitespace-nowrap text-white overflow-hidden"
                >
                  {tab.name}
                </motion.span>
              </motion.div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavbar;