import { useCallback, useRef, useState } from "react";
import propTypes from "prop-types";

const OtpInput = ({ onSubmit, onCancel }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleInputChange = (index, e) => {
    const value = e.target.value;

    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmitOtp = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit(otp);
      onCancel();
    },
    [onCancel, onSubmit, otp]
  );

  return (
    <div className="p-5 space-y-5 border border-gray-200 rounded">
      <div className="flex flex-col w-full">
        <label className="block text-[#6b7280]-dark font-semibold text-sm leading-none mb-3">
          OTP Code
        </label>
        <form className="w-full" onSubmit={handleSubmitOtp} noValidate>
          <div className="mb-5">
            <div className="flex items-center justify-between -mx-2">
              {otp.map((digit, index) => (
                <div key={index} className="flex items-center">
                  <input
                    key={index}
                    className="otp-input-box-contact h-12"
                    type="number"
                    maxLength={1}
                    value={digit}
                    ref={(ref) => (inputRefs.current[index] = ref)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onChange={(e) => handleInputChange(index, e)}
                    aria-label={`Please enter OTP character ${index + 1}`}
                    autoComplete="off"
                  />
                  {index < otp.length - 1 && (
                    <span className="hidden sm:inline-block">-</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <button
              type="button"
              onClick={onCancel}
              data-variant="outline"
              className="cancel-otp-input-box-contact"
            >
              Cancel
            </button>
            <button type="submit" className="verify-otp-input-box-contact">
              Verify Code
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

OtpInput.propTypes = {
  onSubmit: propTypes.func.isRequired,
  onCancel: propTypes.func.isRequired,
};

export default OtpInput;
