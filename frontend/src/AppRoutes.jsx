import RootLayout from "@/layout/RootLayout";
import Home from "@/pages/Home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
