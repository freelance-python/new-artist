import { useEffect } from "react";
import HeroSectionHomePage from "../../components/customerComponents/HeroSectionHomePage";

const Homepage = () => {
  useEffect(() => {
    document.title = "PickBazar | Grocery";
  });
  return (
    <>
      <HeroSectionHomePage />
    </>
  );
};

export default Homepage;
