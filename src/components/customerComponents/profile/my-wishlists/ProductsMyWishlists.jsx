import propTypes from "prop-types";
import ItemsListHome from "../../ItemsListHome";
import { useState } from "react";
import clsx from "clsx";
import { Box } from "@mui/material";
import { useEffect } from "react";
import CarouselProductDetailImage from "../../CarouselProductDetailImage";
import { FiMinus } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";

const ProductsMyWishlists = ({
  productData,
  cartCounter,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [productDetailScroll, setProductDetailScroll] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleScroll = (event) => {
      const isScrolled = event.target.scrollTop;
      setProductDetailScroll(isScrolled > 100);
    };

    const productDetailModal = document.getElementsByClassName(
      "MuiDialog-scrollBody"
    );
    if (productDetailModal.length > 0) {
      productDetailModal[0].addEventListener("scroll", handleScroll);
    }

    return () => {
      if (productDetailModal.length > 0) {
        productDetailModal[0].removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const addToCartButton = (
    <>
      {cartCounter[productData.index] > 0 ? (
        <div className="overflow-hidden w-full h-14 rounded text-[#fff] bg-[#009f7f] inline-flex justify-between">
          <button
            className="cursor-pointer p-2 transition-colors duration-200 hover:bg-[#019376] focus:outline-0 px-5"
            onClick={() => onDecreaseQuantity(productData.index)}
          >
            <FiMinus />
          </button>
          <div className="flex flex-1 items-center justify-center px-3 text-sm font-semibold">
            {cartCounter[productData.index]}
          </div>
          <button
            className="cursor-pointer p-2 transition-colors duration-200 hover:bg-[#019376] focus:outline-0 px-5"
            onClick={() => onIncreaseQuantity(productData.index)}
          >
            <IoAdd />
          </button>
        </div>
      ) : (
        <button
          onClick={() => onIncreaseQuantity(productData.index)}
          className="flex w-full items-center justify-center rounded bg-[#009f7f] py-4 px-5 text-sm font-light text-[#fff] transition-colors duration-300 hover:bg-[#009f7f] focus:bg-[#009f7f] focus:outline-0 lg:text-base"
        >
          Add To Shopping Cart
        </button>
      )}
    </>
  );

  return (
    <>
      {productDetailScroll > 100 ? (
        <Box className="w-full max-w-6xl bg-white xl:min-w-[1152px] fixed top-0 z-10 p-4 flex items-center justify-between shadow">
          <div className="flex">
            <div className="rounded border border-[##6b7280] border-opacity-70 h-28 w-28">
              <img alt="Apples" src={productData.image} />
            </div>
            <div className="flex flex-col justify-center px-8">
              <h3
                className="cursor-pointer truncate text-lg font-semibold tracking-tight text-[#1f2937] transition-colors hover:text-[#009f7f] lg:text-xl"
                title="Apples"
              >
                {productData?.title}
              </h3>
              <span className="mt-2 block text-sm font-normal text-[#6b7280]">
                {productData?.weight}
              </span>
            </div>
          </div>
          <div className="flex w-full max-w-max gap-4">
            <span className="flex items-center gap-4">
              <p className="text-xl font-semibold text-[#009f7f] no-underline lg:text-2xl">
                {productData?.discountedPrice}
              </p>
              <p className="text-sm font-normal text-[#6b7280] lg:text-base">
                {productData?.originalPrice}
              </p>
            </span>
            <div className="mb-3 w-full lg:mb-0 lg:max-w-[400px]">
              {addToCartButton}
            </div>
          </div>
        </Box>
      ) : null}
      <div className="min-w-content relative inline-block max-w-full align-middle transition-all ltr:text-left rtl:text-right opacity-100 scale-100">
        <div className="rounded-lg bg-[#fff]">
          <div className="flex flex-col border-b border-border-200 border-opacity-70">
            <div className="flex">
              <div className="p-6 pt-10 md:w-1/2 lg:p-14 xl:p-16">
                <CarouselProductDetailImage
                  imagesData={Array(8).fill(productData?.image)}
                />
              </div>
              <div className="flex flex-col items-start p-5 pt-10 md:w-1/2 lg:p-14 xl:p-16">
                <div className="w-full">
                  <div className="flex w-full items-start justify-between space-x-8 rtl:space-x-reverse">
                    <h1 className="text-lg font-semibold tracking-tight text-[#1f2937] md:text-xl xl:text-2xl cursor-pointer transition-colors hover:text-[#009f7f]">
                      {productData?.title}
                    </h1>
                    <div>
                      <button className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xl text-[#009f7f] transition-colors border-gray-300 mr-1">
                        <IoMdHeartEmpty />
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="block text-sm font-normal text-[#6b7280]">
                      {productData?.weight}
                    </span>
                    <div className="inline-flex shrink-0 items-center rounded border border-[#009f7f] bg-[#009f7f] px-3 py-1 text-sm text-white">
                      4.67
                      <IoIosStar />
                    </div>
                  </div>
                  <div className="mt-3 md:mt-4">
                    <p
                      className={clsx("text-sm text-[#6b7280] leading-7", {
                        "text-ellipsis line-clamp-2": !isExpanded,
                      })}
                    >
                      An apple is a sweet, edible fruit produced by an apple
                      tree (Malus domestica). Apple trees are ... The skin of
                      ripe apples is generally red, yellow, green, pink, or
                      russetted, though many bi- or tri-colored cultivars may be
                      found.
                    </p>
                    <button
                      onClick={toggleText}
                      className="mt-1 inline-block font-bold text-[#009f7f]"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  </div>
                  <span className="my-5 flex gap-2 items-center md:my-10">
                    <p className="text-2xl font-semibold text-[#009f7f] no-underline md:text-3xl">
                      {productData?.discountedPrice}
                    </p>
                    <p className="text-sm font-normal text-gray-500 ltr:ml-2 rtl:mr-2 md:text-base">
                      {productData?.originalPrice}
                    </p>
                  </span>
                  <div className="mt-6 flex flex-col gap-6 items-center md:mt-6 lg:flex-row">
                    <div className="mb-3 w-full lg:mb-0 lg:max-w-[400px]">
                      {addToCartButton}
                    </div>
                    <span className="whitespace-nowrap text-base text-[#6b7280] ltr:lg:ml-7 rtl:lg:mr-7">
                      18 pieces available
                    </span>
                  </div>
                  <div className="mt-4 flex gap-6 w-full flex-row items-start border-t border-border-200 border-opacity-60 pt-4 md:mt-6 md:pt-6">
                    <span className="py-1 text-sm font-semibold capitalize text-[#1f2937] ">
                      Categories
                    </span>
                    <div className="flex gap-6 flex-row flex-wrap">
                      <button className="mb-2 whitespace-nowrap rounded border border-border-200 bg-transparent py-1 px-2.5 text-sm lowercase tracking-wider text-[#1f2937] transition-colors hover:border-[#009f7f] hover:text-[#009f7f] focus:bg-opacity-100 focus:outline-0 ltr:mr-2 rtl:ml-2">
                        Fruits & Vegetables
                      </button>
                      <button className="mb-2 whitespace-nowrap rounded border border-border-200 bg-transparent py-1 px-2.5 text-sm lowercase tracking-wider text-[#1f2937] transition-colors hover:border-[#009f7f] hover:text-[#009f7f] focus:bg-opacity-100 focus:outline-0 ltr:mr-2 rtl:ml-2">
                        Fruits
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-6">
                    <span className="py-1 text-sm font-semibold capitalize text-[#1f2937]">
                      Sellers
                    </span>
                    <button className="text-sm tracking-wider text-[#009f7f] underline transition hover:text-[#009f7f] hover:no-underline">
                      Grocery Shop
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-border-200 border-opacity-70 px-5 py-4 lg:px-16 lg:py-14">
              <h2 className="mb-4 text-lg font-semibold tracking-tight text-[#1f2937] md:mb-6">
                Details
              </h2>
              <p className="text-sm text-[#6b7280]">
                An apple is a sweet, edible fruit produced by an apple tree
                (Malus domestica). Apple trees are ... The skin of ripe apples
                is generally red, yellow, green, pink, or russetted, though many
                bi- or tri-colored cultivars may be found.
              </p>
            </div>
          </div>
          <div className="p-5 md:pb-10 lg:p-14 xl:p-16">
            <h2 className="mb-6 text-lg font-semibold tracking-tight text-[#1f2937]">
              Related Products
            </h2>
            <ItemsListHome hideProductOfIndex={productData.index} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsMyWishlists;

ProductsMyWishlists.propTypes = {
  productData: propTypes.object.isRequired,
  cartCounter: propTypes.object.isRequired,
  onIncreaseQuantity: propTypes.func.isRequired,
  onDecreaseQuantity: propTypes.func.isRequired,
};
