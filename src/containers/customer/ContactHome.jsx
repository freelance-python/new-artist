import { useEffect } from "react";
import ContainerContact from "../../components/customerComponents/contact/ContainerContact";

const ContactHome = () => {
  useEffect(() => {
    document.title = "PickBazar | Contact";
  });
  return (
    <div className="mt-20">
      <ContainerContact />
    </div>
  );
};

export default ContactHome;
