import { Link } from "react-router-dom";
import propTypes from "prop-types";

const PagesDropdown = ({ className }) => {
  return (
    <div className={`absolute top-[60px] pt-4 ${className}`}>
      <div className="dropdownContainer w-[220px] rounded-md bg-[#ffffff] shadow">
        <div className="flex flex-col w-full">
          {[
            { text: "Flash Sale", href: "/flash-sales" },
            { text: "Authors", href: "/authors" },
            { text: "FAQ", href: "/help" },
            { text: "Terms & Conditions", href: "/terms" },
            {
              text: "Customer Refund Policy",
              href: "/customer-refund-policies",
            },
            { text: "Vendor Refund Policy", href: "/vendor-refund-policies" },
          ].map((item, index) => (
            <Link
              key={index}
              className="w-full py-[10px] px-[22px] hover:pl-[25px] transition-all duration-200"
              to={item.href}
            >
              <p className="text-[#1f2937] hover:text-[#009f7f] m-0">
                {item.text}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

PagesDropdown.propTypes = {
  className: propTypes.string.isRequired,
};

export default PagesDropdown;
