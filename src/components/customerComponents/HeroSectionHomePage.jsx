import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { IoSearchSharp } from "react-icons/io5";

const SlideContainer = styled("div")({
  width: "100%",
  position: "relative",
  height: "100vh",
});

const SlideImage = styled("img")({
  position: "absolute",
  height: "100%",
  width: "100%",
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
});

const ContentContainer = styled("div")({
  position: "absolute",
  inset: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "32px",
  justifyContent: "center",
  padding: "20px",
  textAlign: "center",
});

const HeroSectionHomePage = () => {
  return (
    <SlideContainer>
      <SlideImage
        alt="Groceries Delivered in 90 Minute"
        src="../../../src/assets/BgHeroSectionHomepage.webp"
      />
      <ContentContainer>
        <h1 className="text-2xl font-bold tracking-tight text-[#1f2937] lg:text-4xl xl:text-5xl">
          Groceries Delivered in 90 Minutes
        </h1>
        <p className="text-sm text-[#1f2937] lg:text-base xl:text-lg">
          Get your healthy foods & snacks delivered at your doorsteps all day
          everyday
        </p>
        <Box className="w-full max-w-3xl">
          <div className="input-group-box-hero-home relative flex rounded md:rounded-lg h-14 shadow-900">
            <input
              type="text"
              className="input-search-hero-home"
              id="text"
              placeholder="Search your products from here"
            />
            <button className="button-submit-hero-home flex h-full gap-2 items-center justify-center rounded-lg px-8 font-semibold transition-colors duration-200 focus:outline-0 ltr:rounded-tl-none ltr:rounded-bl-none rtl:rounded-tr-none rtl:rounded-br-none">
              <IoSearchSharp size={20} />
              Search
            </button>
          </div>
        </Box>
      </ContentContainer>
    </SlideContainer>
  );
};

export default HeroSectionHomePage;
