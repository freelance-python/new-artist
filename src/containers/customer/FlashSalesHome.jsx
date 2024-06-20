import { useEffect } from "react";
import FlashSalesHerosection from "../../components/customerComponents/flash-sales/FlashSalesHerosection";
import SaleCardContainer from "../../components/customerComponents/flash-sales/SaleCardContainer";

const FlashSalesHome = () => {
  useEffect(() => {
    document.title = "PickBazar";
  });
  return (
    <div className="mt-20">
      <FlashSalesHerosection />
      <SaleCardContainer />
    </div>
  );
};

export default FlashSalesHome;
