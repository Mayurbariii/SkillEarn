import { useLocation } from "react-router-dom";

/**
 * useUserIntent
 *
 * Source priority:
 * 1. URL query (?mode=earn | ?mode=discover)
 * 2. localStorage ("userIntent")
 *
 * Returns:
 * - "earn"
 * - "discover"
 * - null
 */
const useUserIntent = () => {
  const location = useLocation();

  // 1️⃣ Read from URL
  const searchParams = new URLSearchParams(location.search);
  const modeFromUrl = searchParams.get("mode");

  if (modeFromUrl === "earn" || modeFromUrl === "discover") {
    return modeFromUrl;
  }

  // 2️⃣ Fallback to localStorage
  const storedIntent = localStorage.getItem("userIntent");

  if (storedIntent === "earn" || storedIntent === "discover") {
    return storedIntent;
  }

  // 3️⃣ Nothing found
  return null;
};

export default useUserIntent;