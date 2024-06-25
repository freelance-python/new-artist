import { IoEyeOutline } from "react-icons/io5";

const ChangePasswordProfileSection = () => {
  return (
    <div className="p-5 md:p-8 bg-[#fff] shadow rounded w-full">
      <h1 className="mb-5 text-lg font-semibold text-[#1f2937] sm:mb-8 sm:text-xl">
        Change Password
      </h1>
      <form noValidate className="flex flex-col">
        <div className="mb-5">
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="oldPassword"
              className="text-sm font-semibold text-[#6b7280]"
            >
              Old Password
            </label>
          </div>
          <div className="relative">
            <input
              id="oldPassword"
              type="password"
              className="InputContactFormHome h-12"
            />
            <label
              htmlFor="oldPassword"
              className="absolute top-5 -mt-2 right-4 cursor-pointer text-[#6b7280]"
            >
              <IoEyeOutline size={20} />
            </label>
          </div>
        </div>
        <div className="mb-5">
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="newPassword"
              className="text-sm font-semibold text-[#6b7280]"
            >
              New Password
            </label>
          </div>
          <div className="relative">
            <input
              id="newPassword"
              type="password"
              className="InputContactFormHome h-12"
            />
            <label
              htmlFor="newPassword"
              className="absolute top-5 -mt-2 right-4 cursor-pointer text-[#6b7280]"
            >
              <IoEyeOutline size={20} />
            </label>
          </div>
        </div>
        <div className="mb-5">
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="passwordConfirmation"
              className="text-sm font-semibold text-[#6b7280]"
            >
              Confirm Password
            </label>
          </div>
          <div className="relative">
            <input
              id="passwordConfirmation"
              type="password"
              className="InputContactFormHome h-12"
            />
            <label
              htmlFor="passwordConfirmation"
              className="absolute top-5 -mt-2 right-4 cursor-pointer text-[#6b7280]"
            >
              <IoEyeOutline size={20} />
            </label>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-0 focus:shadow focus:ring-1 focus:ring-accent-700 bg-[#009f7f] text-[#fff] border border-transparent hover:bg-accent-hover px-5 py-0 h-12 ltr:ml-auto rtl:mr-auto">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePasswordProfileSection;
