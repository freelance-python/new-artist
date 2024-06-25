import { useEffect } from "react";
import VendorHerosection from "../../components/customerComponents/refund/VendorHerosection";
import PolicyContent from "../../components/customerComponents/refund/PolicyContent";

const VendorRefundHome = () => {
  useEffect(() => {
    document.title = "PickBazar | Vendor Refund Policy";
  });
  return (
    <div className="mt-20">
      <VendorHerosection />
      <PolicyContent />
    </div>
  );
};

export default VendorRefundHome;
