import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { ToastContainer } from "react-toastify";
import RegistrationPage from "./pages/registration/registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
      <SpeedInsights />
      <ToastContainer position="bottom-right"/>
    </BrowserRouter>
  );
}

export default App;
