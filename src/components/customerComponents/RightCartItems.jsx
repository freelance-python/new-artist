import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import { useCallback, useState } from "react";
// import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


export default function RightCartItems() {
  const [state, setState] = useState(false);

  const toggleDrawer = useCallback((event, type) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(type);
  }, []);

  const openDrawerRightCart = useCallback(() => toggleDrawer(null, true), []);

  const closeDrawerRightCart = useCallback(() => toggleDrawer(null, false), []);

  const list = (
    <Box sx={{ width: 448 }} role="presentation">
      <div className="flex h-full flex-col">
        <div className="fixed top-0 z-20 flex w-full max-w-md items-center justify-between border-b border-border-200 border-opacity-75 bg-white p-5 px-5 md:px-6">
          <a className="inline-flex w-24 md:w-auto" href="/">
            <span className="relative flex h-[2.125rem] overflow-hidden md:w-[8.625rem] text-[#009f7f]">
              <ShoppingCartIcon />
              <p>2 Items</p>
            </span>
          </a>
          <button
            className="flex h-7 w-7 items-center justify-center transition-all duration-200 LeftDrawerColorHover"
            onClick={closeDrawerRightCart}
          >
            <svg
              className="h-2.5 w-2.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        {/* <div className="pt-20">
          <ul className="grow">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.url}
                  className="flex items-center px-5 py-3 transition duration-200 cursor-pointer LinkTextColorHover md:px-6"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </Box>
  );

  return (
    <>
      <button
        className="product-cart fixed top-1/2 z-40 -mt-12 hidden flex-col items-center justify-center rounded bg-[#009f7f] p-3 pt-3.5 text-sm font-semibold text-[#ffffff] shadow-900 transition-colors duration-200 hover:bg-[#019376] focus:outline-0 right-0 lg:flex"
        style={{ borderRadius: "8px 0px 0px 8px" }}
        onClick={openDrawerRightCart}
      >
        <span className="flex pb-0.5">
          <ShoppingCartIcon
            className="shrink-0"
            style={{ width: "14px", height: "16px" }}
          />
          <span className="flex ml-2 mr-2">2 Items</span>
        </span>
        <span className="w-full px-2 py-2 mt-3 rounded bg-[#ffffff] text-[#009f7f]">
          $180.00
        </span>
      </button>
      <SwipeableDrawer
        anchor="right"
        open={state}
        onClose={closeDrawerRightCart}
        onOpen={openDrawerRightCart}
      >
        {list}
      </SwipeableDrawer>
    </>
  );
}
