import { Link, useLocation } from "react-router-dom";
import PagesDropdown from "../customerComponents/PagesDropdown";
import LeftDrawerMenu from "../../containers/customer/navbarhome/LeftDrawerMenu";
import { Box } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

function HomeNav() {
  const usePathname1 = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [showSearchIcon, setShowSearchIcon] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

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
            <img
              src="../../../src/assets/navlogowithtext.webp"
              alt="Logo"
              className="relative h-[2.125rem] w-32 overflow-hidden md:w-[8.625rem]"
            />
          </div>
          <div className="flex gap-[22px] items-center">
            <div className="flex gap-[22px] items-center font-mulish text-nowrap leading-5 max-[861px]:gap-[20px] max-[1279px]:hidden">
              <Link
                to="/"
                className={`navlinks ${
                  usePathname1.pathname === "/" ? "selected" : ""
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12 7.2"
                  width="12"
                  height="7.2"
                  className="mt-1"
                >
                  <path
                    d="M6.002 5.03L10.539.265a.826.826 0 011.211 0 .94.94 0 010 1.275l-5.141 5.4a.827.827 0 01-1.183.026L.249 1.545a.937.937 0 010-1.275.826.826 0 011.211 0z"
                    className="icon"
                  ></path>
                </svg>
                <PagesDropdown className="group-hover/dropdown:flex hidden" />
              </Box>
            </div>
            {showSearchIcon && (
              <button
                data-variant="custom"
                className="justify-center shrink-0 font-semibold leading-none outline-none transition duration-300 ease-in-out px-5 py-0 hidden h-[38px] w-[38px] items-center  gap-2 rounded-full border border-border-200 bg-light !p-1 text-sm md:text-base lg:!flex"
                onClick={toggleSearchbarVisibility}
              >
                <svg viewBox="0 0 17.048 18" className="h-4 w-4">
                  <path
                    d="M380.321,383.992l3.225,3.218c.167.167.341.329.5.506a.894.894,0,1,1-1.286,1.238c-1.087-1.067-2.179-2.131-3.227-3.236a.924.924,0,0,0-1.325-.222,7.509,7.509,0,1,1-3.3-14.207,7.532,7.532,0,0,1,6,11.936C380.736,383.462,380.552,383.685,380.321,383.992Zm-5.537.521a5.707,5.707,0,1,0-5.675-5.72A5.675,5.675,0,0,0,374.784,384.513Z"
                    transform="translate(-367.297 -371.285)"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            )}

            <div className="flex gap-4 right-0">
              <Link
                to="/contactus"
                className="px-3 h-9 flex items-center bg-[#009f7f] hover:bg-[#019376] rounded-[5px] font-mulish font-semibold text-sm text-[#FFFFFF] max-[1023px]:hidden"
              >
                Join
              </Link>
              <Link
                to="/contactus"
                className="px-3 h-9 flex items-center bg-[#009f7f] hover:bg-[#019376] rounded-[5px] font-mulish font-semibold text-sm text-[#FFFFFF] max-[640px]:hidden"
              >
                Become a seller
              </Link>
            </div>
          </div>
        </div>
        {showSearchBar && (
          <div className="absolute top-0 z-20 flex h-full w-full items-center justify-center space-x-4 bg-[#fff] px-5 py-1.5 backdrop-blur ltr:left-0 rtl:right-0 rtl:space-x-reverse lg:border lg:bg-opacity-80">
            <form className="w-full lg:max-w-3xl">
              <div className="relative flex rounded md:rounded-lg h-8 md:h-10 lg:h-12">
                <label htmlFor="grocery-search-header" className="sr-only">
                  Search your products from here
                </label>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    viewBox="0 0 17.048 18"
                    className="h-4 w-4 text-gray-500"
                  >
                    <path
                      d="M380.321,383.992l3.225,3.218c.167.167.341.329.5.506a.894.894,0,1,1-1.286,1.238c-1.087-1.067-2.179-2.131-3.227-3.236a.924.924,0,0,0-1.325-.222,7.509,7.509,0,1,1-3.3-14.207,7.532,7.532,0,0,1,6,11.936C380.736,383.462,380.552,383.685,380.321,383.992Zm-5.537.521a5.707,5.707,0,1,0-5.675-5.72A5.675,5.675,0,0,0,374.784,384.513Z"
                      transform="translate(-367.297 -371.285)"
                      fill="currentColor"
                    ></path>
                  </svg>
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
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
              </svg>
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
          <span className="sr-only">Search</span>
          <svg viewBox="0 0 17.048 18" width="17.05" height="18">
            <path
              d="M380.321,383.992l3.225,3.218c.167.167.341.329.5.506a.894.894,0,1,1-1.286,1.238c-1.087-1.067-2.179-2.131-3.227-3.236a.924.924,0,0,0-1.325-.222,7.509,7.509,0,1,1-3.3-14.207,7.532,7.532,0,0,1,6,11.936C380.736,383.462,380.552,383.685,380.321,383.992Zm-5.537.521a5.707,5.707,0,1,0-5.675-5.72A5.675,5.675,0,0,0,374.784,384.513Z"
              transform="translate(-367.297 -371.285)"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <button
          className="flex h-full items-center justify-center p-2 focus:text-accent focus:outline-0"
          tabIndex="0"
        >
          <span className="sr-only">Home</span>
          <svg width="17.996" height="20.442" viewBox="0 0 17.996 20.442">
            <g transform="translate(-30.619 0.236)">
              <path
                d="M48.187,7.823,39.851.182A.7.7,0,0,0,38.9.2L31.03,7.841a.7.7,0,0,0-.211.5V19.311a.694.694,0,0,0,.694.694H37.3A.694.694,0,0,0,38,19.311V14.217h3.242v5.095a.694.694,0,0,0,.694.694h5.789a.694.694,0,0,0,.694-.694V8.335a.7.7,0,0,0-.228-.512ZM47.023,18.617h-4.4V13.522a.694.694,0,0,0-.694-.694H37.3a.694.694,0,0,0-.694.694v5.095H32.2V8.63l7.192-6.98L47.02,8.642v9.975Z"
                transform="translate(0 0)"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0.4"
              ></path>
            </g>
          </svg>
        </button>
        <button
          className="product-cart relative flex h-full items-center justify-center p-2 focus:text-accent focus:outline-0"
          tabIndex="0"
        >
          <span className="sr-only">Cart</span>
          <svg width="18" height="18" viewBox="0 0 18 18">
            <g transform="translate(-127 -122)">
              <path
                d="M4.7,3.8H17.3a.9.9,0,0,1,.9.9V17.3a.9.9,0,0,1-.9.9H4.7a.9.9,0,0,1-.9-.9V4.7A.9.9,0,0,1,4.7,3.8ZM2,4.7A2.7,2.7,0,0,1,4.7,2H17.3A2.7,2.7,0,0,1,20,4.7V17.3A2.7,2.7,0,0,1,17.3,20H4.7A2.7,2.7,0,0,1,2,17.3ZM11,11C8.515,11,6.5,8.583,6.5,5.6H8.3c0,2.309,1.5,3.6,2.7,3.6s2.7-1.291,2.7-3.6h1.8C15.5,8.583,13.485,11,11,11Z"
                transform="translate(125 120)"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </g>
          </svg>
          <span className="absolute top-0 mt-0.5 rounded-full bg-accent py-1 px-1.5 text-10px font-semibold leading-none text-light ltr:right-0 ltr:-mr-0.5 rtl:left-0 rtl:-ml-0.5">
            3
          </span>
        </button>
        <button
          className="flex h-full items-center justify-center p-2 focus:text-accent focus:outline-0"
          tabIndex="0"
        >
          <span className="sr-only">User</span>
          <svg width="16.577" height="18.6" viewBox="0 0 16.577 18.6">
            <g transform="translate(-95.7 -121.203)">
              <path
                d="M-7722.37,2933a.63.63,0,0,1-.63-.63c0-4.424,2.837-6.862,7.989-6.862s7.989,2.438,7.989,6.862a.629.629,0,0,1-.63.63Zm.647-1.251h13.428c-.246-3.31-2.5-4.986-6.713-4.986s-6.471,1.673-6.714,4.986Zm2.564-12.518a4.1,4.1,0,0,1,1.172-3,4.1,4.1,0,0,1,2.979-1.229,4.1,4.1,0,0,1,2.979,1.229,4.1,4.1,0,0,1,1.171,3,4.341,4.341,0,0,1-4.149,4.5,4.344,4.344,0,0,1-4.16-4.5Zm1.251,0a3.1,3.1,0,0,0,2.9,3.254,3.094,3.094,0,0,0,2.9-3.253,2.878,2.878,0,0,0-.813-2.109,2.88,2.88,0,0,0-2.085-.872,2.843,2.843,0,0,0-2.1.856,2.841,2.841,0,0,0-.806,2.122Z"
                transform="translate(7819 -2793.5)"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0.6"
              ></path>
            </g>
          </svg>
        </button>
      </footer>
    </>
  );
}

export default HomeNav;
