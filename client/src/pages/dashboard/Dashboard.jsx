import { Navigate, useSearchParams } from "react-router-dom";

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");

  if (mode === "earn") {
    return <Navigate to="/dashboard/earn/skills" replace />;
  }

  if (mode === "discover") {
    return <Navigate to="/dashboard/discover" replace />;
  }

  // Safety fallback
  return <Navigate to="/" replace />;
};

export default Dashboard;