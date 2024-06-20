import { Grid, Link } from "@mui/material";
import SocialContactFooter from "./SocialContactFooter";
import ExploreFooter from "./ExploreFooter";
import ServiceFooter from "./ServiceFooter";
import InformationFooter from "./InformationFooter";
import SubscribeFormFooter from "./SubscribeFormFooter";

const FooterCustomer = () => {
  return (
    <div className="bg-[#fff] px-5 md:px-10 lg:px-[50px] xl:px-16">
      <Grid
        container
        spacing={6}
        justifyContent="space-between"
        className="pt-16 lg:pt-24 lg:pb-16"
      >
        <Grid item xs={12} md={3} lg={3}>
          <SocialContactFooter />
        </Grid>
        <Grid item xs={12} md={3} lg={2}>
          <ExploreFooter />
        </Grid>
        <Grid item xs={12} md={3} lg={2}>
          <ServiceFooter />
        </Grid>
        <Grid item xs={12} md={3} lg={2}>
          <InformationFooter />
        </Grid>
        <Grid item xs={12} md={6} lg={2.5}>
          <SubscribeFormFooter />
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className="pt-8 pb-20 lg:pb-12 border-t border-gray-200"
      >
        <span className="footerParaText flex text-[#1f2937] text-[14px]">
          <p>©2024&nbsp;</p>
          <Link href="https://pickbazar.redq.io" underline="none">
            <p className="font-medium text-[#1f2937]">Pickbazar</p>
          </Link>
          . Copyright © REDQ. All rights reserved worldwide.&nbsp;
          <Link href="https://redq.io" underline="none">
            <p className="font-medium text-[#1f2937]">REDQ</p>
          </Link>
        </span>
      </Grid>
    </div>
  );
};

export default FooterCustomer;
