import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  /* ---------------- UI State ---------------- */
  const [showPassword, setShowPassword] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  /* ---------------- Form State ---------------- */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* ---------------- Validation ---------------- */
  const isPasswordValid = password.length >= 4 && password.length <= 8;

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    if (value.length <= 8) {
      setPassword(value);
    }
  };

  const handleLogin = () => {
    // TODO: Backend integration
    // - Authenticate user
    // - Fetch user profile + intent
    // - Store auth token / session

    navigate("/dashboard");
  };

  const handleGoogleLogin = () => {
    // TODO: Backend Google OAuth
    setGoogleLoading(true);

    setTimeout(() => {
      setGoogleLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 px-5 pt-16">
      {/* Header */}
      <h2 className="text-3xl font-semibold text-blue-400">
        Welcome back
      </h2>
      <p className="text-base text-slate-100 mt-2">
        Sign in to continue your journey on{" "}
        <span className="font-semibold text-blue-500">
          SkillEarn
        </span>
      </p>

      {/* Form */}
      <div className="mt-8 bg-white rounded-3xl px-5 py-8">
        {/* Google */}
        <button
          disabled={googleLoading}
          onClick={handleGoogleLogin}
          className={`
            w-full flex items-center justify-center gap-3
            border border-slate-300 rounded-xl py-3 font-medium
            transition bg-transparent text-black
            ${googleLoading ? "opacity-60 cursor-not-allowed" : "hover:bg-blue-50"}
          `}
        >
          {googleLoading ? (
            <span className="animate-pulse">Signing in…</span>
          ) : (
            <>
              <img
                src="https://th.bing.com/th/id/OIP.jYUEQ5iDArrERw6TrwY5xwHaHk?w=169&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </>
          )}
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-slate-300" />
          <span className="px-3 text-sm text-slate-400">or</span>
          <div className="flex-1 h-px bg-slate-300" />
        </div>

        {/* Email */}
        <label className="text-sm font-semibold text-slate-800">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-2 mb-1 px-4 py-3 rounded-xl bg-slate-200 outline-none text-slate-900"
        />
        {email && !email.includes("@") && (
          <p className="text-xs text-red-500 mb-3">
            Enter a valid email address
          </p>
        )}

        {/* Password */}
        <label className="text-sm font-semibold text-slate-800">
          Password
        </label>

        <div className="relative mt-2 mb-6">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            maxLength={8}
            className="w-full px-4 py-3 rounded-xl bg-slate-200 outline-none text-slate-900 pr-12"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm bg-transparent border border-slate-300 flex items-center justify-center"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "30%",
            }}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            👁️
          </button>
        </div>

        {password && password.length < 4 && (
          <p className="text-xs text-red-500 mb-3">
            Password must be at least 4 characters
          </p>
        )}

        {/* CTA */}
        <button
          onClick={handleLogin}
          disabled={!email || !email.includes("@") || !isPasswordValid}
          className="w-full bg-blue-500 text-white font-bold py-3 rounded-xl hover:bg-blue-600 transition disabled:opacity-60"
        >
          Login
        </button>

        {/* Switch */}
        <p className="text-center text-sm text-slate-700 mt-6">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="font-bold text-blue-600 underline hover:underline bg-transparent"
          >
            Create an account
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;