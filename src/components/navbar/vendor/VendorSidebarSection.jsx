import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { menuListSidebar } from "./menuListSidebar";
import { FaChevronRight } from "react-icons/fa";

const VendorSidebarSection = () => {
  const [openSubItems, setOpenSubItems] = useState({});

  const toggleSubItems = (index) => {
    setOpenSubItems((prev) => ({
      ...Object.keys(prev).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {}),
      [index]: !prev[index],
    }));
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
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    className="px-3 py-2.5 text-sm text-gray-700 text-start focus:text-[#019376] hover:bg-gray-100 font-medium !text-accent-hover bg-[#009f7f1a] hover:!bg-[#009f7f1a]"
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                    href={item.href}
                    onClick={() => {
                      if (item.subItems && item.subItems.length > 0) {
                        toggleSubItems(index);
                      }
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                    {item.subItems && item.subItems.length > 0 && (
                      <FaChevronRight
                        style={{
                          marginLeft: "auto",
                          transition: "transform 0.3s ease",
                        }}
                        className={
                          openSubItems[index] ? "transform rotate-90" : ""
                        }
                      />
                    )}
                  </ListItemButton>
                </ListItem>
                {item.subItems && item.subItems.length > 0 && (
                  <List
                    component="div"
                    disablePadding
                    sx={{
                      display: openSubItems[index] ? "block" : "none",
                    }}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <ListItemButton
                        key={subIndex}
                        sx={{
                          pl: 4,
                          justifyContent: open ? "initial" : "center",
                        }}
                        href={subItem.href}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {subItem.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={subItem.text}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    ))}
                  </List>
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
