import { Link } from "@mui/material";

const ExploreFooter = () => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <h2 className="mt-3 mb-4 font-semibold text-[#1f2937] lg:mb-7">Explore</h2>
      <div className="flex flex-col gap-4">
        <Link href="/shops" underline="none">
          <p className="text-sm text-[#1f2937] hover:text-[#f97316]">Shops</p>
        </Link>
        <Link href="/authors" underline="none">
          <p className="text-sm text-[#1f2937] hover:text-[#f97316]">Authors</p>
        </Link>
        <Link href="/flash-sales" underline="none">
          <p className="text-sm text-[#1f2937] hover:text-[#f97316]">
            Flash Deals
          </p>
        </Link>
        <Link href="/offers" underline="none">
          <p className="text-sm text-[#1f2937] hover:text-[#f97316]">Coupon</p>
        </Link>
      </div>
    </div>
  );
};

export default ExploreFooter;
