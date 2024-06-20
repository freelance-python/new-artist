import propTypes from "prop-types";
import { useCallback, useRef, useState } from "react";

export const CouponCard = ({ couponData }) => {
  const btnRef = useRef();
  const [btnText, setBtnText] = useState("Copy");

  const handleCopyCouponCode = useCallback(() => {
    navigator.clipboard.writeText(couponData?.code);
    setBtnText("Copied!");
    btnRef.current = setTimeout(() => {
      setBtnText("Copy");
    }, 3000);
  }, [couponData?.code]);

  return (
    <div key={couponData?.id} className="coupon-card">
      <div className="relative flex overflow-hidden bg-gray-200 h-[12.5rem] rounded">
        <div
          className="absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${couponData?.imageUrl}")`,
          }}
        ></div>
      </div>
      <div className="grid items-center w-11/12 grid-flow-col px-5 py-4 mx-auto rounded-bl shadow-sm rounded-be auto-cols-fr bg-[#fff]">
        <span className="flex items-center font-semibold uppercase text-[#1f2937] gap-1.5">
          {couponData?.code}
        </span>
        <button
          ref={btnRef}
          className="text-sm font-semibold transition-colors duration-200 text-[#009f7f] hover:text-[#019376]"
          onClick={handleCopyCouponCode}
        >
          <span>{btnText}</span>
        </button>
      </div>
    </div>
  );
};

const CouponOffers = () => {
  const couponData = [
    {
      id: 1,
      code: "4OFF",
      imageUrl:
        "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/924/conversions/4x2x-thumbnail.jpg",
    },
    {
      id: 2,
      code: "BAZAR10",
      imageUrl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F927%2Fconversions%2F10x2x-thumbnail.jpg&w=640&q=100",
    },
    {
      id: 3,
      code: "BAZAR20",
      imageUrl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F928%2Fconversions%2F20x2x-thumbnail.jpg&w=640&q=100",
    },
    {
      id: 4,
      code: "EID2",
      imageUrl:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F933%2Fconversions%2F2x2x-thumbnail.jpg&w=640&q=100",
    },
  ];
  return (
    <div className="w-full px-4 py-12 mx-auto bg-gray-100 max-w-1920 lg:py-14 lg:px-8 xl:py-24 xl:px-16 2xl:px-20">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-8 2xl:grid-cols-6">
        {couponData.map((coupon) => (
          <CouponCard key={coupon?.id} couponData={coupon} />
        ))}
      </div>
    </div>
  );
};

export default CouponOffers;

CouponCard.propTypes = {
  couponData: propTypes.objectOf({
    id: propTypes.string,
    imageUrl: propTypes.string,
    code: propTypes.string,
  }),
};
