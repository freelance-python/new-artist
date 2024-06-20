import HomeNav from "./HomeNav";
import VendorNav from "./VendorNav";
import { Outlet } from "react-router-dom";
import propTypes from "prop-types";
import FooterCustomer from "../customerComponents/footer/FooterCustomer";

const Layout = ({ type = "user" }) => {
  return (
    <>
      {type === "vendor" ? <VendorNav /> : <HomeNav />}
      <Outlet />
    </>
  );
};

export const FooterLayout = () => {
  return (
    <>
      <Outlet />
      <FooterCustomer />
    </>
  );
};

export default Layout;

Layout.propTypes = {
  type: propTypes.string,
};
