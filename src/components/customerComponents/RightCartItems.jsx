import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import { useCallback, useState } from "react";
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

  const openDrawerRightCart = useCallback(
    () => toggleDrawer(null, true),
    [toggleDrawer]
  );

  const closeDrawerRightCart = useCallback(
    () => toggleDrawer(null, false),
    [toggleDrawer]
  );

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
        <div className="pt-20">
          <div className="border-b border-solid border-border-200 border-opacity-75 px-4 py-4 text-sm sm:px-6">
            <div className="flex items-center justify-between">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex overflow-hidden flex-col-reverse items-center w-8 h-24 bg-gray-100 text-heading rounded-full">
                    <button className="cursor-pointer p-2 transition-colors duration-200 hover:bg-accent-hover focus:outline-0 hover:!bg-gray-100">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-3 w-3 stroke-2.5"
                      >
                        <path d="M20 12H4"></path>
                      </svg>
                    </button>
                    <div className="flex flex-1 items-center justify-center px-3 text-sm font-semibold text-heading">
                      1
                    </div>
                    <button className="cursor-pointer p-2 transition-colors duration-200 hover:bg-accent-hover focus:outline-0 hover:!bg-gray-100">
                      <span className="sr-only">plus</span>
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="md:w-4.5 h-3.5 w-3.5 stroke-2.5 md:h-4.5"
                      >
                        <path d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="relative mx-4 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden bg-gray-100 sm:h-16 sm:w-16">
                  <img
                    alt="Apples"
                    src="https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1/conversions/Apples-thumbnail.jpg"
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-heading">Apples </h3>
                  <p className="my-2.5 font-semibold text-accent">$1.60</p>
                  <span className="text-xs text-body">1 X 1lb</span>
                </div>
              </div>
              <div className="flex justify-center">
                <span className="font-bold text-heading ltr:ml-auto rtl:mr-auto">
                  $0.60
                </span>
                <button className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted transition-all duration-200 hover:bg-gray-100 hover:text-red-600 focus:bg-gray-100 focus:text-red-600 focus:outline-0">
                  <svg
                    className="h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="border-b border-solid border-border-200 border-opacity-75 px-4 py-4 text-sm sm:px-6">
            <div className="flex items-center justify-between">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex overflow-hidden flex-col-reverse items-center w-8 h-24 bg-gray-100 text-heading rounded-full">
                    <button className="cursor-pointer p-2 transition-colors duration-200 hover:bg-accent-hover focus:outline-0 hover:!bg-gray-100">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-3 w-3 stroke-2.5"
                      >
                        <path d="M20 12H4"></path>
                      </svg>
                    </button>
                    <div className="flex flex-1 items-center justify-center px-3 text-sm font-semibold text-heading">
                      1
                    </div>
                    <button className="cursor-pointer p-2 transition-colors duration-200 hover:bg-accent-hover focus:outline-0 hover:!bg-gray-100">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="md:w-4.5 h-3.5 w-3.5 stroke-2.5 md:h-4.5"
                      >
                        <path d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="relative mx-4 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden bg-gray-100 sm:h-16 sm:w-16">
                  <img
                    alt="Baby Spinach"
                    src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2%2FBabySpinach.jpg&w=1920&q=75"
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-heading">Baby Spinach</h3>
                  <p className="my-2.5 font-semibold text-accent">$0.60</p>
                  <span className="text-xs text-body">1 X 2Pfund</span>
                </div>
              </div>
              <div className="flex justify-center">
                <span className="font-bold text-heading ltr:ml-auto rtl:mr-auto">
                  $0.60
                </span>
                <button className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted transition-all duration-200 hover:bg-gray-100 hover:text-red-600 focus:bg-gray-100 focus:text-red-600 focus:outline-0">
                  <svg
                    className="h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
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
