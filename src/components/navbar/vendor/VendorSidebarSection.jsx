import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { menuListSidebar } from "./menuListSidebar";


const VendorSidebarSection = () => {
  const [openSubItems, setOpenSubItems] = React.useState(
    Array(menuListSidebar.length).fill(false)
  );

  const toggleSubItems = (index) => {
    setOpenSubItems((prev) => {
      const newArray = [...prev];
      newArray[index] = !newArray[index];
      return newArray;
    });
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
                <ListItem
                  disablePadding
                  sx={{ display: "block" }}
                  className="px-3 py-2.5 text-sm text-gray-700 text-start focus:text-[#019376] hover:bg-gray-100 font-medium !text-accent-hover bg-[#009f7f1a] hover:!bg-[#009f7f1a]"
                >
                  <ListItemButton
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
