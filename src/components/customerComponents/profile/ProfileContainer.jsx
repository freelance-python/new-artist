import LeftProfileSection from "./LeftProfileSection";
import RightProfileSection from "./RightProfileSection";

const ProfileContainer = () => {
  return (
    <div className="mx-auto flex w-full max-w-1920 flex-col gap-8 items-start bg-gray-100 px-5 py-10 lg:flex-row xl:py-14 xl:px-8 2xl:px-14">
      <div className="hidden shrink-0 lg:block lg:w-80">
        <LeftProfileSection />
      </div>
      <div className="w-full overflow-hidden px-1 pb-1">
        <RightProfileSection />
      </div>
    </div>
  );
};

export default ProfileContainer;
