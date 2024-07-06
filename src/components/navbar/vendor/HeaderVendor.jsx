import {
  PiArrowFatLinesLeftThin,
  PiArrowFatLinesRightThin,
} from "react-icons/pi";
import propTypes from "prop-types";

const HeaderVendor = ({ toggleCollapsed }) => {
  return (
    <div className="relative flex w-full flex-1 items-center">
      <div className="flex items-center">
        <button
          className="group flex h-5 w-5 shrink-0 cursor-pointer flex-col justify-center space-y-1 me-4 focus:text-accent focus:outline-none lg:hidden"
          tabIndex="0"
        >
          <span className="h-0.5 rounded-full bg-gray-600 transition-[width] group-hover:bg-accent w-2/4"></span>
          <span className="h-0.5 w-full rounded-full bg-gray-600 group-hover:bg-accent"></span>
          <span className="h-0.5 w-3/4 rounded-full bg-gray-600 transition-[width] group-hover:bg-accent"></span>
        </button>
        <button type="text" onClick={toggleCollapsed}>
          {toggleCollapsed ? (
            <PiArrowFatLinesRightThin size={20} />
          ) : (
            <PiArrowFatLinesLeftThin size={20} />
          )}
        </button>
      </div>
      <div className="relative ml-auto mr-1.5 flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-gray-50 py-4 text-gray-600 hover:border-transparent hover:border-gray-200 hover:bg-white hover:text-accent sm:mr-6 lg:hidden xl:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <div className="relative hidden w-full max-w-[710px] py-4 me-6 lg:block 2xl:me-auto">
        <div className="fixed inset-0 hidden"></div>
        <div className="relative w-full max-w-lg rounded-3xl">
          <input
            type="text"
            className="block w-full rounded-3xl border border-solid border-border-200 bg-gray-50 py-2 text-sm text-heading transition-[border] placeholder:text-gray-400 focus:border-accent focus:bg-white focus:outline-none focus:ring-0 ltr:pl-12 rtl:pr-12 sm:text-sm sm:leading-6"
            placeholder="Search your route..."
            value=""
          />
        </div>
      </div>
      <div className="flex shrink-0 grow-0 basis-auto items-center">
        <div className="hidden border-gray-200/80 px-6 py-5 border-e 2xl:block">
          <a
            className="inline-flex items-center justify-center flex-shrink-0 font-medium leading-none rounded-full outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow text-white bg-accent border border-solid border-accent hover:bg-accent-hover hover:text-white hover:border-transparent py-0 text-sm h-10 px-3.5"
            href="/shops/create"
          >
            Create Shop
          </a>
        </div>
        <div className="hidden px-6 py-5 2xl:block">
          <a
            target="_blank"
            className="inline-flex h-9 flex-shrink-0 items-center justify-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-0 text-sm font-medium leading-none text-accent outline-none transition duration-300 ease-in-out hover:border-transparent hover:bg-accent-hover hover:text-white focus:shadow focus:outline-none"
            rel="noreferrer"
            href="https://pickbazar-react-rest.vercel.app/"
          >
            Visit Site
          </a>
        </div>
      </div>
      <div className="relative inline-block shrink-0 grow-0 basis-auto py-2 text-left ps-1.5 sm:border-solid sm:border-gray-200 sm:py-3 sm:ps-6 sm:border-s lg:py-4 xl:py-2">
        <button
          className="flex max-w-[150px] items-center gap-2 focus:outline-none lg:py-0.5 xl:py-2.5"
          id="headlessui-menu-button-:r0:"
          type="button"
          aria-haspopup="menu"
          aria-expanded="false"
        >
          <div
            className="inline-flex items-center justify-center  border text-accent border-border-100 bg-accent/10 overflow-hidden relative rounded-full shrink-0 grow-0 basis-auto drop-shadow"
            style={{ width: "40px", height: "40px" }}
          >
            <img
              alt="avatar"
              src="https://pickbazar-react-admin-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2449%2Fconversions%2Fman-thumbnail.jpg&amp;w=3840&amp;q=75"
            />
          </div>
          <div className="hidden w-[calc(100%-48px)] flex-col items-start space-y-0.5 truncate text-sm ltr:text-left rtl:text-right xl:flex">
            <span className="w-full truncate font-semibold capitalize text-black">
              Jhon Doe
            </span>
            <span className="w-full truncate text-xs capitalize text-gray-400">
              super admin
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};
HeaderVendor.propTypes = {
  toggleCollapsed: propTypes.func.isRequired,
};

export default HeaderVendor;
