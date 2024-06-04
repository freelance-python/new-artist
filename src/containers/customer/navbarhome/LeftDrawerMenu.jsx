import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const links = [
  { url: "/shops", label: "Shops" },
  { url: "/offers", label: "Offers" },
  { url: "/contact", label: "Contact" },
  { url: "/flash-sales", label: "Flash Sale" },
  { url: "/manufacturers", label: "Manufacturers/Publishers" },
  { url: "/authors", label: "Authors" },
  { url: "/help", label: "FAQ" },
  { url: "/terms", label: "Terms & Conditions" },
  { url: "/customer-refund-policies", label: "Customer Refund Policy" },
  { url: "/vendor-refund-policies", label: "Vendor Refund Policy" },
];

export default function LeftDrawerMenu({ topNav }) {
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

  const openDrawer = useCallback(() => toggleDrawer(null, true), []);

  const closeDrawer = useCallback(() => toggleDrawer(null, false), []);

  const list = (
    <Box sx={{ width: 448 }} role="presentation">
      <div className="flex h-full flex-col">
        <div className="fixed top-0 z-20 flex w-full max-w-md items-center justify-between border-b border-border-200 border-opacity-75 bg-white p-5 px-5 md:px-6">
          <a className="inline-flex w-24 md:w-auto" href="/">
            <span className="relative h-[2.125rem] w-32 overflow-hidden md:w-[8.625rem]">
              <img
                alt="Pickbazar"
                loading="eager"
                decoding="async"
                data-nimg="fill"
                className="object-contain"
                src="../../../src/assets/navlogowithtext.webp"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent",
                }}
              />
            </span>
          </a>
          <button
            className="flex h-7 w-7 items-center justify-center transition-all duration-200 LeftDrawerColorHover"
            onClick={closeDrawer}
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
        <div className="pt-20">
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
        </div>
      </div>
    </Box>
  );

  return (
    <>
      <button
        className={`group h-full w-6 shrink-0 items-center justify-center focus:text-accent focus:outline-0 ltr:mr-6 rtl:ml-6 ${
          topNav ? "HideTopLeftDrawerMenu" : ""
        }`}
        onClick={openDrawer}
      >
        <div className="flex w-full flex-col space-y-1.5">
          <span className="h-0.5 w-1/2 rounded bg-gray-600 transition-all group-hover:w-full" />
          <span className="h-0.5 w-full rounded bg-gray-600 transition-all group-hover:w-3/4" />
          <span className="h-0.5 w-3/4 rounded bg-gray-600 transition-all group-hover:w-full" />
        </div>
      </button>
      <SwipeableDrawer
        anchor="left"
        open={state}
        onClose={closeDrawer}
        onOpen={openDrawer}
      >
        {list}
      </SwipeableDrawer>
    </>
  );
}

LeftDrawerMenu.propTypes = {
  topNav: propTypes.bool,
};
