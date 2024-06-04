import { useEffect } from "react";
import HeroSectionHomePage from "../../components/customerComponents/HeroSectionHomePage";
import CouponsCarousel from "../../components/customerComponents/CouponsCarousel";
import AutoModal from "../../components/customerComponents/AutoModal";
import ItemsListHome from "../../components/customerComponents/ItemsListHome";
import RightCartItems from "../../components/customerComponents/RightCartItems";

const Homepage = () => {
  useEffect(() => {
    document.title = "PickBazar | Grocery";
  });
  return (
    <>
      <HeroSectionHomePage />
      <CouponsCarousel />
      <ItemsListHome />
      <RightCartItems />
      <AutoModal />
    </>
  );
};

export default Homepage;
