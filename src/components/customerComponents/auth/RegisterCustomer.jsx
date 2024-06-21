import { useCallback } from "react";
import propTypes from "prop-types";
import { IoEyeOutline } from "react-icons/io5";

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
          <input id="text" type="text" className="InputContactFormHome h-12" />
        </div>
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
