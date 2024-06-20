import { Grid } from "@mui/material";
import SaleCard from "./SaleCard";

const SaleCardContainer = () => {
  const saleList = [
    {
      id: 1,
      url: "https://pickbazar-react-rest.vercel.app/flash-sales/limited-time-offer-act-fast",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2291%2FGroup-1000003746.png&w=1920&q=75",
      title: "Limited-Time Offer: Act Fast! 🔥",
      till: "31 Oct 2023 - 29 Nov 2024",
      status: "On going",
      type: "Percentage",
      rate: "50",
    },
    {
      id: 2,
      url: "https://pickbazar-react-rest.vercel.app/flash-sales/limited-time-discounts",
      image:
        "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2285%2F2-92206549.png&w=640&q=100",
      title: "Limited-Time Offer: Act Fast! 🔥",
      till: "16 Oct 2023 - 29 Nov 2024",
      status: "On going",
      type: "Fixed Rate",
      rate: "10",
    },
  ];
  return (
    <div className="mx-auto max-w-[94.75rem]">
      <div className="px-4 py-10 pt-20">
        <Grid
          container
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(auto-fill, 1fr)",
              lg: "repeat(auto-fill, minmax(400px, 1fr))",
            },
            gap: "20px",
          }}
        >
          {saleList.map((saleCardDetails, index) => {
            return (
              <Grid item key={index}>
                <SaleCard details={saleCardDetails} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default SaleCardContainer;
