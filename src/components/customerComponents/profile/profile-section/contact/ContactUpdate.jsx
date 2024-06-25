import { useCallback } from "react";
import propTypes from "prop-types";

const ContactUpdate = ({ handleModalType }) => {
  const toggleOtpContactPage = useCallback((e) => {
    e.preventDefault();
    handleModalType("verifyOtp");
  }, [handleModalType]);

  return (
    <form className="w-full" onSubmit={toggleOtpContactPage}>
      <div className="flex flex-col">
        <div className="flex w-full items-center md:min-w-[360px]">
          <div className="input-group-box-profile-form">
            <input
              className="input-profile-form h-12 !pl-20 !pr-4"
              placeholder="9365141641"
              type="tel"
            />
            <img
              src="../../../src/assets/indiaflagicon.png"
              alt=""
              className="h-4 absolute pl-4"
            />
            <p className="absolute pl-12">+91</p>
          </div>
          <button
            onClick={toggleOtpContactPage}
            className="button-submit-profile-form h-12"
          >
            Update Contact
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactUpdate;

ContactUpdate.propTypes = {
  handleModalType: propTypes.func,
};
