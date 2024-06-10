import { useCallback } from "react";
import propTypes from "prop-types";

const ForgotPassword = ({ handleModalType }) => {
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
      <form>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="InputLabelAuthPage"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full px-4 text-sm text-heading transition duration-300 ease-in-out border border-border-base rounded h-12"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <div className="mt-8">
          <button
            type="submit"
            className="inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out text-[#fff] bg-[#009f7f] hover:bg-[#019376] px-5 py-0 h-12 w-full sm:h-12"
          >
            Submit Email
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="20"
              className="w-5"
            >
              <path
                d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"
                fill="currentColor"
                stroke="currentColor"
              ></path>
            </svg>
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

export default ForgotPassword;

ForgotPassword.propTypes = {
  handleModalType: propTypes.func,
};
