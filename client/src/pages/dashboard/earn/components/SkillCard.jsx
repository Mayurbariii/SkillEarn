import { motion as Motion } from "framer-motion";

const SkillCard = ({
  title,
  category,
  status,
  requests,
  lastActive,
}) => {
  const statusColor =
    status === "active"
      ? "bg-green-100 text-green-600"
      : "bg-amber-100 text-amber-600";

  return (
    <Motion.div
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="
        bg-white dark:bg-slate-900
        border border-slate-200 dark:border-slate-800
        rounded-2xl
        p-4 md:p-6
        transition
        shadow-sm
      "
    >
      <div className="flex items-start justify-between">
        <h3 className="text-sm md:text-base font-semibold text-slate-800 dark:text-slate-100">
          {title}
        </h3>

        <span
          className={`text-xs px-2 py-1 rounded-full ${statusColor}`}
        >
          {status}
        </span>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
        {category}
      </p>

      <div className="flex items-center justify-between mt-4 text-xs text-slate-500 dark:text-slate-400">
        <span>{requests} Requests</span>
        <span>{lastActive}</span>
      </div>
    </Motion.div>
  );
};

export default SkillCard;