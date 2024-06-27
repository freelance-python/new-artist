import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import OtpInput from "../../globalComponents/OtpInput";

const MobileLoginCustomer = ({ handleModalType }) => {
  const [openVerifyOtp, setOpenVerifyOtp] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");

  const handleOpenVerifyOtp = useCallback(
    (e) => {
      e.preventDefault();
      if (mobileNumber) {
        setOpenVerifyOtp(true);
      } else {
        alert("Please enter a mobile number");
      }
    },
    [mobileNumber]
  );

  const handleCloseVerifyOtp = useCallback(() => {
    setOpenVerifyOtp(false);
  }, []);

  const handleSubmitOtp = useCallback((otp) => {
    console.log(otp);
  }, []);

  const toggleLoginPage = useCallback(() => {
    handleModalType("login");
  }, [handleModalType]);

  return (
    <div className="flex h-full min-h-screen w-screen flex-col justify-center bg-light py-6 px-5 sm:p-8 md:h-auto md:min-h-0 md:max-w-[480px] md:rounded-xl">
      <div className="flex justify-center">
        <a className="inline-flex" href="/">
          <span className="relative h-[2.125rem] w-32 overflow-hidden md:w-[8.625rem]">
            <img
              alt="Pickbazar"
              src="https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/2295/Logo-new.png"
              className="object-contain"
            />
          </span>
        </a>
      </div>
      <p className="mt-4 mb-8 text-sm text-center text-[#6c757d] sm:mt-5 sm:mb-10 md:text-base">
        Login with your mobile number. We&apos;ll send you a code to the given
        mobile number to login into your account
      </p>
      {openVerifyOtp ? (
        <OtpInput onSubmit={handleSubmitOtp} onCancel={handleCloseVerifyOtp} />
      ) : (
        <form className="my-4" onSubmit={handleOpenVerifyOtp}>
          <div className="flex w-full items-center md:min-w-[360px]">
            <div className="input-group-box-profile-form">
              <input
                className="input-profile-form h-12 !pl-20 !pr-4"
                placeholder="9365141641"
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
              <img
                src="../../../src/assets/indiaflagicon.png"
                alt=""
                className="h-4 absolute pl-4"
              />
              <p className="absolute pl-12">+91</p>
            </div>
            <button
              type="submit"
              className="button-submit-profile-form w-1/3 flex justify-center items-center h-12"
            >
              Send OTP
            </button>
          </div>
        </form>
      )}
      <div className="relative flex flex-col items-center justify-center mt-8 mb-6 text-sm text-[#1f2937] sm:mt-11 sm:mb-8">
        <hr className="w-full" />
        <span className="absolute -top-2.5 bg-[#fff] px-2">Or</span>
      </div>
      <div className="text-sm text-center text-[#6c757d] sm:text-base">
        Back to&nbsp;
        <button
          className="font-semibold underline transition-colors duration-200 text-[#009f7f] hover:text-[#019376] hover:no-underline"
          onClick={toggleLoginPage}
        >
          Login
        </button>
      </div>
    </div>
  );
};

MobileLoginCustomer.propTypes = {
  handleModalType: PropTypes.func.isRequired,
};

export default MobileLoginCustomer;
