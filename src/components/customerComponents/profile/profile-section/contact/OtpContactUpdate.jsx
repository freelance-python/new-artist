import { useCallback, useState } from "react";
import propTypes from "prop-types";

const OtpContactUpdate = ({ onClose }) => {
  const [otp, setOtp] = useState("");

  const handleChangeOtp = useCallback((e) => {
    setOtp(e.target.value);
  }, []);
  const handleSubmitOtp = useCallback(
    (e) => {
      e.preventDefault();
      onClose();
    },
    [onClose]
  );

  return (
    <form className="w-full" onSubmit={handleSubmitOtp}>
      <div className="flex flex-col w-full">
        <div className="mb-5">
          <label htmlFor="email" className="InputLabelAuthPage">
            OTP Code
          </label>
          <input
            id="email"
            type="email"
            className="InputContactFormHome h-12"
            value={otp}
            onChange={handleChangeOtp}
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmitOtp}
          className="inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out text-[#fff] bg-[#009f7f] hover:bg-[#019376] px-5 py-0 h-12 w-full sm:h-12"
        >
          Verfiy Code
        </button>
      </div>
    </form>
  );
};

export default OtpContactUpdate;

OtpContactUpdate.propTypes = {
  onClose: propTypes.func,
};
