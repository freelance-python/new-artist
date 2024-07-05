import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { menuListSidebar } from "./menuListSidebar";

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))({
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
});

const VendorSidebarSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="dashboard-sidebar-scrollbar">
      {menuListSidebar.map((section, index) => (
        <div key={index} className="flex flex-col px-5 pt-6 pb-3">
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            className="px-3 pb-5 text-xs font-semibold uppercase tracking-[0.05em] text-[#66666699]"
          >
            {section.title}
          </Typography>
          <List className="rounded-md px-3 py-2.5">
            {section.items.map((item, itemIndex) => (
              <React.Fragment key={itemIndex}>
                {item.subItems && item.subItems.length > 0 ? (
                  <Accordion
                    expanded={expanded === `panel${index}${itemIndex}`}
                    onChange={handleChange(`panel${index}${itemIndex}`)}
                    sx={{ border: "none", boxShadow: "none" }}
                  >
                    <AccordionSummary
                      aria-controls={`panel${index}${itemIndex}-content`}
                      id={`panel${index}${itemIndex}-header`}
                      className="px-3 py-2.5 text-sm text-gray-700 text-start focus:text-[#019376] hover:bg-gray-100 font-medium !text-accent-hover bg-[#009f7f1a] hover:!bg-[#009f7f1a]"
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: 3,
                          justifyContent: "center",
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                    </AccordionSummary>
                    <AccordionDetails>
                      <List component="div" disablePadding>
                        {item.subItems.map((subItem, subIndex) => (
                          <ListItemButton
                            key={subIndex}
                            sx={{
                              pl: 4,
                              justifyContent: "initial",
                            }}
                            href={subItem.href}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 0,
                                mr: 3,
                                justifyContent: "center",
                              }}
                            >
                              {subItem.icon}
                            </ListItemIcon>
                            <ListItemText primary={subItem.text} />
                          </ListItemButton>
                        ))}
                      </List>
                    </AccordionDetails>
                  </Accordion>
                ) : (
                  <ListItem disablePadding sx={{ display: "block" }}>
                    <ListItemButton
                      className="px-3 py-2.5 text-sm text-gray-700 text-start focus:text-[#019376] hover:bg-gray-100 font-medium !text-accent-hover bg-[#009f7f1a] hover:!bg-[#009f7f1a]"
                      sx={{
                        minHeight: 48,
                        justifyContent: "initial",
                        px: 2.5,
                      }}
                      href={item.href}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: 3,
                          justifyContent: "center",
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                )}
              </React.Fragment>
            ))}
          </List>
          <Divider />
        </div>
      ))}
    </div>
  );
};

export default VendorSidebarSection;
