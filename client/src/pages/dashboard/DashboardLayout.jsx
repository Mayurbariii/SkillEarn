import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = ({ title, subtitle, children }) => {
  return (
      <div className="
        min-h-screen w-full flex
        bg-slate-100 dark:bg-slate-900
        text-slate-900 dark:text-slate-100
        transition-colors duration-300
      ">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header
          className="
            bg-white dark:bg-slate-900
            border-b border-slate-200 dark:border-slate-800
          "
        >
          <div className="px-6 py-4">
            <h1 className="text-xl font-semibold">
              {title}
            </h1>

            {subtitle && (
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                {subtitle}
              </p>
            )}
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 px-6 py-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;