import { useNavigate } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";

const DashboardEarn = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout
      mode="earn"
      title="Earn from your skills"
      subtitle="Share what you know and turn skills into opportunities."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main action card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-800">
            Start earning
          </h3>

          <p className="text-slate-600 mt-2">
            Post a skill you already have and get requests from people who need help.
          </p>

          <button
            onClick={() => navigate("/dashboard/earn/post-skill")}
            className="mt-6 bg-blue-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Post your first skill
          </button>
        </div>

        {/* Secondary info */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800">
            How SkillEarn works
          </h3>

          <ul className="mt-4 space-y-3 text-slate-600 text-sm">
            <li>• List your skills in a few simple steps</li>
            <li>• Receive requests from interested users</li>
            <li>• Help others and build earning opportunities</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardEarn;