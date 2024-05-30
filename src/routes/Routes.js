import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../containers/customer/Homepage";
import Vendor from "../containers/vendor/Vendor";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Homepage />} />
        <Route path="vendor" element={<Vendor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
