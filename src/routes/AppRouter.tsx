import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../pages/Login/LoginPage";

function Dashboard() {
  return <h1 className="p-10 text-3xl font-bold">Dashboard Coming Soon</h1>;
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
