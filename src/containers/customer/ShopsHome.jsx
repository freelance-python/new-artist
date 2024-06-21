import { useEffect } from "react";
import ShopsContainer from "../../components/customerComponents/shops/ShopsContainer";

const ShopsHome = () => {
  useEffect(() => {
    document.title = "PickBazar";
  });
  return (
    <div className="mt-20">
      <ShopsContainer />
    </div>
  );
};

export default ShopsHome;
