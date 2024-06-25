import { useCallback } from "react";
import propTypes from "prop-types";
import { IoEyeOutline } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";

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
            type="email"
            className="InputContactFormHome h-12"
          />
        </div>
        <div className="mb-5">
          <div className="mb-2 flex items-center justify-between">
            <label htmlFor="password" className="InputLabelAuthPage">
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
              type="password"
              className="InputContactFormHome h-12"
            />
            <label
              htmlFor="password"
              className="absolute top-5 -mt-2 right-2 cursor-pointer text-[#6c757d]"
            >
              <IoEyeOutline size={20} />
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
      <div className="relative flex flex-col items-center justify-center mt-8 mb-6 text-sm text-[#1f2937] sm:mt-11 sm:mb-8">
        <hr className="w-full" />
        <span className="absolute -top-2.5 bg-[#fff] px-2">Or</span>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-2">
        <button className="inline-flex items-center gap-2 justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out text-[#fff] border border-transparent px-5 py-0 h-12 bg-[#4285f4] hover:bg-[#3574de]">
          <FaGoogle />
          Login with Google
        </button>
        <button
          className="inline-flex items-center gap-2 justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out text-[#fff] border border-transparent  px-5 py-0 h-12 w-full bg-gray-500 hover:bg-gray-600 sm:h-12"
          onClick={toggleMobileAuthPage}
        >
          <FaMobileScreenButton />
          Login with Mobile number
        </button>
      </div>
      <div className="relative flex flex-col items-center justify-center mt-8 mb-6 text-sm text-[#1f2937] sm:mt-11 sm:mb-8">
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
