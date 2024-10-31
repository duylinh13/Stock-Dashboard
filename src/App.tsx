import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./view/dashboard";
import MainLayout from "./components/MainLayout";
import { AppPath } from "./constants";
import NotFound from "./view/not-found";
import { MainLayoutProvider } from "./context/MainLayoutContext"; // Ensure you import this

function App() {
  return (
    <MainLayoutProvider>
      <Routes>
        <Route path="/" element={<Navigate to={AppPath.dashboard} replace />} />{" "}
        {/* Redirect to dashboard */}
        <Route path={AppPath.dashboard} element={<MainLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayoutProvider>
  );
}

export default App; // Ensure this line is present
