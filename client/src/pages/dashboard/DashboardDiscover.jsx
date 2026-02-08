import { useNavigate } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";

const DashboardDiscover = () => {
  const navigate = useNavigate();

  return (
      <DashboardLayout
        mode="discover"
        title="Discover your skills"
        subtitle="Explore strengths through quizzes and guided discovery."
      >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main action */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-800">
            Start discovering
          </h3>

          <p className="text-slate-600 mt-2">
            Answer a few simple questions and uncover skills that suit you best.
          </p>

          <button
            onClick={() => navigate("/dashboard/discover/start")}
            className="mt-6 bg-blue-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Start discovery
          </button>
        </div>

        {/* Info card */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800">
            What you’ll get
          </h3>

          <ul className="mt-4 space-y-3 text-slate-600 text-sm">
            <li>• Personalized skill suggestions</li>
            <li>• Insights into your interests</li>
            <li>• Freedom to switch to earning anytime</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardDiscover;