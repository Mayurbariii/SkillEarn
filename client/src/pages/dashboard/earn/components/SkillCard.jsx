const SkillCard = ({
    title,
    category,
    status = "active",
    requests = 0,
    lastActive = "Recently",
  }) => {
    const isActive = status === "active";
  
    return (
      <div
        className="
         bg-white dark:bg-slate-800
            border border-slate-200 dark:border-slate-700
          rounded-2xl p-5
          transition-colors duration-300
        "
      >
        <div className="flex justify-between items-start">
          <h4 className="font-semibold">{title}</h4>
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              isActive
                ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
                : "bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
            }`}
          >
            {status}
          </span>
        </div>
  
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          {category}
        </p>
  
        <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">
          Requests: <span className="font-medium">{requests}</span>
        </div>
  
        <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Last active: <span className="font-medium">{lastActive}</span>
        </div>
      </div>
    );
  };
  
  export default SkillCard;