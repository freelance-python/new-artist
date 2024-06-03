import { useEffect } from "react";
import HeroSectionHomePage from "../../components/customerComponents/HeroSectionHomePage";
import CouponsCarousel from "../../components/customerComponents/CouponsCarousel";

const Homepage = () => {
  useEffect(() => {
    document.title = "PickBazar | Grocery";
  });
  return (
    <>
      <HeroSectionHomePage />
      <CouponsCarousel />
    </>
  );
};

export default Homepage;
