import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import DashboardLayout from "../DashboardLayout";

const Notifications = () => {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      user: "Rahul Mehta",
      action: "sent you a project request",
      time: "2h",
      group: "Today",
      unread: true,
      type: "request",
    },
    {
      id: 2,
      user: "Amit Sharma",
      action: "completed milestone 1",
      time: "5h",
      group: "Today",
      unread: true,
      type: "milestone",
    },
    {
      id: 3,
      user: "Neha Patel",
      action: "placed a new order",
      time: "1d",
      group: "Yesterday",
      unread: false,
      type: "order",
    },
  ]);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, unread: false } : item
      )
    );
  };

  const handleClick = (item) => {
    markAsRead(item.id);

    if (item.type === "request" || item.type === "milestone") {
      navigate("/dashboard/earn/messages");
    }
  };

  const grouped = notifications.reduce((acc, item) => {
    acc[item.group] = acc[item.group] || [];
    acc[item.group].push(item);
    return acc;
  }, {});

  return (
    <DashboardLayout
      title="Notifications"
      subtitle="Stay updated with all activity."
    >
      <div className="space-y-8 pb-6">

        {/* ================= MOBILE TOP BAR ================= */}
        <div className="flex items-center gap-4 mb-4 md:hidden">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition active:scale-95"
          >
            <ArrowLeft size={20} />
          </button>

          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            Notifications
          </h2>
        </div>

        {Object.keys(grouped).map((group) => (
          <div key={group}>
            <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wide">
              {group}
            </h3>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
              <AnimatePresence>
                {grouped[group].map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    drag="x"
                    dragConstraints={{ left: -120, right: 0 }}
                    onDragEnd={(e, info) => {
                      if (info.offset.x < -80) {
                        markAsRead(item.id);
                      }
                    }}
                    className="
                      px-5 py-4
                      hover:bg-slate-50 dark:hover:bg-slate-800
                      transition
                      flex gap-4 items-start
                      cursor-pointer
                      active:bg-slate-100 dark:active:bg-slate-700
                    "
                    onClick={() => handleClick(item)}
                  >
                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-sm font-semibold shrink-0">
                      {item.user.charAt(0)}
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <p className="text-sm text-slate-800 dark:text-slate-100">
                        <span className="font-medium">
                          {item.user}
                        </span>{" "}
                        {item.action}
                      </p>

                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {item.time}
                      </p>
                    </div>

                    {/* Animated Unread Dot */}
                    <AnimatePresence>
                      {item.unread && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{ duration: 0.2 }}
                          className="w-2.5 h-2.5 bg-[#5A7ACD] rounded-full mt-2"
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Notifications;