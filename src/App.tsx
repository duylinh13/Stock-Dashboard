import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./view/dashboard";
import Login from "./view/login"; // Import Login component
import MainLayout from "./components/MainLayout";
import NotFound from "./view/not-found";
import { AppPath } from "./constants";
import { MainLayoutProvider } from "./context/MainLayoutContext";

function App() {
  return (
    <MainLayoutProvider>
      <Routes>
        <Route path="/" element={<Navigate to={AppPath.dashboard} replace />} />
        <Route path="/login" element={<Login />} /> {/* Login Route */}
        <Route path={AppPath.dashboard} element={<MainLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayoutProvider>
  );
}

export default App;
