import { useCallback } from "react";
import propTypes from "prop-types";

const MobileLoginCustomer = ({ handleModalType }) => {
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
      <form className="my-4">
        <div className="input-group-mobile-modal relative flex rounded md:rounded-lg h-12 shadow-900">
          <input
            type="tel"
            className="input-number-mobile-modal"
            id="tel"
            placeholder="+91"
          />
          <button className="button-submit-mobile-modal rounded-lg px-8 font-semibold transition-colors duration-200">
            Send OTP
          </button>
        </div>
      </form>
      <div className="relative flex flex-col items-center justify-center mt-8 mb-6 text-sm text-heading sm:mt-11 sm:mb-8">
        <hr className="w-full" />
        <span className="absolute -top-2.5 bg-[#fff] px-2">Or</span>
      </div>
      <div className="text-sm text-center text-[#6c757d] sm:text-base">
        Back to&nbsp;
        <button
          className="font-semibold underline transition-colors duration-200 text-[#009f7f] hover:text-[#019376] hover:no-underline "
          onClick={toggleLoginPage}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default MobileLoginCustomer;

MobileLoginCustomer.propTypes = {
  handleModalType: propTypes.func,
};
