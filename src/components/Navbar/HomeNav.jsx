import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import PagesDropdown from "../customerComponents/PagesDropdown";

function HomeNav() {
  const usePathname1 = useLocation();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full bg-white z-30 sticky top-0 ${
          scrolled ? "mis-navbar" : ""
        }`}
      >
        <div className="py-[5px] flex justify-between items-center">
          <div className="flex items-center gap-5">
            <img
              src="../../../src/assets/navlogowithtext.webp"
              width={300}
              height={100}
              alt="Logo"
              className="w-[230px] py-3"
            />
          </div>
          <div className="flex gap-[42px] items-center font-mulish text-nowrap leading-5 max-[861px]:gap-[20px] max-[793px]:hidden">
            <Link
              href="/"
              className={`navlinks ${usePathname1 === "/" ? "selected" : ""}`}
            >
              Shops
            </Link>
            <Link
              href="/offers"
              className={`navlinks ${
                usePathname1 === "/offers" ? "selected" : ""
              }`}
            >
              Offers
            </Link>
            <Link
              href="/contact"
              className={`navlinks ${
                usePathname1 === "/contact" ? "selected" : ""
              }`}
            >
              Contact
            </Link>
            <Link
              href="/pages"
              className={`navlinks group/dropdown ${
                usePathname1 === "/pages" ? "selected" : ""
              }`}
            >
              Pages
              <PagesDropdown className="group-hover/dropdown:flex " />
            </Link>
            <Link
              href="/contactus"
              className="p-3 bg-[#009f7f] rounded-[5px] font-mulish font-semibold text-sm text-[#FFFFFF] max-[793px]:hidden"
            >
              Join
            </Link>
            <Link
              href="/contactus"
              className="p-3 bg-[#009f7f] rounded-[5px] font-mulish font-semibold text-sm text-[#FFFFFF] max-[793px]:hidden"
            >
              Become a seller
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
export default HomeNav;
