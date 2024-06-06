import propTypes from "prop-types";
import ItemsListHome from "./ItemsListHome";

const ProductDetailsPage = ({ productData }) => {
  return (
    <div className="min-w-content relative inline-block max-w-full align-middle transition-all ltr:text-left rtl:text-right opacity-100 scale-100">
      <article className="rounded-lg bg-[#fff]">
        <div className="flex flex-col border-b border-border-200 border-opacity-70">
          <div className="flex">
            <div className="p-6 pt-10 md:w-1/2 lg:p-14 xl:p-16">
              <img src={productData?.image} alt="" className="h-96" />
            </div>
            <div className="flex flex-col items-start p-5 pt-10 md:w-1/2 lg:p-14 xl:p-16">
              <div className="w-full">
                <div className="flex w-full items-start justify-between space-x-8 rtl:space-x-reverse">
                  <h1 className="text-lg font-semibold tracking-tight text-heading md:text-xl xl:text-2xl cursor-pointer transition-colors hover:text-[#009f7f]">
                    {productData?.title}
                  </h1>
                  <div>
                    <button className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xl text-[#009f7f] transition-colors border-gray-300 mr-1">
                      <svg
                        viewBox="0 -28 512.001 512"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                      >
                        <path d="M256 455.516c-7.29 0-14.316-2.641-19.793-7.438-20.684-18.086-40.625-35.082-58.219-50.074l-.09-.078c-51.582-43.957-96.125-81.918-127.117-119.313C16.137 236.81 0 197.172 0 153.871c0-42.07 14.426-80.883 40.617-109.293C67.121 15.832 103.488 0 143.031 0c29.555 0 56.621 9.344 80.446 27.77C235.5 37.07 246.398 48.453 256 61.73c9.605-13.277 20.5-24.66 32.527-33.96C312.352 9.344 339.418 0 368.973 0c39.539 0 75.91 15.832 102.414 44.578C497.578 72.988 512 111.801 512 153.871c0 43.3-16.133 82.938-50.777 124.738-30.993 37.399-75.532 75.356-127.106 119.309-17.625 15.016-37.597 32.039-58.328 50.168a30.046 30.046 0 0 1-19.789 7.43zM143.031 29.992c-31.066 0-59.605 12.399-80.367 34.914-21.07 22.856-32.676 54.45-32.676 88.965 0 36.418 13.535 68.988 43.883 105.606 29.332 35.394 72.961 72.574 123.477 115.625l.093.078c17.66 15.05 37.68 32.113 58.516 50.332 20.961-18.254 41.012-35.344 58.707-50.418 50.512-43.051 94.137-80.223 123.469-115.617 30.344-36.618 43.879-69.188 43.879-105.606 0-34.516-11.606-66.11-32.676-88.965-20.758-22.515-49.3-34.914-80.363-34.914-22.758 0-43.653 7.235-62.102 21.5-16.441 12.719-27.894 28.797-34.61 40.047-3.452 5.785-9.53 9.238-16.261 9.238s-12.809-3.453-16.262-9.238c-6.71-11.25-18.164-27.328-34.61-40.047-18.448-14.265-39.343-21.5-62.097-21.5zm0 0"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="block text-sm font-normal text-body">
                    {productData?.weight}
                  </span>
                  <div className="inline-flex shrink-0 items-center rounded border border-[#009f7f] bg-[#009f7f] px-3 py-1 text-sm text-white">
                    4.67
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25.056 24"
                      className="h-2.5 w-2.5 ltr:ml-1 rtl:mr-1"
                    >
                      <g data-name="Group 36413" fill="currentColor">
                        <path
                          id="Path_22667"
                          data-name="Path 22667"
                          d="M19.474,34.679l-6.946-4.346L5.583,34.679a.734.734,0,0,1-1.1-.8L6.469,25.93.263,20.668a.735.735,0,0,1,.421-1.3l8.1-.566,3.064-7.6a.765.765,0,0,1,1.362,0l3.064,7.6,8.1.566a.735.735,0,0,1,.421,1.3L18.588,25.93l1.987,7.949a.734.734,0,0,1-1.1.8Z"
                          transform="translate(0 -10.792)"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="mt-3 text-sm leading-7 text-body md:mt-4 react-editor-description">
                  <p className="text-sm text-body react-editor-description">
                    An apple is a sweet, edible fruit produced by an apple tree
                    (Malus domestica). Apple trees are ... The skin of ripe
                    apples is generally red, yellow, green, pink, or russetted,
                    though many bi- or tri-colored cultivars may be found.
                  </p>
                </div>
                <span className="my-5 flex items-center md:my-10">
                  <ins className="text-2xl font-semibold text-[#009f7f] no-underline md:text-3xl">
                    $1.60
                  </ins>
                  <del className="text-sm font-normal text-gray-500 ltr:ml-2 rtl:mr-2 md:text-base">
                    $2.00
                  </del>
                </span>
                <div className="mt-6 flex flex-col items-center md:mt-6 lg:flex-row">
                  <div className="mb-3 w-full lg:mb-0 lg:max-w-[400px]">
                    <div>
                      <button className="flex w-full items-center justify-center rounded bg-[#009f7f] py-4 px-5 text-sm font-light text-[#fff] transition-colors duration-300 hover:bg-[#009f7f] focus:bg-[#009f7f] focus:outline-0 lg:text-base">
                        Add To Shopping Cart
                      </button>
                    </div>
                  </div>
                  <span className="whitespace-nowrap text-base text-body ltr:lg:ml-7 rtl:lg:mr-7">
                    18 pieces available
                  </span>
                </div>
                <div className="mt-4 flex w-full flex-row items-start border-t border-border-200 border-opacity-60 pt-4 md:mt-6 md:pt-6">
                  <span className="py-1 text-sm font-semibold capitalize text-heading ltr:mr-6 rtl:ml-6">
                    Categories
                  </span>
                  <div className="flex flex-row flex-wrap">
                    <button className="mb-2 whitespace-nowrap rounded border border-border-200 bg-transparent py-1 px-2.5 text-sm lowercase tracking-wider text-heading transition-colors hover:border-[#009f7f] hover:text-[#009f7f] focus:bg-opacity-100 focus:outline-0 ltr:mr-2 rtl:ml-2">
                      Fruits & Vegetables
                    </button>
                    <button className="mb-2 whitespace-nowrap rounded border border-border-200 bg-transparent py-1 px-2.5 text-sm lowercase tracking-wider text-heading transition-colors hover:border-[#009f7f] hover:text-[#009f7f] focus:bg-opacity-100 focus:outline-0 ltr:mr-2 rtl:ml-2">
                      Fruits
                    </button>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <span className="py-1 text-sm font-semibold capitalize text-heading ltr:mr-6 rtl:ml-6">
                    Sellers
                  </span>
                  <button className="text-sm tracking-wider text-accent underline transition hover:text-[#009f7f] hover:no-underline">
                    Grocery Shop
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-border-200 border-opacity-70 px-5 py-4 lg:px-16 lg:py-14">
            <h2 className="mb-4 text-lg font-semibold tracking-tight text-heading md:mb-6">
              Details
            </h2>
            <p className="text-sm text-body react-editor-description">
              An apple is a sweet, edible fruit produced by an apple tree (Malus
              domestica). Apple trees are ... The skin of ripe apples is
              generally red, yellow, green, pink, or russetted, though many bi-
              or tri-colored cultivars may be found.
            </p>
          </div>
        </div>
        <div className="p-5 md:pb-10 lg:p-14 xl:p-16">
          <h2 className="mb-6 text-lg font-semibold tracking-tight text-heading">
            Related Products
          </h2>
          <ItemsListHome />
        </div>
      </article>
    </div>
  );
};

export default ProductDetailsPage;

ProductDetailsPage.propTypes = {
  productData: propTypes.objectOf({
    image: propTypes.string,
  }),
};
