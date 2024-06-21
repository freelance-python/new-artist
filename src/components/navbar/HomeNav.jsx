import { Link, useLocation } from "react-router-dom";
import PagesDropdown from "../customerComponents/PagesDropdown";
import LeftDrawerMenu from "../../containers/customer/navbarhome/LeftDrawerMenu";
import { Box, Dialog } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import MobileLoginCustomer from "../customerComponents/auth/MobileLoginCustomer";
import LoginCustomer from "../customerComponents/auth/LoginCustomer";
import RegisterCustomer from "../customerComponents/auth/RegisterCustomer";
import ForgotPassword from "../customerComponents/auth/ForgotPassword";
import { RiShoppingBag2Line } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { IoMdClose } from "react-icons/io";

function HomeNav() {
  const usePathname1 = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [showSearchIcon, setShowSearchIcon] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [open, setLoginOpen] = useState(false);
  const handleLoginOpen = (type = "login") => {
    setLoginOpen(type);
  };
  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const toggleSearchbarVisibility = useCallback(() => {
    setShowSearchBar((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);

      const searchScroll = window.scrollY > 480;
      setShowSearchIcon(searchScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const style = {
    position: "relative",
    border: "none",
    "&:focus-visible": {
      outline: "none !important",
    },
  };

  return (
    <>
      <nav
        className={`w-full bg-[#fafafa] z-30 fixed top-0 ${
          scrolled ? "mis-navbar" : ""
        }`}
      >
        <div className="py-[5px] flex w-full transform-gpu items-center justify-between bg-light px-5 transition-transform duration-300 lg:h-20 lg:px-6 2xl:px-8">
          <div className="flex items-center gap-5">
            <LeftDrawerMenu topNav={true} />
            <Link to="/home">
              <img
                src="../../../src/assets/navlogowithtext.webp"
                alt="Logo"
                className="relative h-[2.125rem] w-32 overflow-hidden md:w-[8.625rem]"
              />
            </Link>
          </div>
          <div className="flex gap-[22px] items-center">
            <div className="flex gap-[22px] items-center font-mulish text-nowrap leading-5 max-[861px]:gap-[20px] max-[1279px]:hidden">
              <Link
                to="/shops"
                className={`navlinks ${
                  usePathname1.pathname === "/shops" ? "selected" : ""
                }`}
              >
                Shops
              </Link>
              <Link
                to="/offers"
                className={`navlinks ${
                  usePathname1.pathname === "/offers" ? "selected" : ""
                }`}
              >
                Offers
              </Link>
              <Link
                to="/contact"
                className={`navlinks ${
                  usePathname1.pathname === "/contact" ? "selected" : ""
                }`}
              >
                Contact
              </Link>
              <Box
                className={`navlinks group/dropdown flex items-center gap-2 ${
                  usePathname1.pathname === "/pages" ? "selected" : ""
                }`}
              >
                <span className="text-brand-dark relative inline-flex items-center py-2 font-normal rtl:left-0">
                  Pages
                </span>
                <FaChevronDown />
                <PagesDropdown className="group-hover/dropdown:flex hidden" />
              </Box>
            </div>
            {showSearchIcon && (
              <button
                data-variant="custom"
                className="justify-center shrink-0 font-semibold leading-none outline-none transition duration-300 ease-in-out px-5 py-0 hidden h-[38px] w-[38px] items-center  gap-2 rounded-full border border-border-200 bg-light !p-1 text-sm md:text-base lg:!flex"
                onClick={toggleSearchbarVisibility}
              >
                <GoSearch />
              </button>
            )}

            <div className="flex gap-4 right-0">
              <button
                onClick={handleLoginOpen}
                className="px-3 h-9 flex items-center bg-[#009f7f] hover:bg-[#019376] rounded-[5px] font-mulish font-semibold text-sm text-[#FFFFFF] max-[1023px]:hidden"
              >
                Join
              </button>
              <Link
                to="/contactus"
                className="px-3 h-9 flex items-center bg-[#009f7f] hover:bg-[#019376] rounded-[5px] font-mulish font-semibold text-sm text-[#FFFFFF] max-[640px]:hidden"
              >
                Become a seller
              </Link>
            </div>
          </div>
        </div>
        {open && (
          <Dialog
            id="login-page-modal"
            open={open}
            scroll="body"
            onClose={handleLoginClose}
            PaperProps={{ sx: { maxWidth: "fit-content" } }}
          >
            <Box
              sx={style}
              className="w-full max-w-6xl bg-white md:rounded-xl xl:min-w-[480px]"
            >
              {open === "mobile" ? (
                <MobileLoginCustomer handleModalType={handleLoginOpen} />
              ) : open === "register" ? (
                <RegisterCustomer handleModalType={handleLoginOpen} />
              ) : open === "forgot-password" ? (
                <ForgotPassword handleModalType={handleLoginOpen} />
              ) : (
                <LoginCustomer handleModalType={handleLoginOpen} />
              )}
            </Box>
          </Dialog>
        )}
        {showSearchBar && (
          <div className="absolute top-0 z-20 flex h-full w-full items-center justify-center space-x-4 bg-[#fff] px-5 py-1.5 backdrop-blur ltr:left-0 rtl:right-0 rtl:space-x-reverse lg:border lg:bg-opacity-80">
            <form className="w-full lg:max-w-3xl">
              <div className="relative flex rounded md:rounded-lg h-8 md:h-10 lg:h-12">
                <label htmlFor="grocery-search-header" className="sr-only">
                  Search your products from here
                </label>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <GoSearch />
                </div>
                <input
                  id="grocery-search-header"
                  type="text"
                  autoComplete="off"
                  className="search item-center flex h-full w-full appearance-none overflow-hidden truncate rounded-lg text-sm text-heading placeholder-gray-500 transition duration-300 ease-in-out focus:outline-0 lg:border-green-400 search-minimal bg-gray-100 pl-10 pr-4 md:pl-14 md:pr-14 border border-transparent focus:bg-[#fff]"
                  name="search"
                  placeholder="Search your products from here"
                />
                <button
                  type="submit"
                  className="absolute flex h-full w-10 items-center justify-center text-body transition-colors duration-200 hover:text-accent-hover focus:text-accent-hover focus:outline-0 left-0 md:w-14"
                ></button>
              </div>
            </form>
            <button
              data-variant="custom"
              onClick={toggleSearchbarVisibility}
              className="items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out px-5 py-0 h-12 hidden border border-green-400 bg-gray-100 text-[#009f7f] lg:inline-flex"
            >
              <IoMdClose />
            </button>
          </div>
        )}
      </nav>

      <footer className="bg-[#fafafa] fixed bottom-0 z-10 flex h-12 w-full justify-between py-1.5 px-2 shadow-400 ltr:left-0 rtl:right-0 md:h-14 lg:hidden">
        <LeftDrawerMenu />
        <button
          onClick={toggleSearchbarVisibility}
          className="flex h-full items-center justify-center p-2 focus:text-accent focus:outline-0"
          tabIndex="0"
        >
          <IoSearch size={20} />
        </button>
        <button
          className="flex h-full items-center justify-center p-2 focus:text-accent focus:outline-0"
          tabIndex="0"
        >
          <IoHomeOutline size={20} />
        </button>
        <button
          className="product-cart relative flex h-full items-center justify-center p-2 focus:text-accent focus:outline-0"
          tabIndex="0"
        >
          <RiShoppingBag2Line size={20} />
        </button>
        <button
          className="flex h-full items-center justify-center p-2 focus:text-accent focus:outline-0"
          tabIndex="0"
          onClick={handleLoginOpen}
        >
          <FaRegUser size={20} />
        </button>
      </footer>
    </>
  );
}

export default HomeNav;
