import { Link } from "@mui/material";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const DetailsContact = () => {
  return (
    <>
      <div className="mb-8 flex w-full items-center justify-center overflow-hidden">
        <img
          alt="Contact"
          className="h-auto w-full"
          src="https://pickbazar-react-rest.vercel.app/_next/static/media/contact-illustration.2f6adc05.svg"
        />
      </div>
      <div className="mb-8 flex flex-col">
        <span className="mb-3 font-semibold">Address</span>
        <span className="text-sm text-[#6b7280]">
          <a
            className=""
            target="_blank"
            title="NY State Thruway, New York, USA"
            href="https://www.google.com/maps/place/NY State Thruway, New York, USA"
          >
            NY State Thruway, New York, USA
          </a>
        </span>
      </div>
      <div className="mb-8 flex flex-col">
        <span className="mb-3 font-semibold text-[#1f2937]">Phone</span>
        <span className="text-sm text-[#6b7280]">+129290122122</span>
      </div>
      <div className="mb-8 flex flex-col">
        <span className="mb-3 font-semibold text-[#1f2937]">Email Address</span>
        <span className="text-sm text-[#6b7280]">demo@demo.com</span>
      </div>
      <div className="mb-8 flex flex-col">
        <span className="mb-3 font-semibold text-[#1f2937]">Website</span>
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#6b7280]">https://redq.io</span>
          <a
            className="text-sm font-semibold text-[#009f7f] hover:text-[#019376]"
            target="_blank"
            href="https://redq.io"
          >
            Visit This Site
          </a>
        </div>
      </div>
      <div className="mb-8 flex flex-col">
        <span className="mb-4 font-semibold text-[#1f2937]">Follow Us</span>
        <div className="flex items-center justify-start gap-4">
          <Link href="https://www.facebook.com" target="_blank">
            <AiFillFacebook
              size={24}
              className="text-[#9ca3af] hover:text-[#019376]"
            />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <FaTwitter
              size={24}
              className="text-[#9ca3af] hover:text-[#019376]"
            />
          </Link>
          <Link href="https://www.instagram.com" target="_blank">
            <FaInstagram
              size={24}
              className="text-[#9ca3af] hover:text-[#019376]"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default DetailsContact;
