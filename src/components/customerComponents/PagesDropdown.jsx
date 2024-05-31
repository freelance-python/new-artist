import { Link } from "react-router-dom";
import propTypes from "prop-types";

const PagesDropdown = ({ className }) => {
  return (
    <>
      <div
        className={`dropdownContainer w-[200px] sm:w-[280px] md:w-[200px] ${className}`}
      >
        <div className=" flex flex-col md:w-1/2 w-full">
          <Link href={""} className="dropnavlinks">
            <div className="flex w-full cursor-pointer p-2  items-center gap-[8px]">
              <p className="dropdowntext m-0">Flash Sale</p>
            </div>
          </Link>
          <Link href={""} className="dropnavlinks">
            <div className="flex w-full cursor-pointer p-2  items-center gap-[8px]">
              <p className="dropdowntext m-0">Flash Sale</p>
            </div>
          </Link>
          <Link href={""} className="dropnavlinks">
            <div className="flex w-full cursor-pointer p-2  items-center gap-[8px]">
              <p className="dropdowntext m-0">Flash Sale</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

PagesDropdown.propTypes = {
  className: propTypes.string.isRequired,
};

export default PagesDropdown;
