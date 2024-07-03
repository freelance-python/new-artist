import { IoLocationOutline } from "react-icons/io5";
import { shopEntries } from "./shopEntries";

const ShopsContainer = () => {
  return (
    <div className="min-h-screen bg-[#fff]">
      <div className="mx-auto flex w-full max-w-6xl flex-col p-8 px-5 pt-14 lg:px-6 2xl:px-8">
        <h3 className="mb-8 text-2xl font-bold text-[#1f2937]">All Shops</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shopEntries.map((shop) => (
            <a key={shop.id} href={`/shops/${shop.name.toLowerCase()}`}>
              <div className="relative flex items-center rounded border border-gray-200 p-5 gap-3">
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-300">
                  <img alt="Logo" src={shop.imageUrl} />
                </div>
                <div className="flex flex-col">
                  <h6 className="mb-2 text-lg font-semibold text-[#1f2937]">
                    {shop.name}
                  </h6>
                  <div className="flex gap-1 items-start">
                    <IoLocationOutline
                      className="text-[#6b7280] shrink-0"
                      size={16}
                    />
                    <p className="flex text-xs text-[#6b7280]">
                      {shop.address}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopsContainer;
