import { Link } from "@mui/material";

const InformationFooter = () => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <h2 className="mt-3 mb-4 font-semibold text-heading lg:mb-7">
        Our Information
      </h2>
      <div className="flex flex-col gap-4">
        <Link href="/privacy" underline="none">
          <p className="text-sm text-[#1f2937] hover:text-[#f97316]">
            Privacy policies
          </p>
        </Link>
        <Link href="/terms" underline="none">
          <p className="text-sm text-[#1f2937] hover:text-[#f97316]">
            Terms & Conditions
          </p>
        </Link>
        <Link href="/contact" underline="none">
          <p className="text-sm text-[#1f2937] hover:text-[#f97316]">
            Contact Us
          </p>
        </Link>
      </div>
    </div>
  );
};

export default InformationFooter;
