import { IoMdEye } from "react-icons/io";
import MyOrderCardsLeft from "./MyOrderCardsLeft";
import MyOrderStatusSection from "./MyOrderStatusSection";
import MyOrderSummarySection from "./MyOrderSummarySection";
import MyOrderProgress from "./MyOrderProgress";

const MyOrderContainer = () => {
  return (
    <div className="w-full overflow-hidden flex-col flex lg:flex-row gap-6">
      <div className="h-[80vh] min-h-[670px] w-full lg:w-1/3 lg:shrink-0">
        <div className="flex h-full flex-col bg-white pb-5 md:border md:border-border-200">
          <h3 className="py-5 px-5 text-xl font-semibold text-heading">
            My Orders
          </h3>
          <div className="w-full" style={{ height: "calc(100% - 80px)" }}>
            <div className="px-5 custom-scrollbar">
              <MyOrderCardsLeft />
              <div className="mt-8 flex justify-center lg:mt-12">
                <button
                  data-variant="normal"
                  className="inline-flex items-center justify-center shrink-0 leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-0 focus:shadow focus:ring-1 focus:ring-accent-700 bg-accent text-light border border-transparent hover:bg-accent-hover px-5 py-0 h-12 text-sm font-semibold md:text-base"
                >
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col border border-border-200 bg-white lg:w-2/3">
        <div className="flex flex-col items-center p-5 md:flex-row md:justify-between">
          <h2 className="mb-2 flex text-sm font-semibold text-heading md:text-lg">
            Order Details <span className="px-2">-</span> 20240207303639
          </h2>
          <div className="flex items-center">
            <a
              className="flex items-center text-sm font-semibold text-accent no-underline transition duration-200 hover:text-accent-hover focus:text-accent-hover"
              href="/orders/20240207303639"
            >
              <IoMdEye />
              Details
            </a>
          </div>
        </div>
        <MyOrderStatusSection />
        <MyOrderSummarySection />
        <MyOrderProgress />
      </div>
    </div>
  );
};

export default MyOrderContainer;
