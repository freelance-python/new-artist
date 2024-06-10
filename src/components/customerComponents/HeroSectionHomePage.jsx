import { Box } from "@mui/material";
import { styled } from "@mui/system";

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
        <h1 className="text-2xl font-bold tracking-tight text-heading lg:text-4xl xl:text-5xl">
          Groceries Delivered in 90 Minutes
        </h1>
        <p className="text-sm text-heading lg:text-base xl:text-lg">
          Get your healthy foods & snacks delivered at your doorsteps all day
          everyday
        </p>
        <Box className="w-full max-w-3xl">
          <div className="input-group-box-hero-home relative flex rounded md:rounded-lg h-14 shadow-900">
            <input
              type="email"
              className="input-search-hero-home"
              id="Email"
              name="Email"
              placeholder="Search your products from here"
            />
            <button className="button--submit-hero-home flex h-full gap-2 items-center justify-center rounded-lg px-8 font-semibold transition-colors duration-200 focus:outline-0 ltr:rounded-tl-none ltr:rounded-bl-none rtl:rounded-tr-none rtl:rounded-br-none">
              <svg
                viewBox="0 0 17.048 18"
                className="h-4 w-4 ltr:mr-2.5 rtl:ml-2.5"
              >
                <path
                  d="M380.321,383.992l3.225,3.218c.167.167.341.329.5.506a.894.894,0,1,1-1.286,1.238c-1.087-1.067-2.179-2.131-3.227-3.236a.924.924,0,0,0-1.325-.222,7.509,7.509,0,1,1-3.3-14.207,7.532,7.532,0,0,1,6,11.936C380.736,383.462,380.552,383.685,380.321,383.992Zm-5.537.521a5.707,5.707,0,1,0-5.675-5.72A5.675,5.675,0,0,0,374.784,384.513Z"
                  transform="translate(-367.297 -371.285)"
                  fill="currentColor"
                ></path>
              </svg>
              Search
            </button>
          </div>
        </Box>
      </ContentContainer>
    </SlideContainer>
  );
};

export default HeroSectionHomePage;
