import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { MdOutlineDashboard } from "react-icons/md";
import navlogowithtext from "../../../src/assets/navlogowithtext.webp";
import iconlogonav from "../../../src/assets/iconlogonav.webp";
import { ListItemText } from "@mui/material";

const drawerWidth = 288;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    marginLeft: `calc(${theme.spacing(7)} + 1px)`,
    width: `calc(100% - ${theme.spacing(7)} - 1px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up("sm")]: {
      marginLeft: `calc(${theme.spacing(8)} + 1px)`,
      width: `calc(100% - ${theme.spacing(8)} - 1px)`,
    },
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const menuItems = [
  {
    title: "Main",
    items: [{ text: "Dashboard", icon: <MdOutlineDashboard />, href: "/" }],
  },
  {
    title: "Shop management",
    items: [
      {
        text: "Shops",
        icon: <MdOutlineDashboard />,
        href: "#",
        subItems: [
          { text: "All shops", href: "/shops" },
          { text: "Add new shop", href: "/shops/create" },
          { text: "Inactive/New shops", href: "/new-shops" },
        ],
      },
      { text: "My Shops", icon: <MdOutlineDashboard />, href: "/my-shops" },
    ],
  },
  {
    title: "Product management",
    items: [
      {
        text: "Products",
        icon: <MdOutlineDashboard />,
        href: "#",
        subItems: [
          { text: "All Products", href: "/products" },
          { text: "My Draft Products", href: "/products/draft" },
          {
            text: "All Low & Out of Stock Products",
            href: "/products/product-stock",
          },
        ],
      },
      {
        text: "Inventory",
        icon: <MdOutlineDashboard />,
        href: "/products/inventory",
      },
      { text: "Categories", icon: <MdOutlineDashboard />, href: "/categories" },
      { text: "Tags", icon: <MdOutlineDashboard />, href: "/tags" },
      { text: "Attributes", icon: <MdOutlineDashboard />, href: "/attributes" },
      {
        text: "Manufacturers/Publications",
        icon: <MdOutlineDashboard />,
        href: "/manufacturers",
      },
      { text: "Authors", icon: <MdOutlineDashboard />, href: "/authors" },
    ],
  },
  {
    title: "E-commerce Management",
    items: [
      { text: "Taxes", icon: <MdOutlineDashboard />, href: "/taxes" },
      { text: "Shippings", icon: <MdOutlineDashboard />, href: "/shippings" },
      { text: "Withdrawals", icon: <MdOutlineDashboard />, href: "/withdraws" },
      {
        text: "Refunds",
        icon: <MdOutlineDashboard />,
        href: "#",
        subItems: [
          { text: "Reported refunds", href: "/refunds" },
          { text: "Refund Policies", href: "/refund-policies" },
          { text: "Add new refund policy", href: "/refund-policies/create" },
          { text: "Refund Reasons", href: "/refund-reasons" },
          { text: "Add new refund reason", href: "/refund-reasons/create" },
        ],
      },
    ],
  },
  {
    title: "Layout/Page control",
    items: [
      {
        text: "Home pages / Groups",
        icon: <MdOutlineDashboard />,
        href: "/groups",
      },
      {
        text: "FAQs",
        icon: <MdOutlineDashboard />,
        href: "#",
        subItems: [
          { text: "All FAQs", href: "/faqs" },
          { text: "Add new FAQ", href: "/faqs/create" },
        ],
      },
      {
        text: "Terms And Conditions",
        icon: <MdOutlineDashboard />,
        href: "#",
        subItems: [],
      },
    ],
  },
  {
    title: "Order management",
    items: [
      { text: "Orders", icon: <MdOutlineDashboard />, href: "/orders" },
      {
        text: "Create Order",
        icon: <MdOutlineDashboard />,
        href: "/orders/create",
      },
      {
        text: "Transactions",
        icon: <MdOutlineDashboard />,
        href: "/orders/transaction",
      },
    ],
  },
  {
    title: "User control",
    items: [
      { text: "All users", icon: <MdOutlineDashboard />, href: "/users" },
      {
        text: "Admin list",
        icon: <MdOutlineDashboard />,
        href: "/users/admins",
      },
      {
        text: "Vendors",
        icon: <MdOutlineDashboard />,
        href: "#",
        subItems: [],
      },
      { text: "Staff", icon: <MdOutlineDashboard />, href: "#", subItems: [] },
      {
        text: "Customers",
        icon: <MdOutlineDashboard />,
        href: "/users/customer",
      },
    ],
  },
  {
    title: "Feedback control",
    items: [
      { text: "Reviews", icon: <MdOutlineDashboard />, href: "/reviews" },
      { text: "Questions", icon: <MdOutlineDashboard />, href: "/questions" },
    ],
  },
  {
    title: "Promotional management",
    items: [
      {
        text: "Coupons",
        icon: <MdOutlineDashboard />,
        href: "#",
        subItems: [],
      },
      {
        text: "Flash Sale",
        icon: <MdOutlineDashboard />,
        href: "#",
        subItems: [],
      },
    ],
  },
  {
    title: "Feature Management",
    items: [
      { text: "Message", icon: <MdOutlineDashboard />, href: "/message" },
      {
        text: "Store Notice",
        icon: <MdOutlineDashboard />,
        href: "/store-notices",
      },
    ],
  },
  {
    title: "Site management",
    items: [
      {
        text: "Settings",
        icon: <MdOutlineDashboard />,
        href: "#",
        subItems: [],
      },
    ],
  },
];

export default function VendorNav() {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="inherit">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
            sx={{ marginRight: 5 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            PickBazar
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader style={{ justifyContent: "flex-start" }}>
          <img
            src={open ? navlogowithtext : iconlogonav}
            alt="Logo"
            style={{ width: "100%", padding: "10px" }}
          />
        </DrawerHeader>
        <Divider />
        <div className="order-card-scrollbar">
          {menuItems.map((section, index) => (
            <div key={index}>
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                className="px-3 pb-5 text-xs font-semibold uppercase tracking-[0.05em] text-[#66666699]"
              >
                {section.title}
              </Typography>
              <List>
                {section.items.map((item, itemIndex) => (
                  <ListItem
                    key={itemIndex}
                    disablePadding
                    sx={{ display: "block" }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                      href={item.href}
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
                    {item.subItems && item.subItems.length > 0 && (
                      <List component="div" disablePadding>
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
                  </ListItem>
                ))}
              </List>
              <Divider />
            </div>
          ))}
        </div>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>Content goes here</Typography>
      </Box>
    </Box>
  );
}
