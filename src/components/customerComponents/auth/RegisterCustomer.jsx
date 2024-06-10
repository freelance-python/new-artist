import { useCallback } from "react";
import propTypes from "prop-types";

const RegisterCustomer = ({ handleModalType }) => {
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
        By signing up, you agree to our{" "}
        <button className="font-semibold underline transition-colors duration-200 text-[#009f7f] hover:text-[#019376] hover:no-underline ">
          terms
        </button>{" "}
        &amp;{" "}
        <button className="font-semibold underline transition-colors duration-200 text-[#009f7f] hover:text-[#019376] hover:no-underline ">
          policy
        </button>
      </p>
      <form>
        <div className="mb-5">
          <label htmlFor="text" className="InputLabelAuthPage">
            Name
          </label>
          <input
            id="text"
            name="text"
            type="text"
            className="flex w-full items-center px-4 text-sm text-heading transition duration-300 ease-in-out border border-border-base rounded h-12"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
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
            Register
          </button>
        </div>
      </form>
      <div className="relative flex flex-col items-center justify-center mt-8 mb-6 text-sm text-heading sm:mt-11 sm:mb-8">
        <hr className="w-full" />
        <span className="absolute -top-2.5 bg-[#fff] px-2">Or</span>
      </div>
      <div className="text-sm text-center text-[#6c757d] sm:text-base">
        Already have an account?&nbsp;
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

export default RegisterCustomer;

RegisterCustomer.propTypes = {
  handleModalType: propTypes.func,
};
