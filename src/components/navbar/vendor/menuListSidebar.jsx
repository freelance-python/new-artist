import { MdOutlineDashboard } from "react-icons/md";
import { PiShoppingBagOpenThin, PiShoppingCartDuotone } from "react-icons/pi";

export const menuListSidebar = [
  {
    label: "Main",
    items: [
      { text: "Dashboard", icon: <MdOutlineDashboard size={20} />, href: "/" },
    ],
  },
  {
    label: "Shop management",
    items: [
      {
        text: "Shops",
        icon: <PiShoppingCartDuotone size={20} />,
        href: "#",
        subItems: [
          { text: "All shops", href: "/shops" },
          { text: "Add new shop", href: "/shops/create" },
          { text: "Inactive/New shops", href: "/new-shops" },
        ],
      },
      {
        text: "My Shops",
        icon: <PiShoppingBagOpenThin size={20} />,
        href: "/my-shops",
      },
    ],
  },
  {
    label: "Product management",
    items: [
      {
        text: "Products",
        icon: <MdOutlineDashboard size={20} />,
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
        icon: <MdOutlineDashboard size={20} />,
        href: "/products/inventory",
      },
      { text: "Categories", icon: <MdOutlineDashboard size={20} />, href: "/categories" },
      { text: "Tags", icon: <MdOutlineDashboard size={20} />, href: "/tags" },
      { text: "Attributes", icon: <MdOutlineDashboard size={20} />, href: "/attributes" },
      {
        text: "Manufacturers/Publications",
        icon: <MdOutlineDashboard size={20} />,
        href: "/manufacturers",
      },
      { text: "Authors", icon: <MdOutlineDashboard size={20} />, href: "/authors" },
    ],
  },
  {
    label: "E-commerce Management",
    items: [
      { text: "Taxes", icon: <MdOutlineDashboard size={20} />, href: "/taxes" },
      { text: "Shippings", icon: <MdOutlineDashboard size={20} />, href: "/shippings" },
      { text: "Withdrawals", icon: <MdOutlineDashboard size={20} />, href: "/withdraws" },
      {
        text: "Refunds",
        icon: <MdOutlineDashboard size={20} />,
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
    label: "Layout/Page control",
    items: [
      {
        text: "Home pages / Groups",
        icon: <MdOutlineDashboard size={20} />,
        href: "/groups",
      },
      {
        id: "1",
        text: "FAQs",
        icon: <MdOutlineDashboard size={20} />,
        href: "#",
        subItems: [
          { text: "All FAQs", href: "/faqs" },
          { text: "Add new FAQ", href: "/faqs/create" },
        ],
      },
      {
        id: "2",
        text: "Terms And Conditions",
        icon: <MdOutlineDashboard size={20} />,
        href: "#",
        subItems: [
          { text: "All Terms", href: "/terms-and-conditions" },
          { text: "Add new Terms", href: "/terms-and-conditions/create" },
        ],
      },
    ],
  },
  {
    label: "Order management",
    items: [
      { text: "Orders", icon: <MdOutlineDashboard size={20} />, href: "/orders" },
      {
        text: "Create Order",
        icon: <MdOutlineDashboard size={20} />,
        href: "/orders/create",
      },
      {
        text: "Transactions",
        icon: <MdOutlineDashboard size={20} />,
        href: "/orders/transaction",
      },
    ],
  },
  {
    label: "User control",
    items: [
      { text: "All users", icon: <MdOutlineDashboard size={20} />, href: "/users" },
      {
        text: "Admin list",
        icon: <MdOutlineDashboard size={20} />,
        href: "/users/admins",
      },
      {
        text: "Vendors",
        icon: <MdOutlineDashboard size={20} />,
        href: "#",
        subItems: [
          { text: "All vendors", href: "/users/vendors" },
          { text: "Pending vendors", href: "/users/vendors/pending" },
        ],
      },
      {
        text: "Staff",
        icon: <MdOutlineDashboard size={20} />,
        href: "#",
        subItems: [
          { text: "My Staffs", href: "/users/my-staffs" },
          { text: "Vendor Staffs", href: "/users/vendor-staffs" },
        ],
      },
      {
        text: "Customers",
        icon: <MdOutlineDashboard size={20} />,
        href: "/users/customer",
      },
    ],
  },
  {
    label: "Feedback control",
    items: [
      { text: "Reviews", icon: <MdOutlineDashboard size={20} />, href: "/reviews" },
      { text: "Questions", icon: <MdOutlineDashboard size={20} />, href: "/questions" },
    ],
  },
  {
    label: "Promotional management",
    items: [
      {
        text: "Coupons",
        icon: <MdOutlineDashboard size={20} />,
        href: "#",
        subItems: [
          { text: "All coupons", href: "/coupons" },
          { text: "Add new coupon", href: "/coupons/create" },
        ],
      },
      {
        text: "Flash Sale",
        icon: <MdOutlineDashboard size={20} />,
        href: "#",
        subItems: [
          { text: "All campaigns", href: "/flash-sale" },
          { text: "Add new campaigns", href: "/flash-sale/create" },
          { text: "Vendor requests", href: "/flash-sale/vendor-request" },
        ],
      },
    ],
  },
  {
    label: "Feature Management",
    items: [
      { text: "Message", icon: <MdOutlineDashboard size={20} />, href: "/message" },
      {
        text: "Store Notice",
        icon: <MdOutlineDashboard size={20} />,
        href: "/store-notices",
      },
    ],
  },
  {
    label: "Site management",
    items: [
      {
        text: "Settings",
        icon: <MdOutlineDashboard size={20} />,
        href: "#",
        subItems: [
          { text: "General settings", href: "/settings" },
          { text: "Payment settings", href: "/settings/payment" },
          { text: "SEO settings", href: "/settings/seo" },
          { text: "Events settings", href: "/settings/events" },
          { text: "Shop settings", href: "/settings/shop" },
          { text: "Maintenance Settings", href: "/settings/maintenance" },
          {
            text: "Company Information",
            href: "/settings/company-information",
          },
          { text: "Promo Popup", href: "/settings/promotion-popup" },
        ],
      },
    ],
  },
];
