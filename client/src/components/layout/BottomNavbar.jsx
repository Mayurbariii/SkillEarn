import { NavLink, useLocation } from "react-router-dom";
import { Briefcase, Compass, MessageSquare, User } from "lucide-react";
import { motion as Motion } from "framer-motion";

const tabs = [
  { name: "Explore", path: "/dashboard/earn/explore", icon: Compass },
  { name: "My Skills", path: "/dashboard/earn/skills", icon: Briefcase },
  { name: "Messages", path: "/dashboard/earn/messages", icon: MessageSquare },
  { name: "Profile", path: "/dashboard/earn/profile", icon: User },
];

const BottomNavbar = () => {
  const location = useLocation();

  return (
    <div className="fixed bottom-5 left-0 w-full flex justify-center z-50 md:hidden">
      <div
        className="
          relative
          flex items-center
          w-[94%] max-w-md
          h-16
          px-2
          rounded-full
          bg-white/70 dark:bg-slate-900/70
          backdrop-blur-2xl
          border border-slate-200/60 dark:border-slate-700/60
          shadow-[0_8px_30px_rgba(0,0,0,0.08)]
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
              {/* Liquid Pill */}
              {isActive && (
                <>
                  <Motion.div
                    layoutId="pill"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 28,
                      mass: 0.8,
                    }}
                    className="absolute inset-0 rounded-full bg-[#5A7ACD]"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                      duration: 0.35,
                      ease: "easeOut",
                    }}
                  />

                  {/* Glow Layer */}
                  <Motion.div
                    layoutId="glow"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 28,
                      mass: 0.8,
                    }}
                    className="absolute inset-0 rounded-full bg-[#5A7ACD]/40 blur-md"
                  />
                </>
              )}

              {/* Content */}
              <Motion.div
                className="relative z-10 flex items-center gap-2 px-4 py-2"
                whileTap={{
                  scale: 0.92,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 20,
                }}
              >
                {/* Icon with subtle slide */}
                <Motion.div
                  animate={{
                    scale: isActive ? 1.08 : 1,
                    x: isActive ? -2 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 22,
                  }}
                >
                  <Icon
                    size={20}
                    className={
                      isActive
                        ? "text-white"
                        : "text-slate-500 dark:text-slate-400"
                    }
                  />
                </Motion.div>

                {/* Label with smoother reveal */}
                <Motion.span
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    x: isActive ? 0 : -6,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                  className="text-sm font-medium whitespace-nowrap text-white"
                >
                  {isActive ? tab.name : ""}
                </Motion.span>
              </Motion.div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavbar;