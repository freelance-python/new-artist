import { CiDiscount1 } from "react-icons/ci";
import ItemsListHome from "../ItemsListHome";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { shopEntries } from "./shopEntries";

const ShopDetailSection = () => {
  const { shopsSlug } = useParams();
  const shopDetailData = useMemo(() => {
    if (shopsSlug) {
      return shopEntries.find((s) =>
        s.name.toLowerCase().includes(shopsSlug.toLowerCase())
      );
    }
    return null;
  }, [shopsSlug]);

  if (!shopDetailData) {
    return <div>No shop found</div>;
  }
  return (
    <div className="mt-20">
      <div className="flex flex-col bg-gray-100 lg:flex-row lg:items-start lg:p-8 gap-4">
        <div className="hidden h-full w-full bg-[#fff] md:rounded lg:block lg:w-80 2xl:w-96 sticky top-24 lg:top-28">
          <div className="max-h-full overflow-hidden">
            <div className="flex flex-col h-full">
              <div className="flex flex-col w-full p-6 border-b border-gray-200">
                <div className="flex items-center justify-start gap-2 mb-4">
                  <div className="flex items-center justify-center w-24 h-24 border border-gray-200 rounded-full shrink-0">
                    <div className="relative w-[calc(100%-8px)] h-[calc(100%-8px)] overflow-hidden bg-gray-200 rounded-full">
                      <img
                        alt="logo"
                        className="object-cover"
                        src={shopDetailData.imageUrl}
                      />
                    </div>
                  </div>
                  <div className="ltr:pl-2.5 rtl:pr-2.5">
                    <div className="text-sm text-gray-400">Since 2023</div>
                    <h3 className="mb-2 overflow-hidden text-lg font-semibold truncate text-[#1f2937]">
                      {shopDetailData.name}
                    </h3>
                    <div className="flex flex-wrap text-sm rounded gap-x-4">
                      <div className="flex justify-center gap-1.5 text-gray-500">
                        <div className="font-medium text-[#1f2937]">
                          {shopDetailData.productCount}
                        </div>
                        products
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(70px,1fr))] text-sm gap-1.5 p-6">
                <a
                  className="flex flex-col items-center justify-center p-2 pt-3.5 pb-3 text-gray-500 rounded bg-gray-50 group hover:text-[#009f7f] hover:bg-[#009f7f]/10 transition-all"
                  href="/shops/medicine/offers"
                >
                  <CiDiscount1 />
                  <span className="pt-2 text-sm">Coupons</span>
                </a>
                <a
                  className="flex flex-col items-center justify-center p-2 pt-3.5 pb-3 text-gray-500 rounded bg-gray-50 group hover:text-[#009f7f] hover:bg-[#009f7f]/10 transition-all"
                  href="/shops/medicine/contact"
                >
                  <CiDiscount1 />
                  <span className="pt-2 text-sm">Contact</span>
                </a>
                <a
                  href="test.com"
                  target="_blank"
                  className="flex flex-col items-center justify-center p-2 pt-3.5 pb-3 text-gray-500 rounded bg-gray-50 group hover:text-[#009f7f] hover:bg-[#009f7f]/10 transition-all"
                  rel="noreferrer"
                >
                  <CiDiscount1 />
                  <span className="pt-2 text-sm">Website</span>
                </a>
                <a
                  className="flex flex-col items-center justify-center p-2 pt-3.5 pb-3 text-gray-500 rounded bg-gray-50 group hover:text-[#009f7f] hover:bg-[#009f7f]/10 transition-all"
                  href="/shops/medicine/terms"
                >
                  <span className="pt-2 text-sm">Terms</span>
                </a>
                <a
                  className="flex flex-col items-center justify-center p-2 pt-3.5 pb-3 text-gray-500 rounded bg-gray-50 group hover:text-[#009f7f] hover:bg-[#009f7f]/10 transition-all"
                  href="/shops/medicine/faqs"
                >
                  <CiDiscount1 />
                  <span className="pt-2 text-sm">FAQs</span>
                </a>
              </div>
              <div className="p-6 border-t border-gray-200">
                <div className="flex flex-col mb-5 last:mb-0">
                  <span className="mb-1.5 text-sm font-semibold text-[#1f2937]">
                    Address
                  </span>
                  <p className="text-sm text-[#6b7280]">
                    {shopDetailData.address}
                  </p>
                </div>
                <div className="flex flex-col mb-5 last:mb-0">
                  <span className="mb-1.5 text-sm font-semibold text-[#1f2937]">
                    Phone
                  </span>
                  <p className="text-sm text-[#6b7280]">
                    {shopDetailData.phoneNo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full p-4 pb-12 lg:p-0 gap-4">
          <div className="relative w-full h-full overflow-hidden rounded">
            <img
              alt="[#1f2937]"
              width="2340"
              height="870"
              className="w-full h-full"
              src={shopDetailData.headImage}
            />
          </div>
          <ItemsListHome />
        </div>
      </div>
    </div>
  );
};

export default ShopDetailSection;
