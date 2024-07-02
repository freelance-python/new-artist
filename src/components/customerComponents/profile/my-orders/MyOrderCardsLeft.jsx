import PropTypes from "prop-types";

const ordersData = [
  {
    orderNumber: "#48",
    orderDate: "February 7, 2024",
    deliveryTime: "Express Delivery",
    amount: "$14.50",
    totalPrice: "$64.79",
    orderStatus: "Order Processing",
  },
  {
    orderNumber: "#41",
    orderDate: "November 5, 2023",
    deliveryTime: "Express Delivery",
    amount: "$2.20",
    totalPrice: "$52.24",
    orderStatus: "Order Completed",
  },
  {
    orderNumber: "#42",
    orderDate: "November 5, 2023",
    deliveryTime: "Express Delivery",
    amount: "$2.20",
    totalPrice: "$52.24",
    orderStatus: "Order Pending",
  },
  {
    orderNumber: "#39",
    orderDate: "November 3, 2023",
    deliveryTime: "Express Delivery",
    amount: "$6.00",
    totalPrice: "$56.12",
    orderStatus: "Order Processing",
  },
  {
    orderNumber: "#48",
    orderDate: "February 7, 2024",
    deliveryTime: "Express Delivery",
    amount: "$14.50",
    totalPrice: "$64.79",
    orderStatus: "Order Completed",
  },
  {
    orderNumber: "#41",
    orderDate: "November 5, 2023",
    deliveryTime: "Express Delivery",
    amount: "$2.20",
    totalPrice: "$52.24",
    orderStatus: "Order Pending",
  },
  {
    orderNumber: "#42",
    orderDate: "November 5, 2023",
    deliveryTime: "Express Delivery",
    amount: "$2.20",
    totalPrice: "$52.24",
    orderStatus: "Order Processing",
  },
  {
    orderNumber: "#39",
    orderDate: "November 3, 2023",
    deliveryTime: "Express Delivery",
    amount: "$6.00",
    totalPrice: "$56.12",
    orderStatus: "Order Completed",
  },
  {
    orderNumber: "#48",
    orderDate: "February 7, 2024",
    deliveryTime: "Express Delivery",
    amount: "$14.50",
    totalPrice: "$64.79",
    orderStatus: "Order Pending",
  },
  {
    orderNumber: "#41",
    orderDate: "November 5, 2023",
    deliveryTime: "Express Delivery",
    amount: "$2.20",
    totalPrice: "$52.24",
    orderStatus: "Order Processing",
  },
  {
    orderNumber: "#42",
    orderDate: "November 5, 2023",
    deliveryTime: "Express Delivery",
    amount: "$2.20",
    totalPrice: "$52.24",
    orderStatus: "Order Completed",
  },
  {
    orderNumber: "#39",
    orderDate: "November 3, 2023",
    deliveryTime: "Express Delivery",
    amount: "$6.00",
    totalPrice: "$56.12",
    orderStatus: "Order Pending",
  },
];

const OrderCard = ({ order }) => {
  let statusColorClass = "";
  switch (order.orderStatus) {
    case "Order Processing":
      statusColorClass = "bg-[#9e750026] text-[#9e7500]";
      break;
    case "Order Completed":
      statusColorClass = "bg-[#00a17f26] text-[#00a17f]";
      break;
    case "Order Pending":
      statusColorClass = "bg-[#c9a11626] text-[#c9a116]";
      break;
    default:
      statusColorClass = "";
  }

  return (
    <div className="mb-4 w-full max-w-full sm:max-w-3xl bg-gray-100 border-2 border-transparent rounded overflow-hidden">
      <div className="flex items-center justify-between border-b border-gray-200 py-3 px-5 md:px-3 lg:px-5">
        <span className="text-sm font-bold text-gray-800 lg:text-base">
          Order<span className="font-normal">{order.orderNumber}</span>
        </span>
        <span
          className={`truncate rounded px-3 py-2 text-sm ${statusColorClass}`}
        >
          {order.orderStatus}
        </span>
      </div>
      <div className="flex flex-col p-5 md:p-3 lg:px-4 lg:py-5">
        <p className="mb-4 flex items-center justify-between text-sm text-gray-800">
          <span className="w-24">Order Date</span>
          <span>:</span>
          <span>{order.orderDate}</span>
        </p>
        <p className="mb-4 flex items-center justify-between text-sm text-gray-800">
          <span className="w-24">Delivery Time</span>
          <span>:</span>
          <span>{order.deliveryTime}</span>
        </p>
        <p className="mb-4 flex items-center justify-between text-sm font-bold text-gray-800">
          <span className="w-24">Amount</span>
          <span>:</span>
          <span>{order.amount}</span>
        </p>
        <p className="mb-4 flex items-center justify-between text-sm font-bold text-gray-800">
          <span className="w-24">Total Price</span>
          <span>:</span>
          <span>{order.totalPrice}</span>
        </p>
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  order: PropTypes.shape({
    orderNumber: PropTypes.string.isRequired,
    orderDate: PropTypes.string.isRequired,
    deliveryTime: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
    orderStatus: PropTypes.string.isRequired,
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
