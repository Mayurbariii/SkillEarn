import { useNavigate } from "react-router-dom";

const Intent = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Branding Section */}
      <div className="hidden md:flex flex-col justify-center px-16 bg-neutral-900 text-white">
        <h1 className="text-4xl font-semibold leading-tight">
          SkillEarn
        </h1>
        <p className="mt-4 text-neutral-300 text-lg">
          Learn skills. Prove your ability. Earn real opportunities.
        </p>
      </div>

      {/* Right Intent Section */}
      <div className="flex items-center justify-center bg-neutral-100 px-6">
        <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-neutral-900">
            What would you like to do?
          </h2>
          <p className="text-sm text-neutral-500 mt-1 mb-6">
            Choose one to get started. You can change this anytime.
          </p>

          {/* Options */}
          <div className="space-y-4">
            <button
              onClick={() => navigate("/login")}
              className="w-full flex flex-col text-left px-4 py-3 rounded-lg border border-neutral-300 hover:border-neutral-900 bg-neutral-50 hover:bg-neutral-100 transition focus:outline-none focus:ring-2 focus:ring-neutral-900"
            >
              <span className="font-medium text-neutral-900">
                Earn from your skills
              </span>
              <span className="text-sm text-neutral-700 mt-1">
                Start with what you already know.
              </span>
            </button>
            <button
              onClick={() => navigate("/login")}
              className="w-full flex flex-col text-left px-4 py-3 rounded-lg border border-neutral-300 hover:border-neutral-900 bg-neutral-50 hover:bg-neutral-100 transition focus:outline-none focus:ring-2 focus:ring-neutral-900"
            >
              <span className="font-medium text-neutral-900">
                Discover your skills
              </span>
              <span className="text-sm text-neutral-700 mt-1">
                Explore and find what suits you best.
              </span>
            </button>
          </div>

          {/* Skip */}
          <div className="text-center mt-8">
            <button
              onClick={() => navigate("/dashboard")}
              className="w-full inline-flex items-center justify-center px-4 py-2 bg-neutral-200 text-neutral-700 rounded-md border border-neutral-300 shadow-sm hover:bg-neutral-300 hover:text-neutral-900 transition focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm font-medium"
            >
              Skip for now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intent;
