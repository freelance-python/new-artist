import ContactProfile from "../../customerComponents/profile/profile-section/contact/ContactProfile";
import AddressDetails from "../profile/profile-section/address/AddressDetails";
import DeliveryScheduleCheckOut from "./DeliveryScheduleCheckOut";
import OrderNoteCheckOut from "./OrderNoteCheckOut";

const OrderInfo = () => {
  return (
    <div className="w-full space-y-6 lg:max-w-2xl">
      <ContactProfile showCountBadge={true} count={1} />
      <AddressDetails showCountBadge={true} count={2} />
      <DeliveryScheduleCheckOut />
      <OrderNoteCheckOut />
    </div>
  );
};

export default OrderInfo;
