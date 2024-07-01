const MyOrderStatusSection = () => {
  return (
    <div className="relative mx-5 mb-6 overflow-hidden rounded">
      <div className="bg-[#F7F8FA] px-7 py-4">
        <div className="flex flex-col flex-wrap items-center justify-between mb-0 text-base font-bold gap-x-8 text-heading sm:flex-row lg:flex-nowrap">
          <div className="order-2 grid w-full grid-cols-1 gap-6 xs:flex-nowrap sm:order-1 max-w-full justify-between md:grid-cols-2">
            <div className="flex items-center gap-3">
              <span className="block text-xs shrink-0 grow-0 basis-auto xs:text-base lg:inline-block">
                Order Status :
              </span>
              <div className="w-full lg:w-auto">
                <span className="px-3 py-1 rounded-full bg-status-processing bg-opacity-[.15] text-status-processing min-h-[2rem] items-center justify-center text-[9px] !leading-none xs:text-sm inline-flex">
                  Order Processing
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 md:ml-auto">
              <span className="block text-xs shrink-0 grow-0 basis-auto xs:text-base lg:inline-block">
                Payment Status :
              </span>
              <div className="w-full lg:w-auto">
                <span className="px-3 py-1 rounded-full text-light bg-accent bg-opacity-[.15] !text-accent min-h-[2rem] items-center justify-center truncate whitespace-nowrap text-[9px] !leading-none xs:text-sm inline-flex">
                  Cash On Delivery
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrderStatusSection;
