import DashboardSidebar from "./DashboardSidebar";
import BottomNavbar from "../../components/layout/BottomNavbar";

const DashboardLayout = ({
  title,
  subtitle,
  children,
  hideMobileNav = false,
}) => {
  return (
    <div
      className="
        min-h-screen w-full flex
        bg-slate-100 dark:bg-slate-900
        text-slate-900 dark:text-slate-100
        transition-colors duration-500 ease-in-out
      "
    >
      {/* Desktop Sidebar */}
      <div className="hidden md:block lg:ml-[72px] xl:ml-64">
        <DashboardSidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col w-full">

        {/* Header (Hide automatically if no title & subtitle) */}
        {(title || subtitle) && (
        <header
    className="
      hidden md:block
      bg-white dark:bg-slate-900
      border-b border-slate-200 dark:border-slate-800
    "
  >
    <div className="px-6 py-4">
      {title && (
        <h1 className="text-xl font-semibold">
          {title}
        </h1>
      )}

      {subtitle && (
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          {subtitle}
        </p>
      )}
    </div>
  </header>
)}

        {/* Page content */}
        <main
          className={`
            flex-1 px-6 py-8
            ${hideMobileNav ? "" : "pb-28 md:pb-8"}
          `}
        >
          {children}
        </main>
      </div>

      {/* Mobile Bottom Navbar */}
      {!hideMobileNav && (
        <div className="md:hidden">
          <BottomNavbar />
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;