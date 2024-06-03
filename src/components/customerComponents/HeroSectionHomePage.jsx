import { Box, Typography, TextField, Button } from "@mui/material";
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
  justifyContent: "center",
  padding: "20px",
  textAlign: "center",
});

const HeroSectionHomePage = () => {
  return (
    <SlideContainer>
      <SlideImage
        alt="Groceries Delivered in 90 Minute"
        src="https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/904/grocery.png"
      />
      <ContentContainer>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Groceries Delivered in 90 Minutes
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Get your healthy foods & snacks delivered at your doorsteps all day
          everyday
        </Typography>
        <Box sx={{ width: "100%", maxWidth: "400px", margin: "0 auto" }}>
          <form>
            <TextField
              id="search"
              label="Search your products from here"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
            />
            <Button variant="contained" color="primary" fullWidth>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 17.048 18"
                width="20"
                height="20"
                style={{ mr: 1 }}
              >
                <path
                  d="M380.321,383.992l3.225,3.218c.167.167.341.329.5.506a.894.894,0,1,1-1.286,1.238c-1.087-1.067-2.179-2.131-3.227-3.236a.924.924,0,0,0-1.325-.222,7.509,7.509,0,1,1-3.3-14.207,7.532,7.532,0,0,1,6,11.936C380.736,383.462,380.552,383.685,380.321,383.992Zm-5.537.521a5.707,5.707,0,1,0-5.675-5.72A5.675,5.675,0,0,0,374.784,384.513Z"
                  fill="currentColor"
                />
              </svg>
              Search
            </Button>
          </form>
        </Box>
      </ContentContainer>
    </SlideContainer>
  );
};

export default HeroSectionHomePage;
