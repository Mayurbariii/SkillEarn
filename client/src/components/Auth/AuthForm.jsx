import { useState } from "react";

const AuthForm = ({ buttonText, isRegister, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister && password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <p className="text-sm text-red-600 text-center">{error}</p>
      )}

      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
        <input
          type="email"
           className="w-full bg-neutral-50 border border-neutral-300 px-3 py-2 rounded-md 
             focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-neutral-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1">
  Password
</label>
        <input
          type="password"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
            value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {isRegister && (
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
  Confirm Password
</label>
          <input
            type="password"
            className="w-full bg-neutral-50 border border-neutral-300 px-3 py-2 rounded-md 
             focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-neutral-800"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
      )}

        <button
        type="submit"
        className="w-full bg-neutral-900 text-white py-2.5 rounded-md 
                    hover:bg-neutral-800 transition"
        >
        {buttonText}
        </button>
    </form>
  );
};

export default AuthForm;
