import { useEffect } from "react";
import CheckoutContainer from "../../components/customerComponents/checkout/CheckoutContainer";

const CheckOutPage = () => {
  useEffect(() => {
    document.title = "PickBazar";
  });
  return (
    <div className="mt-20">
      <CheckoutContainer />
    </div>
  );
};

export default CheckOutPage;
