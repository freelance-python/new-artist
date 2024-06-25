import { useState } from "react";
import { IoSend } from "react-icons/io5";

const SubscribeFormFooter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
  };
  return (
    <div className="w-full flex flex-col mb-7">
      <h2 className="mt-3 mb-4 font-semibold text-[#1f2937] lg:mb-7">
        Subscribe Now
      </h2>
      <p className="text-[#1f2937] text-[14px] mb-7">
        Subscribe your email for newsletter and featured news based on your
        interest
      </p>
      <div className="flex flex-col">
        <form onSubmit={handleSubmit} noValidate>
          <div className="relative w-full rounded border border-gray-200 bg-gray-50">
            <input
              type="email"
              id="email_subscribe"
              name="email"
              placeholder="Write your email here"
              className="h-14 w-full border-0 bg-transparent text-sm text-[#6b7280] outline-none pl-5 focus:border-[1px] focus:border-[#2563eb]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="absolute top-1/2 transform -translate-y-1/2 right-3"
            >
              <IoSend size={20} className="email-send-icon-automodal" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscribeFormFooter;
