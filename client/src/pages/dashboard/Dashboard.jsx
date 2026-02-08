import DashboardEarn from "./DashboardEarn";
import DashboardDiscover from "./DashboardDiscover";

/**
 * Dashboard
 *
 * Main dashboard controller.
 * Decides which dashboard to show based on intent.
 */
const Dashboard = () => {
  const params = new URLSearchParams(window.location.search);
  const mode = params.get("mode");

  // Earn flow
  if (mode === "earn") {
    return <DashboardEarn />;
  }

  // Discover flow
  if (mode === "discover") {
    return <DashboardDiscover />;
  }

  // Fallback (no mode)
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <p className="text-slate-600">
        No dashboard mode selected
      </p>
    </div>
  );
};

export default Dashboard;