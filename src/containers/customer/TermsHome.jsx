import { useEffect } from "react";
import TermsHerosection from "../../components/customerComponents/terms/TermsHerosection";
import TermsAndConditions from "../../components/customerComponents/terms/TermsAndConditions";

const TermsHome = () => {
  useEffect(() => {
    document.title = "PickBazar | Terms";
  });
  return (
    <div className="mt-20">
      <TermsHerosection />
      <TermsAndConditions />
    </div>
  );
};

export default TermsHome;
