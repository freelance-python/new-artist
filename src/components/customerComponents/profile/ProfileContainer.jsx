import ProfileSection from "./profile-section/ProfileSection";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import WalletPointsProfile from "./WalletPointsProfile";
import ChangePasswordProfileSection from "./change-password/ChangePasswordProfileSection";
import MyOrdersProfileSection from "./my-orders/MyOrdersProfileSection";
import DownloadsProfileSection from "./downloads/DownloadsProfileSection";
import MyWishlistsProfileSection from "./my-wishlists/MyWishlistsProfileSection";
import MyQuestionsProfileSection from "./my-questions/MyQuestionsProfileSection";
import MyRefundsProfileSection from "./my-refunds/MyRefundsProfileSection";
import MyReportsProfileSection from "./my-reports/MyReportsProfileSection";
import MyCardsProfileSection from "./my-cards/MyCardsProfileSection";
import NeedHelpProfileSection from "./need-help/NeedHelpProfileSection";

const tabs = [
  { url: "profile", label: "Profile", component: <ProfileSection /> },
  {
    url: "change-password",
    label: "Change Password",
    component: <ChangePasswordProfileSection />,
  },
  {
    url: "my-orders",
    label: "My Orders",
    component: <MyOrdersProfileSection />,
  },
  {
    url: "downloads",
    label: "Downloads",
    component: <DownloadsProfileSection />,
  },
  {
    url: "my-wishlists",
    label: "My Wishlists",
    component: <MyWishlistsProfileSection />,
  },
  {
    url: "my-questions",
    label: "My Questions",
    component: <MyQuestionsProfileSection />,
  },
  {
    url: "my-refunds",
    label: "My Refunds",
    component: <MyRefundsProfileSection />,
  },
  {
    url: "my-reports",
    label: "My Reports",
    component: <MyReportsProfileSection />,
  },
  { url: "my-cards", label: "My Cards", component: <MyCardsProfileSection /> },
  {
    url: "need-help",
    label: "Need Help",
    component: <NeedHelpProfileSection />,
  },
];

function TabPanel(props) {
  const { children, value, selected, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== selected}
      id={`vertical-tabpanel-${selected}`}
      aria-labelledby={`vertical-tab-${selected}`}
      {...other}
    >
      {value === selected && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  selected: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

function CustomTab({ tab, isSelected, onClick }) {
  return (
    <li className="py-1">
      <a
        className={`block border-l-4 py-2 px-10 font-semibold text-[#333333] transition-colors ${
          isSelected
            ? "border-[#009f7f] text-[#009f7f]"
            : "border-transparent hover:text-[#009f7f] focus:text-[#009f7f]"
        }`}
        onClick={() => onClick(tab.url)}
      >
        {tab.label}
      </a>
    </li>
  );
}
CustomTab.propTypes = {
  tab: PropTypes.object,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const ProfileContainer = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleTabClick = (tabUrl) => {
    navigate(`/${tabUrl}`);
  };

  return (
    <div className="mx-auto flex w-full max-w-1920 flex-col gap-8 items-start bg-gray-100 px-5 py-10 lg:flex-row xl:py-14 xl:px-8 2xl:px-14">
      <div className="hidden shrink-0 lg:block lg:w-80">
        <WalletPointsProfile />
        <div className="overflow-hidden rounded border border-border-200 bg-[#fff]">
          <ul className="py-7">
            {tabs.map((tab, index) => (
              <CustomTab
                key={index}
                tab={tab}
                isSelected={params.tabView === tab.url}
                onClick={handleTabClick}
              />
            ))}
          </ul>
          <ul className="border-t border-border-200 bg-light py-4">
            <li className="block py-2 px-11">
              <button className="font-semibold text-[#333333] transition-colors hover:text-[#009f7f] focus:text-[#009f7f]">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full overflow-hidden px-1 pb-1">
        {tabs.map((tab, index) => (
          <TabPanel value={tab.url} selected={params.tabView} key={index}>
            {tab.component || tab.label}
          </TabPanel>
        ))}
      </div>
    </div>
  );
};

export default ProfileContainer;
