import { Box, Dialog } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import AddressUpdate from "./AddressUpdate";
import propTypes from "prop-types";

const AddressDetails = ({ showCountBadge = false, count = 2 }) => {
  const [openContactUpdate, setOpenContactUpdate] = useState(false);

  const handleOpenContactUpdate = () => {
    setOpenContactUpdate(true);
  };

  const handleCloseContactUpdate = () => {
    setOpenContactUpdate(false);
  };
  const style = {
    position: "relative",
    border: "none",
    "&:focus-visible": {
      outline: "none !important",
    },
  };
  return (
    <div className="p-5 md:p-8 bg-[#fff] shadow rounded w-full">
      <div>
        <div className="mb-5 flex items-center justify-between md:mb-8">
          <div className="flex items-center space-x-3 rtl:space-x-reverse md:space-x-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse md:space-x-4">
              {showCountBadge ? (
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#009f7f] text-base text-[#fff] lg:text-xl">
                  {count}
                </span>
              ) : null}
              <p className="text-lg capitalize text-[#1f2937] lg:text-xl">
                Addresses
              </p>
            </div>
          </div>
          <button
            onClick={() => handleOpenContactUpdate()}
            className="flex items-center gap-2 text-sm font-semibold text-[#009f7f] transition-colors duration-200 hover:text-accent-hover focus:text-accent-hover focus:outline-0"
          >
            <FaPlus />
            Add
          </button>
          {openContactUpdate && (
            <Dialog
              scroll="body"
              open={Boolean(openContactUpdate)}
              onClose={handleCloseContactUpdate}
            >
              <Box
                sx={style}
                className="w-full max-w-6xl bg-white md:rounded-xl xl:min-w-[480px]"
              >
                <AddressUpdate />
              </Box>
            </Dialog>
          )}
        </div>
        {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"> */}
          <div className="group relative cursor-pointer rounded border p-4 hover:border-[#009f7f] border-transparent bg-gray-100">
            <p className="mb-3 text-sm font-semibold capitalize text-[#1f2937]">
              Address Details
            </p>
            <p className="text-sm text-sub-[#1f2937]">
              2231 Kidd Avenue, AK, Kipnuk, 99614, United States
            </p>
            <div className="absolute top-4 flex space-x-2 opacity-0 group-hover:opacity-100"></div>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default AddressDetails;

AddressDetails.propTypes = {
  showCountBadge: propTypes.bool,
  count: propTypes.func,
};
