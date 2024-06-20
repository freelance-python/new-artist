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
      <div className="px-[170px] max-[1024px]:px-[70px] max-[768px]:px-[10px] w-full pt-3.5 bg-[#f3f4f6]">
        <ItemsListHome />
        <div className="flex justify-center py-8 lg:pt-6">
          <button className="px-5 h-12 flex items-center bg-[#009f7f] hover:bg-[#019376] rounded-[5px] font-semibold text-sm text-[#FFFFFF]">
            Load More
          </button>
        </div>
      </div>
      <RightCartItems />
      <AutoModal />
    </>
  );
};

export default Homepage;
