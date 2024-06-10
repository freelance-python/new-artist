import { useCallback } from "react";
import propTypes from "prop-types";

const LoginCustomer = ({ handleModalType }) => {
  const toggleRegisterPage = useCallback(() => {
    handleModalType("register");
  }, [handleModalType]);

  const toggleMobileAuthPage = useCallback(() => {
    handleModalType("mobile");
  }, [handleModalType]);

  const toggleForgotPasswordAuthPage = useCallback(() => {
    handleModalType("forgot-password");
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
        Login with your email &amp; password
      </p>
      <form>
        <div className="mb-5">
          <label htmlFor="email" className="InputLabelAuthPage">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="flex w-full items-center px-4 text-sm text-heading transition duration-300 ease-in-out border border-border-base rounded h-12"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <div className="mb-5">
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-[#6c757d]"
            >
              Password
            </label>
            <button
              type="button"
              className="text-xs text-[#009f7f] transition-colors duration-200 hover:text-[#019376]"
              onClick={toggleForgotPasswordAuthPage}
            >
              Forgot password?
            </button>
          </div>
          <div className="relative">
            <input
              id="password"
              name="password"
              type="password"
              className="w-full pl-3 rounded py-3 text-sm text-heading transition duration-300 ease-in-out border border-border-base"
              autoComplete="off"
              spellCheck="false"
            />
            <label
              htmlFor="password"
              className="absolute top-5 -mt-2 right-2 cursor-pointer text-[#6c757d]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </label>
          </div>
        </div>
        <div className="mt-8">
          <button
            type="submit"
            className="inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out text-[#fff] bg-[#009f7f] hover:bg-[#019376] px-5 py-0 h-12 w-full sm:h-12"
          >
            Login
          </button>
        </div>
      </form>
      <div className="relative flex flex-col items-center justify-center mt-8 mb-6 text-sm text-heading sm:mt-11 sm:mb-8">
        <hr className="w-full" />
        <span className="absolute -top-2.5 bg-[#fff] px-2">Or</span>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-2">
        <button className="inline-flex items-center gap-2 justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out text-[#fff] border border-transparent px-5 py-0 h-12 bg-[#4285f4] hover:bg-[#3574de]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19.986"
            height="20.39"
            viewBox="0 0 19.986 20.39"
            className="w-4 h-4"
          >
            <path
              d="M10.195 20.39c5.883 0 9.791-4.13 9.791-9.958a8.711 8.711 0 00-.166-1.7H10.2v3.5h5.787a5.522 5.522 0 01-5.787 4.402 6.441 6.441 0 010-12.88 5.727 5.727 0 014.062 1.571l2.764-2.655A9.749 9.749 0 0010.195 0a10.195 10.195 0 000 20.39z"
              fill="currentColor"
            ></path>
          </svg>
          Login with Google
        </button>
        <button
          className="inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out text-[#fff] border border-transparent  px-5 py-0 h-12 w-full bg-gray-500 hover:bg-gray-600 sm:h-12"
          onClick={toggleMobileAuthPage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 27.442 27.442"
            className="h-5 text-light ltr:mr-2 rtl:ml-2"
            fill="currentColor"
          >
            <path d="M19.494 0H7.948a1.997 1.997 0 00-1.997 1.999v23.446c0 1.102.892 1.997 1.997 1.997h11.546a1.998 1.998 0 001.997-1.997V1.999A1.999 1.999 0 0019.494 0zm-8.622 1.214h5.7c.144 0 .261.215.261.481s-.117.482-.261.482h-5.7c-.145 0-.26-.216-.26-.482s.115-.481.26-.481zm2.85 24.255a1.275 1.275 0 110-2.55 1.275 1.275 0 010 2.55zm6.273-4.369H7.448V3.373h12.547V21.1z"></path>
          </svg>
          Login with Mobile number
        </button>
      </div>
      <div className="relative flex flex-col items-center justify-center mt-8 mb-6 text-sm text-heading sm:mt-11 sm:mb-8">
        <hr className="w-full" />
      </div>
      <div className="text-sm text-center text-[#6c757d] sm:text-base">
        Don&apos;t have any account?{" "}
        <button
          className="font-semibold underline transition-colors duration-200 text-[#009f7f] hover:text-[#019376] hover:no-underline "
          onClick={toggleRegisterPage}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default LoginCustomer;

LoginCustomer.propTypes = {
  handleModalType: propTypes.func,
};
