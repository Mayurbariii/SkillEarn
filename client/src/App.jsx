import { BrowserRouter, Routes, Route } from "react-router-dom";

import Intent from "./pages/intent/Intent";
import EarnEntry from "./pages/entry/EarnEntry";
import DiscoverEntry from "./pages/entry/DiscoverEntry";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intent />} />
        <Route path="/earn" element={<EarnEntry />} />
        <Route path="/discover" element={<DiscoverEntry />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;