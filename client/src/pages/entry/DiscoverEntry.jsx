import { useNavigate } from "react-router-dom";

const DiscoverEntry = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // TODO (Backend):
    // Save user intent = "discover"
    // Redirect to quiz flow after login
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 px-5 pt-16">
      {/* Header */}
      <p className="text-slate-400 text-sm mb-2">
        You choose
      </p>
      <h2 className="text-3xl font-semibold text-white">
        / Discover your Skills
      </h2>

      {/* Card */}
      <div className="mt-10 bg-white rounded-t-3xl px-5 pt-8 pb-12 min-h-[65vh]">
        {/* Description */}
        <p className="text-slate-600 mb-6">
          Answer a few simple questions and we’ll help you uncover skills that fit you
        </p>

        {/* Benefit Pills */}
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 rounded-2xl border border-blue-200 bg-blue-50">
            <span className="text-xl">🧠</span>
            <p className="text-slate-700">
              Take short quizzes designed to understand your interests
            </p>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl border border-blue-200 bg-blue-50">
            <span className="text-xl">🧭</span>
            <p className="text-slate-700">
              Get guided suggestions based on how you think and learn
            </p>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl border border-blue-200 bg-blue-50">
            <span className="text-xl">🚀</span>
            <p className="text-slate-700">
              No pressure — explore before deciding how you want to earn
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button
            onClick={handleContinue}
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-xl hover:bg-blue-600 transition"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverEntry;