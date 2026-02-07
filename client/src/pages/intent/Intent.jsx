import { useNavigate } from "react-router-dom";

/* ======================================================
   BACKEND NOTES

   INTENT SELECTION:
   - POST /api/user/intent
     body: { intent: "earn" | "discover" }

   PURPOSE:
   - Used to personalize dashboard
   - Used to route onboarding flows
====================================================== */

const Intent = () => {
  const navigate = useNavigate();

  const handleIntentSelect = (intentType) => {
    // TEMP (Frontend only)
    // Will be replaced by backend later
    localStorage.setItem("userIntent", intentType);

    if (intentType === "earn") navigate("/earn");
    if (intentType === "discover") navigate("/discover");
  };

  const handleSkip = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-slate-900 to-slate-800 overflow-x-hidden">
      {/* Brand */}
      <div className="px-6 pt-6">
        <h1 className="text-white text-xl font-semibold">SkillEarn</h1>
      </div>

      {/* MAIN */}
      <div className="min-h-[calc(100vh-80px)] flex items-center">
        {/* MOBILE STACK / DESKTOP SPLIT */}
        <div className="w-full flex flex-col lg:flex-row lg:items-center">
          
          {/* LEFT TEXT */}
          <div className="px-6 mt-20 lg:mt-0 lg:pl-20 lg:max-w-[600px]">
            <h2 className="text-3xl lg:text-4xl font-semibold text-white">
              What would you like to do?
            </h2>

            <p className="text-slate-300 mt-4">
              Choose how you want to start on SkillEarn.  
            </p>
          </div>

          {/* RIGHT FORM (DESKTOP ONLY PUSHED) */}
          <div className="mt-12 lg:mt-0 lg:ml-auto lg:pr-20 px-2 sm:px-6">
            <div
              className="
                w-full
                max-w-[520px]
                bg-white
                rounded-3xl
                p-4 sm:p-8 lg:p-10
                shadow-xl
              "
            >
              <div className="space-y-5">
                {/* Earn */}
                <button
                  onClick={() => handleIntentSelect("earn")}
                  className="
                    w-full
                    min-w-0
                    flex items-center gap-4
                    px-4 py-5
                    rounded-2xl
                    border border-blue-400
                    bg-gradient-to-r from-blue-600/70 to-blue-400/70
                    active:scale-[0.98]
                    transition
                    duration-200
                    hover:bg-gradient-to-r
                    hover:from-blue-600/90
                    hover:to-blue-400/90
                    hover:shadow-lg
                    hover:-translate-y-1
                    cursor-pointer
                    whitespace-nowrap
                  "
                  style={{ minWidth: "100%", width: "100%" }}
                >
                  <span className="text-2xl flex-shrink-0">💰</span>
                  <div className="text-left truncate flex-1">
                    <p className="font-semibold text-white text-lg truncate">
                      Earn from your skills
                    </p>
                    <p className="text-sm text-blue-100 truncate">
                      Turn your skills into opportunities.
                    </p>
                  </div>
                </button>

                {/* Discover */}
                <button
                  onClick={() => handleIntentSelect("discover")}
                  className="
                    w-full
                    min-w-0
                    flex items-center gap-4
                    px-4 py-5
                    rounded-2xl
                    border border-blue-400
                    bg-gradient-to-r from-blue-600/70 to-blue-400/70
                    active:scale-[0.98]
                    transition
                    duration-200
                    hover:bg-gradient-to-r
                    hover:from-blue-600/90
                    hover:to-blue-400/90
                    hover:shadow-lg
                    hover:-translate-y-1
                    cursor-pointer
                    whitespace-nowrap
                  "
                  style={{ minWidth: "100%", width: "100%" }}
                >
                  <span className="text-2xl flex-shrink-0">🔍</span>
                  <div className="text-left truncate flex-1">
                    <p className="font-semibold text-white text-lg truncate">
                      Discover your skills
                    </p>
                    <p className="text-sm text-blue-100 truncate">
                      Explore and discover your strengths.
                    </p>
                  </div>
                </button>
              </div>

              {/* Skip */}
              <div className="flex justify-between items-center mt-12 text-sm text-slate-500 bg-transparent">
                <span>Not sure yet?</span>
                <button
                  onClick={handleSkip}
                  className="font-medium text-gray-500 underline bg-transparent"
                >
                  Skip for now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Intent;