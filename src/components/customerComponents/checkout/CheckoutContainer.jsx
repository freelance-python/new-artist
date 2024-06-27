import OrderInfo from "./OrderInfo";
import YourOrderSection from "./YourOrderSection";

const CheckoutContainer = () => {
  return (
    <div className="bg-gray-100 px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
      <div className="m-auto flex w-full max-w-5xl flex-col items-center lg:flex-row lg:items-start lg:space-x-8">
        <OrderInfo />
        <YourOrderSection />
      </div>
    </div>
  );
};

export default CheckoutContainer;
