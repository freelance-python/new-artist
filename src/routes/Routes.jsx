import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../containers/customer/Homepage";
import Vendor from "../containers/vendor/Vendor";
import Layout from "../components/Navbar/Layout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<Homepage />} />
          <Route path="/vendor" element={<Vendor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
