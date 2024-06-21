import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../containers/customer/Homepage";
import Vendor from "../containers/vendor/Vendor";
import Layout, { FooterLayout } from "../components/navbar/Layout";
import OffersHome from "../containers/customer/OffersHome";
import FlashSalesHome from "../containers/customer/FlashSalesHome";
import ContactHome from "../containers/customer/ContactHome";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* auth routes */}
        {/* <Route path="/login" element={<Loginpage />} /> */}

        {/* user routes start */}
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />

          <Route element={<FooterLayout />}>
            <Route path="/offers" element={<OffersHome />} />
            <Route path="/contact" element={<ContactHome />} />
            <Route path="/flash-sales" element={<FlashSalesHome />} />
          </Route>
        </Route>
        {/* user routes end */}

        {/* vendor routes start */}
        <Route element={<Layout type="vendor" />}>
          <Route path="/vendor" element={<Vendor />} />
        </Route>
        {/* vendor routes end */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
