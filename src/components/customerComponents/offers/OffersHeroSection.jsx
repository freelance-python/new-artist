import { NavigateNext } from "@mui/icons-material";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { SlHome } from "react-icons/sl";

const OffersHeroSection = () => {
  return (
    <div className="flex w-full justify-center bg-[#e2e8f0] py-20 md:min-h-[250px] lg:min-h-[288px]">
      <div className="relative flex w-full flex-col items-center justify-center">
        <h1 className="text-center text-xl font-bold md:text-2xl lg:text-3xl 2xl:text-[40px] mb-3 block md:mb-4 lg:mb-5 2xl:mb-7">
          Offers
        </h1>
        <div className="flex items-center">
          <Breadcrumbs
            separator={<NavigateNext fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link
              key="1"
              underline="none"
              color="text.primary"
              href="/home"
              className="flex items-baseline gap-1 home-icon-offers-hero-section"
            >
              <SlHome size={14} />
              <Typography style={{ textDecoration: "none" }}>Home</Typography>
            </Link>
            <Typography key="2" color="inherit">
              Offers
            </Typography>
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
};

export default OffersHeroSection;
