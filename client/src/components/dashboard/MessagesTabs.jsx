import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { id: "messages", label: "Messages", count: 3 },
  { id: "requests", label: "Requests", count: 2 },
];

const MessagesTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="relative flex w-fit bg-slate-100 dark:bg-slate-800 p-1 rounded-full">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="relative px-5 py-2 text-sm font-medium rounded-full z-10"
          >
            {isActive && (
              <motion.div
                layoutId="messages-pill"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
                className="absolute inset-0 bg-[#5A7ACD] rounded-full"
              />
            )}

            <span
              className={`relative flex items-center gap-2 ${
                isActive
                  ? "text-white"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              {tab.label}

              {tab.count > 0 && (
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    isActive
                      ? "bg-white/20"
                      : "bg-slate-200 dark:bg-slate-700"
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default MessagesTabs;