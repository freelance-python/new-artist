import AddressDetails from "./address/AddressDetails";
import ContactProfile from "./contact/ContactProfile";
import UserInfo from "./user-info/UserInfo";

const ProfileSection = () => {
  return (
    <div>
      <UserInfo />
      <ContactProfile />
      <AddressDetails />
    </div>
  );
};

export default ProfileSection;
