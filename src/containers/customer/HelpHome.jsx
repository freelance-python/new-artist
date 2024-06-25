import { useEffect } from "react";
import HelpHeroSection from "../../components/customerComponents/help/HelpHeroSection";
import FaqAccordion from "../../components/customerComponents/help/FaqAccordion";

const FaqHome = () => {
  useEffect(() => {
    document.title = "PickBazar | Help";
  });
  return (
    <div className="mt-20">
      <HelpHeroSection />
      <div className="w-full max-w-screen-lg px-4 py-10 mx-auto">
        <div className="bg-[#fff] mb-2.5">
          <FaqAccordion />
        </div>
      </div>
    </div>
  );
};

export default FaqHome;
