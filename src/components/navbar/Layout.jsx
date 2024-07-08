import HomeNav from "./HomeNav";
import { Outlet } from "react-router-dom";
import propTypes from "prop-types";
import FooterCustomer from "../customerComponents/footer/FooterCustomer";
import VendorNav from "./vendor/VendorNav";

const Layout = ({ type = "user" }) => {
  return (
    <>
      {type === "vendor" ? (
        <VendorNav>
          <Outlet />
        </VendorNav>
      ) : (
        <>
          <HomeNav />
          <Outlet />
        </>
      )}
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
