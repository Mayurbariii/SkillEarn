import { useNavigate } from "react-router-dom";

const Intent = () => {
  const navigate = useNavigate();

  /**
   * Handle intent selection
   * @param {"earn" | "discover"} intentType
   */
  const handleIntentSelect = (intentType) => {
    // TODO: Backend integration
    // - Save intent in backend or session
    // - POST /api/user/intent { intent: intentType }
    // - Backend may personalize dashboard later

    if (intentType === "earn") {
      navigate("/earn"); // earn flow entry
    }

    if (intentType === "discover") {
      navigate("/discover"); // discover flow entry
    }
  };

  /**
   * Skip intent selection
   */
  const handleSkip = () => {
    // TODO: Backend integration (optional)
    // - Mark user intent as null / undecided
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 px-0 pt-6">
      {/* Brand */}
      <h1 className="text-white text-xl font-semibold px-5">SkillEarn</h1>

      {/* Header */}
      <div className="mt-20 px-5">
        <h2 className="text-3xl font-semibold text-white">
          What would you like to do?
        </h2>
        <p className="text-slate-300 mt-2">
          Choose how you want to start on SkillEarn
        </p>
      </div>

      {/* Card Container */}
      <div className="mt-10 bg-white rounded-t-3xl px-0 pt-8 pb-10 min-h-[55vh] w-full">
        <div className="space-y-4 px-5">
          {/* Earn */}
          <button
            onClick={() => handleIntentSelect("earn")}
            className="w-full flex items-center gap-4 p-4 rounded-2xl border border-blue-400 bg-gradient-to-r from-blue-600 to-blue-400 active:scale-[0.98] transition"
          >
            <span className="text-xl">💰</span>
            <div className="text-left">
              <p className="font-semibold text-white">
                Earn from your skills
              </p>
              <p className="text-sm text-blue-100">
                Turn your skills into opportunities.
              </p>
            </div>
          </button>

          {/* Discover */}
          <button
            onClick={() => handleIntentSelect("discover")}
            className="w-full flex items-center gap-4 p-4 rounded-2xl border border-slate-700 bg-gradient-to-r from-slate-700 to-slate-600 active:scale-[0.98] transition"
          >
            <span className="text-xl">🔍</span>
            <div className="text-left">
              <p className="font-semibold text-white">
                Discover your skills
              </p>
              <p className="text-sm text-slate-200">
                Explore and discover your strengths.
              </p>
            </div>
          </button>
        </div>

        {/* Skip */}
        <div className="flex justify-between items-center mt-20 text-sm text-slate-500 px-5">
          <span>Not sure yet?</span>
          <button
            onClick={handleSkip}
            className="font-medium text-gray-400 bg-transparent underline"
          >
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intent;