import { Outlet } from "react-router-dom";
import BottomNavbar from "../components/navigation/BottomNavbar";

const MainLayout = () => {
  // Later this can come from Auth / Context / API
  const user = {
    name: "Mayur",
    role: "provider", // "explorer" | "provider"
  };

  return (
    <div className="min-h-screen pb-16">
      {/* Page Content */}
      <Outlet />

      {/* Mobile Bottom Navigation + Sidebar */}
      <BottomNavbar user={user} />
    </div>
  );
};

export default MainLayout;