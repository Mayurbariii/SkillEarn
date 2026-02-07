import { useNavigate } from "react-router-dom";

/* ======================================================
   BACKEND NOTES

   INTENT CONFIRMATION:
   - Save intent in user profile or session

   NEXT STEP:
   - If not authenticated → redirect to /login
   - After login → continue selected flow
====================================================== */

const DiscoverEntry = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-slate-900 to-slate-800 overflow-x-hidden">
      {/* MAIN */}
      <div className="min-h-screen flex items-center">
        <div className="w-full flex flex-col lg:flex-row lg:items-center">
          
          {/* LEFT CONTENT (DESKTOP / TABLET ONLY) */}
          <div className="hidden lg:block lg:pl-20 lg:max-w-[600px]">
            <p className="text-slate-400 text-sm mb-2">
              You chose
            </p>
            <h2 className="text-4xl font-semibold text-white mb-4">
              Discover your skills
            </h2>

            <p className="text-slate-300 max-w-md">
              Answer a few simple questions and uncover skills that naturally fit
              your interests and thinking style.
            </p>
          </div>

          {/* RIGHT CARD (MOBILE + DESKTOP) */}
          <div className="w-full lg:ml-auto lg:pr-20 px-5 pt-16 lg:pt-0">
            {/* MOBILE HEADER (UNCHANGED) */}
            <div className="lg:hidden">
              <p className="text-slate-400 text-sm mb-2">
                You choose
              </p>
              <h2 className="text-3xl font-semibold text-white">
                / Discover your Skills
              </h2>
            </div>

            {/* CARD */}
            <div className="mt-10 bg-white rounded-t-3xl lg:rounded-3xl px-5 pt-8 pb-12 min-h-[65vh] max-w-[520px] lg:ml-auto shadow-xl">
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

        </div>
      </div>
    </div>
  );
};

export default DiscoverEntry;