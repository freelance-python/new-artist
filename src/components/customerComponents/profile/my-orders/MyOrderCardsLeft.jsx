import PropTypes from 'prop-types';

const ordersData = [
  {
    orderNumber: "#48",
    orderDate: "February 7, 2024",
    deliveryTime: "Express Delivery",
    amount: "$14.50",
    totalPrice: "$64.79",
  },
  {
    orderNumber: "#41",
    orderDate: "November 5, 2023",
    deliveryTime: "Express Delivery",
    amount: "$2.20",
    totalPrice: "$52.24",
  },
  {
    orderNumber: "#42",
    orderDate: "November 5, 2023",
    deliveryTime: "Express Delivery",
    amount: "$2.20",
    totalPrice: "$52.24",
  },
  {
    orderNumber: "#39",
    orderDate: "November 3, 2023",
    deliveryTime: "Express Delivery",
    amount: "$6.00",
    totalPrice: "$56.12",
  },
];

const OrderCard = ({ order }) => (
  <div className="mb-4 flex w-full shrink-0 cursor-pointer flex-col overflow-hidden rounded border-2 border-transparent bg-gray-100 last:mb-0">
    <div className="flex items-center justify-between border-b border-border-200 py-3 px-5 md:px-3 lg:px-5">
      <span className="flex shrink-0 text-sm font-bold text-heading ltr:mr-4 rtl:ml-4 lg:text-base">
        Order<span className="font-normal">{order.orderNumber}</span>
      </span>
      <span
        className="max-w-full truncate whitespace-nowrap rounded bg-status-processing bg-opacity-[.15] text-status-processing px-3 py-2 text-sm"
        title="Order Processing"
      >
        Order Processing
      </span>
    </div>
    <div className="flex flex-col p-5 md:p-3 lg:px-4 lg:py-5">
      <p className="mb-4 flex w-full items-center justify-between text-sm text-heading last:mb-0">
        <span className="w-24 shrink-0 overflow-hidden">Order Date</span>
        <span className="ltr:mr-auto rtl:ml-auto">:</span>
        <span className="ltr:ml-1 rtl:mr-1">{order.orderDate}</span>
      </p>
      <p className="mb-4 flex w-full items-center justify-between text-sm text-heading last:mb-0">
        <span className="w-24 shrink-0 overflow-hidden">Delivery Time</span>
        <span className="ltr:mr-auto rtl:ml-auto">:</span>
        <span className="truncate ltr:ml-1 rtl:mr-1">{order.deliveryTime}</span>
      </p>
      <p className="mb-4 flex w-full items-center justify-between text-sm font-bold text-heading last:mb-0">
        <span className="w-24 shrink-0 overflow-hidden">Amount</span>
        <span className="ltr:mr-auto rtl:ml-auto">:</span>
        <span className="ltr:ml-1 rtl:mr-1">{order.amount}</span>
      </p>
      <p className="mb-4 flex w-full items-center justify-between text-sm font-bold text-heading last:mb-0">
        <span className="w-24 flex-shrink-0 overflow-hidden">Total Price</span>
        <span className="ltr:mr-auto rtl:ml-auto">:</span>
        <span className="ltr:ml-1 rtl:mr-1">{order.totalPrice}</span>
      </p>
    </div>
  </div>
);

OrderCard.propTypes = {
  order: PropTypes.shape({
    orderNumber: PropTypes.string.isRequired,
    orderDate: PropTypes.string.isRequired,
    deliveryTime: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
  }).isRequired,
};

const MyOrderCardsLeft = () => (
  <div className="flex flex-col space-y-4">
    {ordersData.map((order, index) => (
      <OrderCard key={index} order={order} />
    ))}
  </div>
);

export default MyOrderCardsLeft;
