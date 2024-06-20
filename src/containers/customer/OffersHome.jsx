import { useEffect } from "react";
import CouponOffers from "../../components/customerComponents/offers/CouponOffers";
import OffersHeroSection from "../../components/customerComponents/offers/OffersHeroSection";
import RightCartItems from "../../components/customerComponents/RightCartItems";

const OffersHome = () => {
  useEffect(() => {
    document.title = "PickBazar | Offers";
  });
  return (
    <div className="mt-20">
      <OffersHeroSection />
      <CouponOffers />
      <RightCartItems />
    </div>
  );
};

export default OffersHome;
