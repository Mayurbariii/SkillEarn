import DashboardEarn from "./DashboardEarn";
import DashboardDiscover from "./DashboardDiscover";

const Dashboard = () => {
  const params = new URLSearchParams(window.location.search);
  const mode = params.get("mode");

  if (mode === "earn") return <DashboardEarn mode="earn" />;
  if (mode === "discover") return <DashboardDiscover mode="discover" />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <p className="text-slate-600">No dashboard mode selected</p>
    </div>
  );
};

export default Dashboard;