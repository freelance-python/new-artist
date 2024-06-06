import { Box, Card, CardContent, CardMedia, Grid, Modal } from "@mui/material";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ProductDetailsPage from "./ProductDetailsPage";

const ItemsListHome = () => {
  const [counter, setCounter] = useState({});
  const [open, setOpen] = useState(false);
  const [productDetail, setProductDetail] = useState({});

  const handleDetailOpen = (e, product) => {
    setOpen(true);
    setProductDetail(product);
  };
  const handleDetailClose = () => {
    setOpen(false);
    setProductDetail({});
  };

  const handleIncreaseCounter = (index) => {
    let oldCounterObj = { ...counter };
    if (!oldCounterObj[index]) {
      oldCounterObj = {
        ...oldCounterObj,
        [index]: 0,
      };
    }
    oldCounterObj[index] += 1;
    setCounter(oldCounterObj);
  };

  const handleDecreaseCounter = (index) => {
    let oldCounterObj = { ...counter };
    oldCounterObj[index] -= 1;
    setCounter(oldCounterObj);
  };
  const texts = [
    {
      discountPercent: "20%",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=1920&q=75",
      title: "Apples",
      weight: "1lb",
      originalPrice: "$2.00",
      discountedPrice: "$1.60",
    },
    {
      discountPercent: "",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2%2FBabySpinach.jpg&w=1920&q=75",
      title: "Baby Spinach",
      weight: "2Pfund",
      originalPrice: "",
      discountedPrice: "$0.60",
    },
    {
      discountPercent: "",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F3%2Fblueberries.jpg&w=1920&q=75",
      title: "Blueberries",
      weight: "1lb",
      originalPrice: "",
      discountedPrice: "$3.00",
    },
    {
      discountPercent: "40%",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F4%2FBrusselsSprouts.jpg&w=1920&q=75",
      title: "Brussels Sprout",
      weight: "1lb",
      originalPrice: "$5.00",
      discountedPrice: "$3.00",
    },
    {
      discountPercent: "17%",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F5%2FCelerySticks.jpg&w=1920&q=75",
      title: "Celery Stick",
      weight: "1lb",
      originalPrice: "$6.00",
      discountedPrice: "$5.00",
    },
    {
      discountPercent: "17%",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F6%2Fclementines.jpg&w=1920&q=75",
      title: "Clementines",
      weight: "1lb",
      originalPrice: "$3.00",
      discountedPrice: "$2.50",
    },
    {
      discountPercent: "20%",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F7%2FCorn.jpg&w=1920&q=75",
      title: "Sweet Corn",
      weight: "1lb",
      originalPrice: "$5.00",
      discountedPrice: "$4.00",
    },
    {
      discountPercent: "",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F8%2FCucumber.jpg&w=1920&q=75",
      title: "Cucumber",
      weight: "2.5lb",
      originalPrice: "",
      discountedPrice: "$2.50",
    },
    {
      discountPercent: "20%",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F10%2FDates.jpg&w=1920&q=75",
      title: "Dates",
      weight: "1.5lb",
      originalPrice: "$10.00",
      discountedPrice: "$8.00",
    },
    {
      discountPercent: "20%",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F11%2FFrenchGreenBeans.jpg&w=1920&q=75",
      title: "French Green Beans",
      weight: "0.5lb",
      originalPrice: "$1.50",
      discountedPrice: "$1.20",
    },
    {
      discountPercent: "20%",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F12%2FGreenBeans.jpg&w=1920&q=75",
      title: "Green Beans",
      weight: "1lb",
      originalPrice: "$5.00",
      discountedPrice: "$4.00",
    },
    {
      discountPercent: "25%",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F13%2FGreenLimes.jpg&w=1920&q=75",
      title: "Lime",
      weight: "4pc(s)",
      originalPrice: "$2.00",
      discountedPrice: "$1.50",
    },
    {
      discountPercent: "",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F14%2FMangoes.jpg&w=1920&q=75",
      title: "Mango",
      weight: "1lb",
      originalPrice: "",
      discountedPrice: "$2.50",
    },
    {
      discountPercent: "17%",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F15%2FMiniPeppers.jpg&w=1920&q=75",
      title: "Pepper",
      weight: "1lb",
      originalPrice: "$6.00",
      discountedPrice: "$5.00",
    },
    {
      discountPercent: "13%",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F16%2Fpears.jpg&w=1920&q=75",
      title: "Pears",
      weight: "1lb",
      originalPrice: "$4.00",
      discountedPrice: "$3.50",
    },
    {
      discountPercent: "12%",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F17%2FPeeled-Carrots.jpg&w=1920&q=75",
      title: "Peeled Baby Carrot",
      weight: "1lb",
      originalPrice: "$2.50",
      discountedPrice: "$2.20",
    },
    {
      discountPercent: "10%",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F18%2FRedCherries.jpg&w=1920&q=75",
      title: "Cherry",
      weight: "1lb",
      originalPrice: "$2.00",
      discountedPrice: "$1.80",
    },
    {
      discountPercent: "20%",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F19%2Fstrawberry.jpg&w=1920&q=75",
      title: "Strawberry",
      weight: "1lb",
      originalPrice: "$10.00",
      discountedPrice: "$8.00",
    },
    {
      discountPercent: "20%",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F20%2FVeggiePlatter.jpg&w=1920&q=75",
      title: "Mix Vegetable Platter",
      weight: "0.5lb",
      originalPrice: "$4.00",
      discountedPrice: "$3.20",
    },
    {
      discountPercent: "20%",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F21%2FYellow-Limes.jpg&w=1920&q=75",
      title: "Lemon",
      weight: "4pc(s)",
      originalPrice: "$1.50",
      discountedPrice: "$1.20",
    },
    {
      discountPercent: "",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F183%2FSignatureSalmon_fstp4m.jpg&w=1920&q=75",
      title: "Signature Salmon",
      weight: "1Pfund",
      originalPrice: "",
      discountedPrice: "$4.95",
    },
    {
      discountPercent: "25%",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F184%2Fcodfillet_u0mti1.jpg&w=1920&q=75",
      title: "Cod Fillet",
      weight: "1lb",
      originalPrice: "$10.00",
      discountedPrice: "$7.50",
    },
    {
      discountPercent: "25%",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F185%2Fswordfish_smniuv.jpg&w=1920&q=75",
      title: "Swordfish Fillet",
      weight: "1.5lb",
      originalPrice: "$10.00",
      discountedPrice: "$7.50",
    },
    {
      discountPercent: "20%",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F186%2Fhalibut_jaz7ju.jpg&w=1920&q=75",
      title: "Halibut Fillet",
      weight: "2lb",
      originalPrice: "$15.00",
      discountedPrice: "$12.00",
    },
    {
      discountPercent: "",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F187%2FTilapiaFillet_a2urhk.jpg&w=1920&q=75",
      title: "Tilapia Fillet",
      weight: "1lb",
      originalPrice: "",
      discountedPrice: "$7.89",
    },
    {
      discountPercent: "",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F188%2Fbeef_xkxhnb.jpg&w=1920&q=75",
      title: "Fresh Beef",
      weight: "1lb",
      originalPrice: "",
      discountedPrice: "$6.00",
    },
    {
      discountPercent: "12%",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F189%2Fsliced_turkey_breast_szb8jg.jpg&w=1920&q=75",
      title: "Sliced Turkey Breast",
      weight: "1lb",
      originalPrice: "$8.50",
      discountedPrice: "$7.50",
    },
    {
      discountPercent: "",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F190%2Fchicken_thigh_yrdfwh.jpg&w=1920&q=75",
      title: "Chicken Thighs",
      weight: "5lb",
      originalPrice: "",
      discountedPrice: "$7.89",
    },
    {
      discountPercent: "",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F191%2Fchicken_brest_ribcxo.jpg&w=1920&q=75",
      title: "Chicken Breast",
      weight: "5lb",
      originalPrice: "",
      discountedPrice: "$9.00",
    },
    {
      discountPercent: "20%",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F192%2Fsteak_okxpjo.jpg&w=1920&q=75",
      title: "Beef Steak",
      weight: "5lb",
      originalPrice: "$15.00",
      discountedPrice: "$12.00",
    },
  ];
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    overflowY: "scroll",
    height: "95vh",
    scrollbarWidth: "none",
    "&:focus-visible": {
      outline: "none !important",
    },
  };
  return (
    <>
      <Grid
        container
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "12px",
        }}
      >
        {texts.map((product, index) => (
          <Grid key={index} item>
            <Card className="h-full overflow-hidden rounded bg-[#fff] duration-200 shadow-none">
              <div className="relative flex h-68 w-auto items-center justify-center sm:h-72">
                <CardMedia
                  onClick={(e) => handleDetailOpen(e, product)}
                  component="img"
                  image={product.image}
                  alt={product.title}
                />

                <div className="absolute top-3 right-3 rounded-full bg-yellow-500 px-1.5 text-xs font-semibold leading-6 text-[#fff] sm:px-2 md:top-4 md:px-2.5">
                  {product.discountPercent}
                </div>
              </div>
              <CardContent>
                <h3 className="mb-2 text-sm font-semibold truncate text-heading">
                  {product.title}
                </h3>
                <p className="text-xs text-[#6c757d]">{product.weight}</p>
                <div className="relative flex items-center justify-between mt-7 min-h-6">
                  <div className="relative">
                    <del className="absolute text-xs italic text-opacity-75 -top-4 text-[#6c757d] md:-top-5">
                      {product.originalPrice}
                    </del>
                    <span className="text-sm font-semibold text-[#019376] md:text-base">
                      {product.discountedPrice}
                    </span>
                  </div>
                  {counter[index] > 0 ? (
                    <div className="flex overflow-hidden order-5 sm:order-4 w-9 sm:w-24 h-24 sm:h-10 bg-[#009f7f] text-[#fff] rounded-full flex-col-reverse sm:flex-row absolute sm:relative bottom-0 sm:bottom-auto ltr:right-0 rtl:left-0 ltr:sm:right-auto ltr:sm:left-auto">
                      <button
                        className="cursor-pointer p-2 transition-colors duration-200 hover:bg-[#019376] focus:outline-0 px-3 py-3 sm:px-2"
                        onClick={() => handleDecreaseCounter(index)}
                      >
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-3 w-3 stroke-2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20 12H4"
                          ></path>
                        </svg>
                      </button>
                      <div className="flex flex-1 items-center justify-center px-3 text-sm font-semibold">
                        {counter[index]}
                      </div>
                      <button
                        className="cursor-pointer p-2 transition-colors duration-200 hover:bg-[#019376] focus:outline-0 px-3 py-3 sm:px-2"
                        onClick={() => handleIncreaseCounter(index)}
                      >
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="md:w-4.5 h-3.5 w-3.5 stroke-2.5 md:h-4.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div className="flex w-24 h-10">
                      <button
                        className="order-5 flex items-center justify-center rounded-full border-2 border-[#f3f4f6] bg-[#fff] px-3 py-2 text-sm font-semibold text-[#019376] transition-colors duration-300 hover:border-[#019376] hover:bg-[#019376] hover:text-[#fff] focus:border-[#019376] focus:bg-[#019376] focus:text-[#fff] focus:outline-0 sm:order-4 sm:justify-start sm:px-5"
                        onClick={() => handleIncreaseCounter(index)}
                      >
                        <ShoppingCartIcon
                          className="shrink-0"
                          style={{ width: "16px", height: "16px" }}
                        />
                        <span className="flex ml-2 mr-2">Cart</span>
                      </button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Modal open={open} onClose={handleDetailClose}>
          <Box
            sx={style}
            className="w-full max-w-6xl bg-light md:rounded-xl xl:min-w-[1152px]"
          >
            <ProductDetailsPage productData={productDetail} />
          </Box>
        </Modal>
      </Grid>
    </>
  );
};

export default ItemsListHome;
