import { useEffect } from "react";
import HeroSectionHomePage from "../../components/customerComponents/HeroSectionHomePage";
import CouponsCarousel from "../../components/customerComponents/CouponsCarousel";
import CartButtonHome from "../../components/customerComponents/CartButtonHome";
import AutoModal from "../../components/customerComponents/AutoModal";

const Homepage = () => {
  useEffect(() => {
    document.title = "PickBazar | Grocery";
  });
  return (
    <>
      <HeroSectionHomePage />
      <CouponsCarousel />
      <CartButtonHome />
      <AutoModal />
    </>
  );
};

export default Homepage;
