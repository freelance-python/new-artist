import { Link } from "@mui/material";

const ServiceFooter = () => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <h2 className="mt-3 mb-4 font-semibold text-[#1f2937] lg:mb-7">
        Customer Service
      </h2>
      <div className="flex flex-col gap-4">
        <Link href="/help" underline="none">
          <p className="text-sm text-[#1f2937] hover:text-[#f97316]">
            FAQ & Helps
          </p>
        </Link>
        <Link href="/vendor-refund-policies" underline="none">
          <p className="text-sm text-[#1f2937] hover:text-[#f97316]">
            Vendor Refund Policies
          </p>
        </Link>
        <Link href="/customer-refund-policies" underline="none">
          <p className="text-sm text-[#1f2937] hover:text-[#f97316]">
            Customer Refund Policies
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ServiceFooter;
