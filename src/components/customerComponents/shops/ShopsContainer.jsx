import { IoLocationOutline } from "react-icons/io5";

const shopEntries = [
  {
    id: 1,
    name: "Medicine",
    imageUrl:
      "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1786/conversions/Medicine-thumbnail.jpg",
    address:
      "East Avenue 1743, West Tower, New York, Manhattan, 12332, United States",
  },
  {
    id: 2,
    name: "Gadget",
    imageUrl:
      "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1722/conversions/Gadget-thumbnail.jpg",
    address: "1740 Bedford Street, Alabama, Michigan, 35203, USA",
  },
  {
    id: 3,
    name: "Books Shop",
    imageUrl:
      "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1613/conversions/Publisher-logo-thumbnail.jpg",
    address: "44444, California, zurich, 8021, Switzerland",
  },
  {
    id: 4,
    name: "Grocery Shop",
    imageUrl:
      "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg",
    address: "1986 Spinnaker Lane, Illinois, Freeport, 61032, USA",
  },
  {
    id: 5,
    name: "Bakery Shop",
    imageUrl:
      "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/890/conversions/bakery-thumbnail.jpg",
    address: "4422 Fort Street, Carolina, Rocky Mount, 27801, USA",
  },
  {
    id: 6,
    name: "Makeup Shop",
    imageUrl:
      "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/889/conversions/Makeup-thumbnail.jpg",
    address: "2960 Rose Avenue, Louisiana, Metairie, 70001, USA",
  },
  {
    id: 7,
    name: "Bags Shop",
    imageUrl:
      "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/886/conversions/Backpack-thumbnail.jpg",
    address: "1740 Bedford Street, Alabama, Michigan, 35203, USA",
  },
  {
    id: 8,
    name: "Clothing Shop",
    imageUrl:
      "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/894/conversions/fashion-thumbnail.jpg",
    address: "4885 Spring Street, Illinois, Lincoln, 62656, USA",
  },
  {
    id: 9,
    name: "Furniture Shop",
    imageUrl:
      "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/882/conversions/Furniture-thumbnail.jpg",
    address: "588 Finwood Road, New Jersey, East Dover, 08753, USA",
  },
];

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
