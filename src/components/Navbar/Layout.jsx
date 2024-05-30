import HomeNav from "./HomeNav";
import VendorNav from "./VendorNav";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const splitPath = location?.pathname.split("/");
  const current_page_1 = splitPath[1];

  return (
    <>
      {current_page_1 == "home" ? <HomeNav /> : <VendorNav />}
      <Outlet />
    </>
  );
};

export default Layout;
