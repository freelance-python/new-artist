import { Link } from "@mui/material";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SocialContactFooter = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <Link href="/">
          <img
            src="https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/2295/Logo-new.png"
            alt="Pickbazar"
            className="footerLogo"
          />
        </Link>
        <p className="text-[#1f2937] text-[14px]">
          NY State Thruway, New York, USA
        </p>
        <div className="flex flex-col">
          <Link href="mailto:demo@demo.com" underline="none">
            <p className="text-[#1f2937] text-[14px]">demo@demo.com</p>
          </Link>
          <Link href="tel:+129290122122" underline="none">
            <p className="text-[#1f2937] text-[14px]">+129290122122</p>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: "1rem", display: "flex", gap: "16px" }}>
        <Link href="https://www.facebook.com" target="_blank">
          <AiFillFacebook
            size={24}
            className="text-[#009f7f] hover:text-[#019376]"
          />
        </Link>
        <Link href="https://twitter.com" target="_blank">
          <FaTwitter
            size={24}
            className="text-[#009f7f] hover:text-[#019376]"
          />
        </Link>
        <Link href="https://www.instagram.com" target="_blank">
          <FaInstagram
            size={24}
            className="text-[#009f7f] hover:text-[#019376]"
          />
        </Link>
      </div>
    </>
  );
};

export default SocialContactFooter;
