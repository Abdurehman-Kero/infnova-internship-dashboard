import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../pages/Login/LoginPage";

import DashboardPage from "../pages/Dashboard/DashboardPage";

import ApplicantsPage from "../pages/Applicants/ApplicantsPage";

import DashboardLayout from "../layouts/DashboardLayout";

import ProtectedRoute from "./components/ProtectedRoute";
import ApplicantDetailsPage from "../pages/ApplicantDetails/ApplicantDetailsPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}

        <Route
          path="/login"

          element={<LoginPage />}
        />

        {/* Protected Application Routes */}

        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            {/* Dashboard Home */}
            <Route
              path="/applicants/:id"

              element={<ApplicantDetailsPage />}
            />
            <Route
              path="/dashboard"

              element={<DashboardPage />}
            />

            {/* Applicants */}

            <Route
              path="/applicants"

              element={<ApplicantsPage />}
            />
          </Route>
        </Route>

        {/* Redirect Unknown Routes */}

        <Route
          path="*"

          element={
            <Navigate
              to="/dashboard"

              replace
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
