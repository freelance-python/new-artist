import { Checkbox } from "@mui/material";
import { FaRegCreditCard } from "react-icons/fa";
import propTypes from "prop-types";

const PayNowCard = ({ onPayLater }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="p-6 lg:p-12">
      <div className="mb-8 flex items-center justify-between sm:mb-10">
        <h1 className="text-center text-lg font-semibold text-heading sm:text-xl">
          New Card
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <label className="block text-sm font-semibold text-black mb-2">
          Name
        </label>
        <input
          type="text"
          placeholder="Name"
          className="InputContactFormHome h-12"
        />
        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Card Number
          </label>
          <div className="input-group-box-profile-form">
            <input
              type="number"
              placeholder="Card Number"
              className="input-profile-form h-12 !pl-12 !pr-4"
            />
            <div className="h-4 absolute pl-4">
              <FaRegCreditCard color="#6b7280" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 lg:flex-nowrap">
          <div className="max-w-full lg:max-w-[50%] lg:flex-1">
            <label className="block text-sm font-semibold text-black mb-2">
              Expiration date
            </label>
            <input
              type="text"
              placeholder="MM / YY"
              className="InputContactFormHome h-12"
            />
          </div>
          <div className="max-w-full lg:max-w-[50%] lg:flex-1">
            <label className="block text-sm font-semibold text-black mb-2">
              CVC
            </label>
            <input
              type="number"
              placeholder="CVC"
              className="InputContactFormHome h-12"
            />
          </div>
        </div>

        <div className="mt-3">
          <div className="flex items-center">
            <Checkbox
              defaultChecked
              size="small"
              style={{ color: "#019376" }}
            />
            <label
              htmlFor="save_card"
              className="text-[#6b7280] text-sm primary"
            >
              Save Card
            </label>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="px-5 py-0 h-12 flex items-center bg-[#009f7f] hover:bg-[#019376] rounded-[5px] font-mulish font-semibold text-sm text-[#FFFFFF] max-[1023px]:hidden">
            Pay
          </button>
          <button
            onClick={onPayLater}
            className="px-11 py-0 h-12 flex items-center text-[#6b7280] bg-transparent hover:bg-[#019376] rounded-[5px] font-mulish font-semibold text-sm hover:text-[#FFFFFF] max-[1023px]:hidden border border-[#9ca3af]"
          >
            Pay Later
          </button>
        </div>
      </form>
    </div>
  );
};

export default PayNowCard;
PayNowCard.propTypes = {
  onPayLater: propTypes.func.isRequired,
};
