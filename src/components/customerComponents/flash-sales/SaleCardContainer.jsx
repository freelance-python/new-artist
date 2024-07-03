import { Grid } from "@mui/material";
import SaleCard from "./SaleCard";
import { saleList } from "./saleList";


const SaleCardContainer = () => {
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
