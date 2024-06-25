import AddressDetails from "./address/AddressDetails";
import ContactProfile from "./contact/ContactProfile";
import UserInfo from "./user-info/UserInfo";

const RightProfileSection = () => {
  return (
    <div>
      <UserInfo />
      <ContactProfile />
      <AddressDetails />
    </div>
  );
};

export default RightProfileSection;
