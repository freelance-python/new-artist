import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartButtonHome = () => {
  return (
    <button
      className="product-cart fixed top-1/2 z-40 -mt-12 hidden flex-col items-center justify-center rounded bg-[#009f7f] p-3 pt-3.5 text-sm font-semibold text-[#ffffff] shadow-900 transition-colors duration-200 hover:bg-[#019376] focus:outline-0 right-0 lg:flex"
      style={{ borderRadius: "8px 0px 0px 8px" }}
    >
      <span className="flex pb-0.5">
        <ShoppingCartIcon
          className="shrink-0"
          style={{ width: "14px", height: "16px" }}
        />
        <span className="flex ml-2 mr-2">2 Items</span>
      </span>
      <span className="w-full px-2 py-2 mt-3 rounded bg-[#ffffff] text-[#009f7f]">
        $180.00
      </span>
    </button>
  );
};

export default CartButtonHome;
