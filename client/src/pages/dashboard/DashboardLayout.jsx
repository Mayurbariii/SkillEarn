import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = ({ mode, title, subtitle, children }) => {
  return (
    <div className="min-h-screen w-screen bg-slate-100 flex">
      <DashboardSidebar mode={mode} />

      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-slate-200">
          <div className="px-6 py-4">
            <h1 className="text-lg font-semibold text-slate-800 lg:hidden">
              SkillEarn
            </h1>
          </div>
        </header>

        <main className="flex-1 px-6 py-10">
          <div className="mb-10 max-w-6xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              {title}
            </h2>
            <p className="text-slate-600 mt-2 max-w-2xl">
              {subtitle}
            </p>
          </div>

          <div className="max-w-6xl">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;