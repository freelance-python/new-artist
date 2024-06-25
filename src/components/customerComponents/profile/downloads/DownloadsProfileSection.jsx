const downloadItems = [
  {
    id: 1,
    imgSrc: "/_next/static/media/product.ba64d04a.svg",
    imgAlt: "text",
    href: "/products/undefined",
    title: "",
    key: "fwNr6w0EriFVo3uW",
    purchasedOn: "10.01.2022",
  },
  {
    id: 2,
    imgSrc:
      "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1672/Children-Literature-2.jpg",
    imgAlt: "Children Literature",
    href: "/products/the-sifi-third-part",
    title: "The Bedtime Stories Part One",
    key: "1PDOeYosO0mZaEDY",
    purchasedOn: "10.01.2022",
  },
  {
    id: 3,
    imgSrc:
      "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1622/science-fiction.jpg",
    imgAlt: "Science Fiction",
    href: "/products/the-hidden-planet",
    title: "The Hidden Planet",
    key: "BcsQKE7Omi0cFAsG",
    purchasedOn: "10.01.2022",
  },
  {
    id: 4,
    imgSrc:
      "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1636/Romantic-Books-7.jpg",
    imgAlt: "Romantic Books",
    href: "/products/greddy-love",
    title: "Greddy Love",
    key: "Qo93tE5iosQAT35N",
    purchasedOn: "12.01.2022",
  },
  {
    id: 5,
    imgSrc:
      "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1636/Romantic-Books-7.jpg",
    imgAlt: "Romantic Books",
    href: "/products/greddy-love",
    title: "Greddy Love",
    key: "Qo93tE5iosQAT35N",
    purchasedOn: "12.01.2022",
  },
  {
    id: 6,
    imgSrc:
      "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1655/Horror-Books.jpg",
    imgAlt: "Horror Books",
    href: "/products/shadow-women-final-chapter",
    title: "Shadow Women Final Chapter",
    key: "F05bacPM5eH6XxoV",
    purchasedOn: "13.01.2022",
  },
  {
    id: 7,
    imgSrc:
      "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1615/Thriller-1.jpg",
    imgAlt: "Thriller",
    href: "/products/fleash-eater",
    title: "Fleash Eater",
    key: "SXywhsP1qhh9I1Mu",
    purchasedOn: "15.01.2022",
  },
  {
    id: 8,
    imgSrc:
      "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1672/Children-Literature-2.jpg",
    imgAlt: "Children Literature",
    href: "/products/the-sifi-third-part",
    title: "The Bedtime Stories Part One",
    key: "NrW3x599kP67buWk",
    purchasedOn: "15.01.2022",
  },
  {
    id: 9,
    imgSrc:
      "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1636/Romantic-Books-7.jpg",
    imgAlt: "Romantic Books",
    href: "/products/greddy-love",
    title: "Greddy Love",
    key: "Qo93tE5iosQAT35N",
    purchasedOn: "12.01.2022",
  },
  {
    id: 10,
    imgSrc:
      "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1636/Romantic-Books-7.jpg",
    imgAlt: "Romantic Books",
    href: "/products/greddy-love",
    title: "Greddy Love",
    key: "Qo93tE5iosQAT35N",
    purchasedOn: "12.01.2022",
  },
];

const DownloadsProfileSection = () => {
  return (
    <div className="p-5 md:p-8 bg-[#fff] shadow rounded relative w-full self-stretch sm:shadow">
      <h1 className="mb-8 text-center text-lg font-semibold text-[#1f2937] sm:mb-10 sm:text-xl">
        Downloads
      </h1>
      {downloadItems.map((item) => (
        <div
          key={item.id}
          className="flex w-full space-x-4 border-b border-gray-200 py-5 first:pt-0 last:border-0 last:pb-0 rtl:space-x-reverse sm:space-x-5"
        >
          <div className="relative flex h-16 w-16 shrink-0 items-center justify-center sm:h-20 sm:w-20">
            <img
              alt={item.imgAlt}
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              src={item.imgSrc}
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                color: "transparent",
              }}
            />
          </div>
          <div className="flex w-full flex-col items-start sm:flex-row sm:justify-between sm:space-x-4 rtl:sm:space-x-reverse">
            <div className="flex w-full flex-col space-y-1 sm:items-start">
              <a
                className="text-base font-semibold text-[#1f2937] transition-colors hover:text-[#009f7f]"
                href={item.href}
              >
                {item.title}
              </a>
              <p className="space-y-1 sm:space-x-1 sm:space-y-0 rtl:sm:space-x-reverse">
                <span className="block text-sm font-semibold text-[#333333] sm:inline-block sm:w-auto">
                  Key: {item.key}
                </span>
                <span className="hidden text-sm text-[#6b7280] sm:inline-block">
                  |
                </span>
                <span className="block text-sm text-[#6b7280] sm:inline-block">
                  Purchased on {item.purchasedOn}
                </span>
              </p>
            </div>
            <span className="order-2 mt-5 w-full max-w-full shrink-0 basis-full sm:order-1 lg:mt-0 lg:w-auto lg:max-w-none lg:basis-auto lg:ltr:ml-auto lg:rtl:mr-auto">
              <button className="inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-0 focus:shadow focus:ring-1 focus:ring-accent-700 bg-[#009f7f] text-[#fff] border border-transparent hover:bg-accent-hover px-5 py-0 h-12 ltr:ml-auto rtl:mr-auto">
                Pay Now
              </button>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DownloadsProfileSection;
