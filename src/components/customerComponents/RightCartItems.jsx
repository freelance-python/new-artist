import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import { useCallback, useState } from "react";
import { IoAdd, IoBagCheck } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

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
    <div className="pt-20">
      <div className="border-b border-solid border-border-200 border-opacity-75 px-4 py-4 text-sm sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex overflow-hidden flex-col-reverse items-center w-8 h-24 bg-gray-100 text-heading rounded-full">
                <button className="cursor-pointer p-2 transition-colors duration-200 hover:bg-accent-hover focus:outline-0 hover:!bg-gray-100">
                  <FiMinus />
                </button>
                <div className="flex flex-1 items-center justify-center px-3 text-sm font-semibold text-heading">
                  1
                </div>
                <button className="cursor-pointer p-2 transition-colors duration-200 hover:bg-accent-hover focus:outline-0 hover:!bg-gray-100">
                  <IoAdd />
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
          <div className="flex justify-center items-center gap-3">
            <span className="font-bold text-heading ltr:ml-auto rtl:mr-auto">
              $0.60
            </span>
            <button className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted transition-all duration-200 hover:bg-gray-100 hover:text-red-600 focus:bg-gray-100 focus:text-red-600 focus:outline-0">
              <IoMdClose />
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
                  <FiMinus />
                </button>
                <div className="flex flex-1 items-center justify-center px-3 text-sm font-semibold text-heading">
                  1
                </div>
                <button className="cursor-pointer p-2 transition-colors duration-200 hover:bg-accent-hover focus:outline-0 hover:!bg-gray-100">
                  <IoAdd />
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
          <div className="flex justify-center items-center gap-3">
            <span className="font-bold text-heading ltr:ml-auto rtl:mr-auto">
              $0.60
            </span>
            <button className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted transition-all duration-200 hover:bg-gray-100 hover:text-red-600 focus:bg-gray-100 focus:text-red-600 focus:outline-0">
              <IoMdClose />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  const emptyCartMessage = (
    <div className="pt-20">
      <div className="grow pt-16 pb-20">
        <div
          className="flex h-full flex-col items-center justify-center"
          style={{ opacity: 1 }}
        >
          <img
            src="../../../src/assets/noproductcart.png"
            alt=""
            className="h-20"
          />
          <h4 className="mt-6 text-base font-semibold">No products found</h4>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        className="product-cart fixed top-1/2 z-40 -mt-12 hidden flex-col items-center justify-center rounded bg-[#009f7f] p-3 pt-3.5 text-sm font-semibold text-[#ffffff] shadow-900 transition-colors duration-200 hover:bg-[#019376] focus:outline-0 right-0 lg:flex"
        style={{ borderRadius: "8px 0px 0px 8px" }}
        onClick={openDrawerRightCart}
      >
        <span className="flex pb-0.5">
          <IoBagCheck size={18} />
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
        <Box sx={{ width: 448 }} role="presentation">
          <div className="flex h-full flex-col">
            <div className="fixed top-0 z-20 flex w-full max-w-md items-center justify-between border-b border-border-200 border-opacity-75 bg-white p-5 px-5 md:px-6">
              <a className="inline-flex w-24 md:w-auto" href="/">
                <span className="relative flex h-[2.125rem] overflow-hidden md:w-[8.625rem] text-[#009f7f]">
                  <IoBagCheck size={18} />
                  <p>2 Items</p>
                </span>
              </a>
              <button
                className="flex h-7 w-7 items-center justify-center transition-all duration-200 LeftDrawerColorHover"
                onClick={closeDrawerRightCart}
              >
                <IoMdClose size={18} />
              </button>
            </div>
            {emptyCartMessage}
            {list}
            <div className="mt-auto">
              <footer className="fixed bottom-0 z-10 w-full max-w-md bg-[#fff] px-6 py-5">
                <button className="flex h-12 w-full justify-between rounded-full bg-[#009f7f] p-1 text-sm font-bold shadow-700 transition-colors hover:bg-[#019376] focus:bg-[#019376] focus:outline-0 md:h-14">
                  <span className="flex h-full flex-1 items-center px-5 text-[#fff]">
                    Checkout
                  </span>
                  <span className="flex h-full shrink-0 items-center rounded-full bg-[#fff] px-5 text-[#009f7f]">
                    $3.00
                  </span>
                </button>
              </footer>
            </div>
          </div>
        </Box>
      </SwipeableDrawer>
    </>
  );
}
