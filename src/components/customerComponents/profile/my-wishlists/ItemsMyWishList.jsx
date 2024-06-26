import { IoIosStar } from "react-icons/io";

const ItemsMyWishList = () => {
  return (
    <div className="flex w-full items-start space-x-4 border-b border-gray-200 py-5 first:pt-0 last:border-0 last:pb-0 rtl:space-x-reverse sm:space-x-5 xl:items-center">
      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center border border-gray-200 sm:h-[74px] sm:w-[74px]">
        <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2%2Fconversions%2FBabySpinach-thumbnail.jpg&w=1920&q=75" />
      </div>
      <div className="flex w-full flex-col items-start sm:flex-row sm:justify-between sm:space-x-4 rtl:sm:space-x-reverse xl:items-center">
        <div className="flex w-full flex-col sm:items-start">
          <a
            className="text-lg font-semibold text-[#1f2937] transition-colors hover:text-[#019376]"
            href="/products/baby-spinach"
          >
            Baby Spinach
          </a>
          <p className="mt-1.5 flex flex-col items-start space-y-3">
            <a
              className="inline-block w-auto text-sm font-semibold text-[#333333] transition-colors hover:text-[#019376]"
              href="/shops/grocery-shop"
            >
              Grocery Shop
            </a>
            <span className="inline-flex shrink-0 items-center bg-[#009f7f] text-white px-2 py-[3px] text-sm !rounded">
              3.33
              <span className="flex h-2.5 w-2.5 ltr:ml-1 rtl:mr-1">
                <IoIosStar />
              </span>
            </span>
          </p>
        </div>
        <div className="mt-4 flex w-full flex-col justify-between space-y-3 xs:flex-row xs:space-y-0 sm:w-auto sm:flex-col sm:justify-end sm:space-y-3 md:mt-0">
          <span className="flex min-w-150 items-center sm:justify-end">
            <ins className="text-xl font-semibold text-[#1f2937] no-underline">
              $0.60
            </ins>
          </span>
          <div className="flex items-center space-x-6 rtl:space-x-reverse sm:justify-end">
            <div>
              <button className="whitespace-nowrap text-sm font-semibold text-[#009f7f] hover:text-[#019376]-hover hover:underline">
                Add to Cart
              </button>
            </div>
            <span className="flex h-7 w-px border-r border-dashed border-gray-300"></span>
            <button className="whitespace-nowrap text-sm font-semibold text-red-500 hover:underline sm:mt-0">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsMyWishList;
