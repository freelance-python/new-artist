import { useState } from "react";

const deliveryOptions = [
  {
    id: "express",
    label: "Express Delivery",
    description: "90 min express delivery",
    checked: true,
  },
  {
    id: "morning",
    label: "Morning",
    description: "8.00 AM - 11.00 AM",
    checked: false,
  },
  {
    id: "noon",
    label: "Noon",
    description: "11.00 AM - 2.00 PM",
    checked: false,
  },
  {
    id: "afternoon",
    label: "Afternoon",
    description: "2.00 PM - 5.00 PM",
    checked: false,
  },
  {
    id: "evening",
    label: "Evening",
    description: "5.00 PM - 8.00 PM",
    checked: false,
  },
];

const DeliveryScheduleCheckOut = () => {
  const [selectedOption, setSelectedOption] = useState(deliveryOptions[0].id);

  const handleOptionChange = (optionId) => {
    setSelectedOption(optionId);
  };

  return (
    <div className="bg-white p-5 shadow-md md:p-8 rounded">
      <div className="mb-5 flex items-center justify-between md:mb-8">
        <div className="flex items-center space-x-3 md:space-x-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#009f7f] text-base text-[#fff] lg:text-xl">
            4
          </span>
          <p className="text-lg capitalize text-[#1f2937] lg:text-xl">
            Delivery Schedule
          </p>
        </div>
      </div>
      <div
        id="headlessui-radiogroup-:r3l:"
        role="radiogroup"
        aria-labelledby="headlessui-label-:r3m:"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {deliveryOptions.map((option) => (
            <div
              key={option.id}
              id={`headlessui-radiogroup-option-:${option.id}:`}
              role="radio"
              aria-checked={selectedOption === option.id}
              tabIndex={selectedOption === option.id ? "0" : "-1"}
              data-headlessui-state={
                selectedOption === option.id ? "checked" : ""
              }
              className={`relative p-4 rounded border cursor-pointer group ${
                selectedOption === option.id
                  ? "border-[#009f7f] shadow-sm"
                  : "bg-gray-100 border-transparent"
              }`}
              onClick={() => handleOptionChange(option.id)}
            >
              <span className="text-sm text-[#1f2937] font-semibold block mb-2">
                {option.label}
              </span>
              <span className="text-sm text-[#1f2937] block">
                {option.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveryScheduleCheckOut;
