import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { saleList } from "./saleList";
import { FaEye, FaHeart, FaStar } from "react-icons/fa";

const DetailsFlashSale = () => {
  const { flashSaleSlug } = useParams();
  const flashSaleDetailData = useMemo(() => {
    if (flashSaleSlug) {
      return saleList.find((s) => s.url.includes(flashSaleSlug));
    }
    return {};
  }, [flashSaleSlug]);
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const countdown = () => {
      const dest = new Date("nov 29, 2024 18:00:00").getTime();
      const now = new Date().getTime();
      const diff = dest - now;

      if (diff <= 0) {
        clearInterval(intervalId);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days < 10 ? `0${days}` : days.toString(),
        hours: hours < 10 ? `0${hours}` : hours.toString(),
        minutes: minutes < 10 ? `0${minutes}` : minutes.toString(),
        seconds: seconds < 10 ? `0${seconds}` : seconds.toString(),
      });
    };

    const intervalId = setInterval(countdown, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mt-20">
      <div className="bg-white">
        <div className="relative h-80 overflow-hidden md:h-[31.25rem] lg:h-[43.75rem]">
          <img
            alt="Limited time discounts."
            className="block w-full h-full 2xl:object-cover"
            src={flashSaleDetailData?.image}
          />
        </div>
        <div className="bg-[#EAF9F0] py-7 px-4 md:px-8 lg:px-16 2xl:px-52">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <h4 className="text-xl font-semibold text-muted-black">
              Sale Ends In:
            </h4>
            <div className="flex gap-2 text-lg text-[#009f7f] [&>p]:rounded [&>p]:bg-[#009f7f] [&>p]:p-3 [&>p]:text-sm [&>p]:font-semibold [&>p]:text-white [&>span]:self-center">
              <p>{timeLeft.days}d</p>
              <span>:</span>
              <p>{timeLeft.hours}h</p>
              <span>:</span>
              <p>{timeLeft.minutes}m</p>
              <span>:</span>
              <p>{timeLeft.seconds}s</p>
            </div>
          </div>
        </div>
        <div className="bg-white py-10 px-4 md:px-8 lg:px-16 2xl:px-52">
          <h3 className="mb-4 text-xl font-semibold text-muted-black lg:text-2xl">
            {flashSaleDetailData?.title}
          </h3>
          <div className="mb-8 text-base leading-[180%] text-[#666] lg:text-lg react-editor-description">
            {flashSaleDetailData?.description}
          </div>
          <ul className="space-y-2 text-base lg:space-y-3 [&>li>p]:font-normal [&>li>p]:text-base-dark [&>li>span]:font-semibold [&>li>span]:text-muted-black [&>li]:flex [&>li]:items-center [&>li]:gap-2">
            <li>
              <span>Campaign status : </span>
              <p>{flashSaleDetailData?.status}</p>
            </li>
            <li>
              <span>Offer Till: </span>
              <p>{flashSaleDetailData?.till}</p>
            </li>
            <li>
              <span>Campaign type : </span>
              <p>on {flashSaleDetailData?.type}</p>
            </li>
            <li>
              <span>Deals rate : </span>
              <p>{flashSaleDetailData?.rate}% Off.</p>
            </li>
          </ul>
        </div>
        <div className="relative bg-[#F9F9F9] py-16 sm:py-20 px-4 md:px-8 lg:px-16 2xl:px-52">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {flashSaleDetailData?.cardList?.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl bg-white"
              >
                <div className="relative w-auto cursor-pointer md:h-[22.75rem]">
                  <div className="h-full w-full">
                    <img
                      alt={item.productName}
                      className="block h-full w-full"
                      src={item.productImage}
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="absolute top-5 right-5">
                    <button
                      type="button"
                      className="flex items-center justify-center rounded-full transition-colors border-gray-300 bg-black bg-opacity-20 text-white z-50 h-8 w-8 border-0 text-base"
                    >
                      <FaHeart />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="mb-2 gap-2 text-lg font-semibold text-muted-black truncate">
                    <a
                      href={`/products/${item.productName
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                    >
                      {item.productName}
                    </a>
                  </h2>
                  <div className="mb-2 flex items-center">
                    <div className="flex flex-1 items-center gap-1 pr-2">
                      <p className="text-base font-medium leading-none text-muted-black">
                        ${item.productRate}
                      </p>
                      <del className="text-sm font-normal text-[#F75159]"></del>
                    </div>
                    <button className="text-xl text-[#009f7f]">
                      <FaEye />
                    </button>
                  </div>
                  <p className="flex items-center gap-1 text-sm font-medium text-[#666]">
                    <FaStar color="#ffe03a" size={14} /> {item.productReviews}{" "}
                    <span className="text-muted-black">Reviews</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsFlashSale;
