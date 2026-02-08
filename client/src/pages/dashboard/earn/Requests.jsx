import DashboardLayout from "../DashboardLayout";

/**
 * Requests Page (Earn Mode)
 *
 * UI-only implementation.
 * Backend & chat integration will be added later.
 */
const Requests = () => {
  const requests = [
    {
      id: 1,
      user: "Amit Sharma",
      skill: "Web Design for Startups",
      message: "Hi, I need help redesigning my landing page.",
      time: "2 hours ago",
    },
    {
      id: 2,
      user: "Neha Patel",
      skill: "Basic JavaScript Tutoring",
      message: "Can you help me understand callbacks?",
      time: "1 day ago",
    },
  ];

  return (
    <DashboardLayout
      mode="earn"
      title="Requests"
      subtitle="People who want help with your skills."
    >
      {/* Requests List */}
      <div className="max-w-4xl space-y-4">
        {requests.map((req) => (
          <div
            key={req.id}
            className="
              bg-white dark:bg-slate-900
              border border-slate-200 dark:border-slate-800
              rounded-2xl
              p-5 hover:shadow-sm transition
            "
          >
            {/* Top */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100">
                  {req.user}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Requested for{" "}
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    {req.skill}
                  </span>
                </p>
              </div>

              <span className="text-xs text-slate-400">
                {req.time}
              </span>
            </div>

            {/* Message */}
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
              “{req.message}”
            </p>

            {/* Actions */}
            <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:justify-end">
              <button
                className="
                  px-5 py-2.5 rounded-xl text-sm font-medium
                  border border-slate-300 dark:border-slate-700
                  text-slate-700 dark:text-slate-300
                  hover:bg-slate-100 dark:hover:bg-slate-800
                  transition
                "
              >
                Reject
              </button>

              <button
                className="
                  px-5 py-2.5 rounded-xl text-sm font-medium
                  bg-blue-600 text-white
                  hover:bg-blue-700 transition
                "
              >
                Accept
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {requests.length === 0 && (
        <div className="mt-16 text-center text-slate-600 dark:text-slate-400">
          <p className="text-base font-medium">
            No requests yet
          </p>
          <p className="text-sm mt-2">
            When someone requests your skills, they’ll appear here.
          </p>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Requests;