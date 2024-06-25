import AddressDetails from "./profile-section/address/AddressDetails";
import ContactProfile from "./profile-section/contact/ContactProfile";
import UserInfo from "./profile-section/user-info/UserInfo";

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
