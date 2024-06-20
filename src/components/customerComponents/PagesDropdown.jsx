import { Link } from "react-router-dom";
import propTypes from "prop-types";

const PagesDropdown = ({ className }) => {
  return (
    <div
      className={`dropdownContainer absolute top-[60px] w-[220px] rounded-md bg-[#ffffff] py-4 shadow transition-all duration-300 ltr:left-0 rtl:right-0 xl:w-[240px] ${className}`}
    >
      <div className="flex flex-col md:w-1/2 w-full">
        {[
          { text: "Flash Sale", href: "/flash-sales" },
          { text: "Authors", href: "/authors" },
          { text: "FAQ", href: "/help" },
          { text: "Terms & Conditions", href: "/terms" },
          { text: "Customer Refund Policy", href: "/customer-refund-policies" },
          { text: "Vendor Refund Policy", href: "/vendor-refund-policies" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex w-full cursor-pointer p-2 items-center gap-[8px] py-[10px] px-[22px] transition-all duration-200 hover:pl-[25px] hover:opacity-100"
          >
            <Link to={item.href}>
              <p className="dropdowntext m-0">{item.text}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

PagesDropdown.propTypes = {
  className: propTypes.string.isRequired,
};

export default PagesDropdown;
