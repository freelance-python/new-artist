import { useState } from "react";
import MyOrderCardsLeft from "./MyOrderCardsLeft";
import MyOrderStatusSection from "./MyOrderStatusSection";
import MyOrderSummarySection from "./MyOrderSummarySection";
import MyOrderProgress from "./MyOrderProgress";
import MyOrderItemsTable from "./MyOrderItemsTable";

const ordersData = [
  {
    orderId: "#48",
    orderNumber: "20240207303639",
    orderDate: "February 7, 2024",
    deliveryTime: "Express Delivery",
    amount: "$14.50",
    totalPrice: "$64.79",
    orderStatus: "Order Pending",
    paymentStatus: "Cash On Delivery",
  },
  {
    orderId: "#47",
    orderNumber: "20240207305596",
    orderDate: "November 5, 2023",
    deliveryTime: "Express Delivery",
    amount: "$2.20",
    totalPrice: "$52.24",
    orderStatus: "Order Completed",
    paymentStatus: "Payment Success",
  },
  {
    orderId: "#40",
    orderNumber: "20240207303323",
    orderDate: "November 5, 2023",
    deliveryTime: "Express Delivery",
    amount: "$2.20",
    totalPrice: "$52.24",
    orderStatus: "Order Pending",
    paymentStatus: "Cash On Delivery",
  },
  {
    orderId: "#39",
    orderNumber: "20240207303290",
    orderDate: "November 3, 2023",
    deliveryTime: "Express Delivery",
    amount: "$6.00",
    totalPrice: "$56.12",
    orderStatus: "Order Processing",
    paymentStatus: "Cash On Delivery",
  },
  {
    orderId: "#44",
    orderNumber: "20240209876543",
    orderDate: "February 7, 2024",
    deliveryTime: "Express Delivery",
    amount: "$14.50",
    totalPrice: "$64.79",
    orderStatus: "Order Completed",
    paymentStatus: "Payment Success",
  },
  {
    orderId: "#48",
    orderNumber: "20240202541239",
    orderDate: "November 5, 2023",
    deliveryTime: "Express Delivery",
    amount: "$2.20",
    totalPrice: "$52.24",
    orderStatus: "Order Pending",
    paymentStatus: "Cash On Delivery",
  },
  {
    orderId: "#40",
    orderNumber: "20240201092345",
    orderDate: "November 5, 2023",
    deliveryTime: "Express Delivery",
    amount: "$2.20",
    totalPrice: "$52.24",
    orderStatus: "Order Processing",
    paymentStatus: "Cash On Delivery",
  },
  {
    orderId: "#28",
    orderNumber: "20223453455563",
    orderDate: "November 3, 2023",
    deliveryTime: "Express Delivery",
    amount: "$6.00",
    totalPrice: "$56.12",
    orderStatus: "Order Completed",
    paymentStatus: "Payment Success",
  },
  {
    orderId: "#80",
    orderNumber: "12086243810843",
    orderDate: "February 7, 2024",
    deliveryTime: "Express Delivery",
    amount: "$14.50",
    totalPrice: "$64.79",
    orderStatus: "Order Pending",
    paymentStatus: "Cash On Delivery",
  },
  {
    orderId: "#58",
    orderNumber: "20240207306666",
    orderDate: "November 5, 2023",
    deliveryTime: "Express Delivery",
    amount: "$2.20",
    totalPrice: "$52.24",
    orderStatus: "Order Processing",
    paymentStatus: "Cash On Delivery",
  },
  {
    orderId: "#74",
    orderNumber: "20240202386540",
    orderDate: "November 5, 2023",
    deliveryTime: "Express Delivery",
    amount: "$2.20",
    totalPrice: "$52.24",
    orderStatus: "Order Completed",
    paymentStatus: "Payment Success",
  },
  {
    orderId: "#48",
    orderNumber: "20240207395695",
    orderDate: "November 3, 2023",
    deliveryTime: "Express Delivery",
    amount: "$6.00",
    totalPrice: "$56.12",
    orderStatus: "Order Pending",
    paymentStatus: "Cash On Delivery",
  },
];

const MyOrderContainer = () => {
  const [selectedOrder, setSelectedOrder] = useState(ordersData[0]);

  const handleOrderSelect = (order) => {
    setSelectedOrder(order);
  };

  return (
    <div className="w-full overflow-hidden flex-col flex lg:flex-row gap-6">
      <div className="h-[80vh] min-h-[670px] w-full lg:w-1/3 lg:shrink-0">
        <div className="flex h-full flex-col bg-white pb-5 md:border md:border-border-200">
          <h3 className="py-5 px-5 text-xl font-semibold text-heading">
            My Orders
          </h3>
          <div className="w-full" style={{ height: "calc(100% - 80px)" }}>
            <div className="px-5 order-card-scrollbar">
              <div className="flex flex-col space-y-4">
                {ordersData.map((order, orderDetails) => (
                  <MyOrderCardsLeft
                    key={orderDetails}
                    ordersData={order}
                    isSelected={selectedOrder.orderId === order.orderId}
                    onSelect={() => handleOrderSelect(order)}
                  />
                ))}
              </div>
              <div className="mt-8 flex justify-center lg:mt-12">
                <button
                  data-variant="normal"
                  className="inline-flex items-center justify-center shrink-0 leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-0 focus:shadow focus:ring-1 focus:ring-accent-700 bg-[#009f7f] text-[#fff] border border-transparent hover:bg-[#019376] px-5 py-0 h-12 text-sm font-semibold md:text-base"
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
            Order Details <span className="px-2">-</span>{" "}
            {selectedOrder.orderNumber}
          </h2>
        </div>
        <MyOrderStatusSection ordersData={selectedOrder} />
        <MyOrderSummarySection
          orderDate={selectedOrder.orderDate}
          deliveryTime={selectedOrder.deliveryTime}
          amount={selectedOrder.amount}
          totalPrice={selectedOrder.totalPrice}
        />
        <MyOrderProgress orderStatus={selectedOrder.orderStatus} />
        <MyOrderItemsTable orderNumber={selectedOrder.orderNumber} />
      </div>
    </div>
  );
};

export default MyOrderContainer;
