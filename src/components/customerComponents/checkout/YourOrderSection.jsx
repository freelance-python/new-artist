const YourOrderSection = () => {
  const emptyCartMessage = (
    <div
      className="flex h-full flex-col items-center justify-center"
      style={{ opacity: 1 }}
    >
      <img
        src="../../../src/assets/noproductcart.png"
        alt=""
        className="h-52"
      />
      <h4 className="mt-6 text-base font-semibold">No products found</h4>
    </div>
  );
  const orderList = (
    <div className="flex flex-col border-b border-border-200 py-3">
      <div className="flex justify-between py-2">
        <div className="flex items-center justify-between text-base">
          <span className="text-sm text-[#6b7280]">
            <span className="text-sm font-bold text-[#1f2937]">1</span>
            <span className="mx-2">x</span>
            <span>Brussels Sprout</span> | <span>1lb</span>
          </span>
        </div>
        <span className="text-sm text-[#6b7280]">$3.00</span>
      </div>
      <div className="flex justify-between py-2">
        <div className="flex items-center justify-between text-base">
          <span className="text-sm text-[#6b7280]">
            <span className="text-sm font-bold text-[#1f2937]">1</span>
            <span className="mx-2">x</span>
            <span>Blueberries</span> | <span>1lb</span>
          </span>
        </div>
        <span className="text-sm text-[#6b7280]">$3.00</span>
      </div>
    </div>
  );

  return (
    <div className="mt-10 mb-10 w-full sm:mb-12 lg:mb-0 lg:w-96">
      <div className="w-full">
        <div className="mb-4 flex flex-col items-center space-x-4 rtl:space-x-reverse">
          <span className="text-base font-bold text-[#1f2937]">Your Order</span>
        </div>
        {emptyCartMessage}
        {orderList}
        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <p className="text-sm text-[#6b7280]">Sub Total</p>
            <span className="text-sm text-[#6b7280]">$6.00</span>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-[#6b7280]">Tax</p>
            <span className="text-sm text-[#6b7280]">
              Calculated at checkout
            </span>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-[#6b7280]">Estimated Shipping</p>
            <span className="text-sm text-[#6b7280]">
              Calculated at checkout
            </span>
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out text-[#fff] bg-[#009f7f] hover:bg-[#019376] px-5 py-0 h-12 w-full sm:h-12"
          >
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourOrderSection;
