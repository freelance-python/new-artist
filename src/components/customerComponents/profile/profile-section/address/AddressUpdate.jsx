import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import propTypes from "prop-types";
import { useState } from "react";

const AddressUpdate = () => {
  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  return (
    <div className="flex min-h-screen flex-col justify-center bg-[#fff] p-5 sm:p-8 md:min-h-0 md:rounded-xl">
      <h1 className="mb-5 text-center text-lg font-semibold text-[#1f2937] sm:mb-6">
        Add New Address
      </h1>
      <form className="grid h-full grid-cols-2 gap-5">
        <div>
          <FormControl>
            <label className="text-[#333333] font-semibold text-sm leading-none mb-3">
              Type
            </label>
            <RadioGroup defaultValue="Billing" name="radio-buttons-group" row>
              <FormControlLabel
                value="Billing"
                control={<Radio {...controlProps("a")} color="success" />}
                label="Billing"
                className="text-sm text-[#6b7280]"
              />
              <FormControlLabel
                value="Shipping"
                control={<Radio {...controlProps("b")} color="success" />}
                label="Shipping"
                className="text-sm text-[#6b7280]"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="col-span-2">
          <label className="mb-3 block text-sm font-semibold leading-none text-[#333333]">
            Title
          </label>
          <input id="title" type="text" className="InputContactFormHome h-12" />
        </div>
        <div>
          <label className="mb-3 block text-sm font-semibold leading-none text-[#333333]">
            Country
          </label>
          <input
            id="address.country"
            type="text"
            className="InputContactFormHome h-12"
          />
        </div>
        <div>
          <label className="mb-3 block text-sm font-semibold leading-none text-[#333333]">
            City
          </label>
          <input
            id="address.city"
            type="text"
            className="InputContactFormHome h-12"
          />
        </div>
        <div>
          <label className="mb-3 block text-sm font-semibold leading-none text-[#333333]">
            State
          </label>
          <input
            id="address.state"
            type="text"
            className="InputContactFormHome h-12"
          />
        </div>
        <div>
          <label className="mb-3 block text-sm font-semibold leading-none text-[#333333]">
            ZIP
          </label>
          <input
            id="address.zip"
            type="text"
            className="InputContactFormHome h-12"
          />
        </div>
        <div className="col-span-2">
          <label className="mb-3 block text-sm font-semibold leading-none text-[#333333]">
            Street Address
          </label>
          <textarea
            id="address.street_address"
            className="InputContactFormHome"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="col-span-2 inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out text-[#fff] bg-[#009f7f] hover:bg-[#019376] px-5 py-0 h-12 w-full sm:h-12"
        >
          Update Address
        </button>
      </form>
    </div>
  );
};

export default AddressUpdate;

AddressUpdate.propTypes = {
  handleModalType: propTypes.func,
};
