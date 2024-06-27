import { Box, Dialog } from "@mui/material";
import { useCallback, useState } from "react";
import { FaPlus } from "react-icons/fa";
import ContactUpdate from "./ContactUpdate";
import propTypes from "prop-types";
import OtpInput from "../../../../globalComponents/OtpInput";

const ContactProfile = ({ showCountBadge = false, count = 1 }) => {
  const [openContactUpdate, setOpenContactUpdate] = useState(false);

  const handleOpenContactUpdate = (type = "updateContact") => {
    setOpenContactUpdate(type);
  };

  const handleCloseContactUpdate = () => {
    setOpenContactUpdate(false);
  };

  const handleSubmitOtp = useCallback((otp) => {
    console.log(otp);
  },[])

  const style = {
    position: "relative",
    border: "none",
    "&:focus-visible": {
      outline: "none !important",
    },
  };
  return (
    <div className="mb-8">
      <div className="p-5 md:p-8 bg-[#fff] shadow rounded flex w-full flex-col">
        <div className="mb-5 flex items-center justify-between md:mb-8">
          <div className="flex items-center space-x-3 rtl:space-x-reverse md:space-x-4">
            {showCountBadge ? (
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#009f7f] text-base text-[#fff] lg:text-xl">
                {count}
              </span>
            ) : null}
            <p className="text-lg capitalize text-[#1f2937] lg:text-xl">
              Contact Number
            </p>
          </div>
          <button
            className="flex items-center gap-2 text-sm font-semibold text-[#009f7f] transition-colors duration-200 hover:text-accent-hover focus:text-accent-hover focus:outline-0"
            onClick={() => handleOpenContactUpdate()}
          >
            <FaPlus />
            Update
          </button>
          {openContactUpdate && (
            <Dialog
              open={Boolean(openContactUpdate)}
              onClose={handleCloseContactUpdate}
              scroll="body"
            >
              <Box
                sx={style}
                className="w-full max-w-6xl bg-white md:rounded-xl xl:min-w-[480px]"
              >
                <div className="flex min-h-screen flex-col justify-center bg-[#fff] p-5 sm:p-8 md:min-h-0 md:rounded-xl">
                  <h1 className="mb-5 text-center text-sm font-semibold text-[#1f2937] sm:mb-6">
                    Update Contact Number
                  </h1>
                  {openContactUpdate === "verifyOtp" ? (
                    <OtpInput onSubmit={handleSubmitOtp} onCancel={handleCloseContactUpdate} />
                  ) : (
                    <ContactUpdate handleModalType={handleOpenContactUpdate} />
                  )}
                </div>
              </Box>
            </Dialog>
          )}
        </div>
        <div className="grid grid-cols-1">
          <div className="input-group-box-profile-form">
            <input
              className="input-profile-form rounded h-12 !pl-20 !pr-4"
              value="9365141641"
              type="tel"
              disabled
            />
            <img
              src="../../../src/assets/indiaflagicon.png"
              alt=""
              className="h-4 absolute pl-4"
            />
            <p className="absolute pl-12">+91</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactProfile;

ContactProfile.propTypes = {
  showCountBadge: propTypes.bool,
  count: propTypes.func,
};
