import { useState } from "react";
import { getStatusChipClass } from "../../../../utils/orderStatusClass";
import PropTypes from "prop-types";
import { Dialog, Box } from "@mui/material";
import PayNowCard from "./PayNowCard";

const MyOrderStatusSection = ({ ordersData }) => {
  const [openPayNowCard, setOpenPayNowCard] = useState(false);

  const handlePayNowClick = () => {
    setOpenPayNowCard(true);
  };

  const handleClosePayNowCard = () => {
    setOpenPayNowCard(false);
  };
  const style = {
    position: "relative",
    border: "none",
    "&:focus-visible": {
      outline: "none !important",
    },
  };

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
                <span
                  className={`px-3 py-1 rounded-full text-status-processing min-h-[2rem] items-center justify-center inline-flex ${getStatusChipClass(
                    ordersData.orderStatus
                  )}`}
                >
                  {ordersData.orderStatus}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 md:ml-auto">
              <span className="block text-xs shrink-0 grow-0 basis-auto xs:text-base lg:inline-block">
                Payment Status :
              </span>
              <div className="w-full lg:w-auto">
                <span className="px-3 py-1 rounded-full bg-[#00a17f26] bg-opacity-[.15] !text-[#00a17f] min-h-[2rem] items-center justify-center inline-flex">
                  {ordersData.paymentStatus}
                </span>
              </div>
              {ordersData.orderStatus === "Order Pending" && (
                <button
                  onClick={handlePayNowClick}
                  className="px-3 h-9 flex items-center bg-[#009f7f] hover:bg-[#019376] rounded-[5px] font-mulish font-semibold text-sm text-[#FFFFFF] max-[1023px]:hidden"
                >
                  Pay Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {openPayNowCard && (
        <Dialog
          scroll="body"
          open={Boolean(openPayNowCard)}
          onClose={handleClosePayNowCard}
          PaperProps={{
            style: {
              maxWidth: 900,
              width: "100%",
            },
          }}
        >
          <Box
            sx={style}
            className="w-full max-w-6xl bg-white md:rounded-xl xl:min-w-[680px]"
          >
            <PayNowCard onPayLater={handleClosePayNowCard}/>
          </Box>
        </Dialog>
      )}
    </div>
  );
};

export default MyOrderStatusSection;

MyOrderStatusSection.propTypes = {
  ordersData: PropTypes.shape({
    orderStatus: PropTypes.string.isRequired,
    paymentStatus: PropTypes.string.isRequired,
  }).isRequired,
};
