const OrderNoteCheckOut = () => {
  return (
    <div className="bg-white p-5 shadow-md rounded md:p-8">
      <div className="mb-5 flex items-center justify-between md:mb-8">
        <div className="flex items-center space-x-3 rtl:space-x-reverse md:space-x-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#009f7f] text-base text-[#fff] lg:text-xl">
            5
          </span>
          <p className="text-lg capitalize text-[#1f2937] lg:text-xl">
            Order Note
          </p>
        </div>
      </div>
      <div className="block">
        <div>
          <textarea
            className="flex w-full appearance-none items-center rounded px-4 py-3 text-sm text-[#1f2937] transition duration-300 ease-in-out focus:outline-0 focus:ring-0 border border-border-base focus:border-[#009f7f]"
            rows="4"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default OrderNoteCheckOut;
