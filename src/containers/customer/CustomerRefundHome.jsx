import { useEffect } from "react";
import CustomerHerosection from "../../components/customerComponents/refund/CustomerHerosection";
import PolicyContent from "../../components/customerComponents/refund/PolicyContent";

const CustomerRefundHome = () => {
  useEffect(() => {
    document.title = "PickBazar | Customer Refund Policy";
  });
  return (
    <div className="mt-20">
      <CustomerHerosection />
      <PolicyContent />
    </div>
  );
};

export default CustomerRefundHome;
