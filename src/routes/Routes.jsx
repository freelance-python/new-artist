import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../containers/customer/Homepage";
import Vendor from "../containers/vendor/Vendor";
import Layout from "../components/Navbar/Layout";
import LeftDrawerMenu from "../containers/customer/navbarhome/LeftDrawerMenu"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/sfg" element={<LeftDrawerMenu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
