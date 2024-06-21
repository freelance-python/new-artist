import { Box, List, ListItem, ListItemText } from "@mui/material";
import propTypes from "prop-types";

const SaleCard = ({ details }) => {
  return (
    <a href={details?.url} className="relative block overflow-hidden">
      <Box className="relative mb-4 h-52 overflow-hidden rounded-md bg-gray-300 md:mb-6 xl:h-60 2xl:h-[21.6875rem]">
        <Box
          className="absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat blur-sm"
          sx={{
            backgroundImage: `url("${details?.image}")`,
          }}
        ></Box>
        <img
          alt="vcbcn"
          src={details?.image}
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      <h2 className="mb-2 text-base font-semibold text-[#111111] md:text-lg">
        {details?.title}
      </h2>
      <List className="text-base" sx={{ padding: "0 !important" }}>
        <ListItem
          className="flex items-center gap-2"
          sx={{ padding: "0 !important" }}
        >
          <span className="font-semibold text-[#111111]">Offer Till:</span>
          <ListItemText
            primary={details?.till}
            className="font-normal text-[#666]"
          />
        </ListItem>
        <ListItem
          className="flex items-center gap-2"
          sx={{ padding: "0 !important" }}
        >
          <span className="font-semibold text-[#111111]">Campaign status:</span>
          <ListItemText
            primary={details?.status}
            className="font-normal text-[#666]"
          />
        </ListItem>
        <ListItem
          className="flex items-center gap-2"
          sx={{ padding: "0 !important" }}
        >
          <span className="font-semibold text-[#111111]">
            Campaign type on:
          </span>
          <ListItemText
            primary={details?.type}
            className="font-normal text-[#666]"
          />
        </ListItem>
        <ListItem
          className="flex items-center gap-2"
          sx={{ padding: "0 !important" }}
        >
          <span className="font-semibold text-[#111111]">Deals rate:</span>
          <ListItemText
            primary={details?.rate}
            className="font-normal text-[#666]"
          />
        </ListItem>
      </List>
    </a>
  );
};

export default SaleCard;

SaleCard.propTypes = {
  details: propTypes.objectOf({
    id: propTypes.string,
    url: propTypes.string,
    image: propTypes.string,
    title: propTypes.string,
    till: propTypes.string,
    status: propTypes.string,
    type: propTypes.string,
    rate: propTypes.string,
  }),
};
