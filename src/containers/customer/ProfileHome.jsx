import { useEffect } from "react";
import ProfileContainer from "../../components/customerComponents/profile/ProfileContainer";

const ProfileHome = () => {
  useEffect(() => {
    document.title = "PickBazar";
  });
  return (
    <div className="mt-20">
      <ProfileContainer />
    </div>
  );
};

export default ProfileHome;
