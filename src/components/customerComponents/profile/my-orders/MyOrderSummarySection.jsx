const MyOrderSummarySection = () => {
  return (
    <div className="flex flex-col border-b border-gray-200 sm:flex-row">
      {/* Left side - Addresses */}
      <div className="flex w-full flex-col border-b border-gray-200 px-5 py-4 sm:border-b-0 sm:border-r md:w-3/5">
        <div className="mb-4">
          <span className="mb-2 block text-sm font-bold text-gray-700">Shipping Address</span>
          <span className="text-sm text-gray-500">2148 Straford Park, KY, Winchester, 40391, United States</span>
        </div>
        <div>
          <span className="mb-2 block text-sm font-bold text-gray-700">Billing Address</span>
          <span className="text-sm text-gray-500">2231 Kidd Avenue, AK, Kipnuk, 99614, United States</span>
        </div>
      </div>

      {/* Right side - Order summary */}
      <div className="flex w-full flex-col px-5 py-4 md:w-2/5">
        <div className="mb-3 flex justify-between">
          <span className="text-sm text-gray-500">Sub Total</span>
          <span className="text-sm font-bold">$14.50</span>
        </div>
        <div className="mb-3 flex justify-between">
          <span className="text-sm text-gray-500">Discount</span>
          <span className="text-sm font-bold">$0.00</span>
        </div>
        <div className="mb-3 flex justify-between">
          <span className="text-sm text-gray-500">Delivery Fee</span>
          <span className="text-sm font-bold">$50.00</span>
        </div>
        <div className="mb-3 flex justify-between">
          <span className="text-sm text-gray-500">Tax</span>
          <span className="text-sm font-bold">$0.29</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-bold text-gray-700">Total</span>
          <span className="text-sm font-bold">$64.79</span>
        </div>
      </div>
    </div>
  );
};

export default MyOrderSummarySection;
