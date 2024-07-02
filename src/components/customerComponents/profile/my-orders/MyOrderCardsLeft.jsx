import PropTypes from "prop-types";
import { getStatusChipClass } from "../../../../utils/orderStatusClass";

const MyOrderCardsLeft = ({
  ordersData,
  isSelected,
  onSelect,
}) => (
  <div
    className={`mb-4 w-full max-w-full sm:max-w-3xl bg-gray-100 border-2 ${
      isSelected ? "border-[#009f7f]" : "border-transparent"
    } rounded overflow-hidden`}
    onClick={onSelect}
  >
    <div className="flex items-center justify-between border-b border-gray-200 py-3 px-5 md:px-3 lg:px-5">
      <span className="text-sm font-bold text-gray-800 lg:text-base">
        Order<span className="font-normal">{ordersData.orderId}</span>
      </span>
      <span
        className={`truncate rounded px-3 py-2 text-sm ${getStatusChipClass(ordersData.orderStatus)}`}
      >
        {ordersData.orderStatus}
      </span>
    </div>
    <div className="flex flex-col p-5 md:p-3 lg:px-4 lg:py-5">
      <p className="mb-4 flex items-center justify-between text-sm text-gray-800">
        <span className="w-24">Order Date</span>
        <span>:</span>
        <span>{ordersData.orderDate}</span>
      </p>
      <p className="mb-4 flex items-center justify-between text-sm text-gray-800">
        <span className="w-24">Delivery Time</span>
        <span>:</span>
        <span>{ordersData.deliveryTime}</span>
      </p>
      <p className="mb-4 flex items-center justify-between text-sm font-bold text-gray-800">
        <span className="w-24">Amount</span>
        <span>:</span>
        <span>{ordersData.amount}</span>
      </p>
      <p className="mb-4 flex items-center justify-between text-sm font-bold text-gray-800">
        <span className="w-24">Total Price</span>
        <span>:</span>
        <span>{ordersData.totalPrice}</span>
      </p>
    </div>
  </div>
);

MyOrderCardsLeft.propTypes = {
  ordersData: PropTypes.shape({
    orderId: PropTypes.string.isRequired,
    orderDate: PropTypes.string.isRequired,
    deliveryTime: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
    orderStatus: PropTypes.string.isRequired,
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default MyOrderCardsLeft;
