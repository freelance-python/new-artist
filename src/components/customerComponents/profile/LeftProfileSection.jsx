import WalletPointsProfile from "./WalletPointsProfile";

const LeftProfileSection = () => {
  return (
    <>
      <WalletPointsProfile />
      <div className="overflow-hidden rounded border border-border-200 bg-[#fff]">
        <ul className="py-7">
          <li className="py-1">
            <a
              className="block border-l-4 border-transparent py-2 px-10 font-semibold text-[#333333] transition-colors hover:text-[#009f7f] focus:text-[#009f7f] !border-[#009f7f]"
              href="/profile"
            >
              Profile
            </a>
          </li>
          <li className="py-1">
            <a
              className="block border-l-4 border-transparent py-2 px-10 font-semibold text-[#333333] transition-colors hover:text-[#009f7f] focus:text-[#009f7f]"
              href="/change-password"
            >
              Change Password
            </a>
          </li>
          <li className="py-1">
            <a
              className="block border-l-4 border-transparent py-2 px-10 font-semibold text-[#333333] transition-colors hover:text-[#009f7f] focus:text-[#009f7f]"
              href="/orders"
            >
              My Orders
            </a>
          </li>
          <li className="py-1">
            <a
              className="block border-l-4 border-transparent py-2 px-10 font-semibold text-[#333333] transition-colors hover:text-[#009f7f] focus:text-[#009f7f]"
              href="/downloads"
            >
              Downloads
            </a>
          </li>
          <li className="py-1">
            <a
              className="block border-l-4 border-transparent py-2 px-10 font-semibold text-[#333333] transition-colors hover:text-[#009f7f] focus:text-[#009f7f]"
              href="/wishlists"
            >
              My Wishlists
            </a>
          </li>
          <li className="py-1">
            <a
              className="block border-l-4 border-transparent py-2 px-10 font-semibold text-[#333333] transition-colors hover:text-[#009f7f] focus:text-[#009f7f]"
              href="/questions"
            >
              My Questions
            </a>
          </li>
          <li className="py-1">
            <a
              className="block border-l-4 border-transparent py-2 px-10 font-semibold text-[#333333] transition-colors hover:text-[#009f7f] focus:text-[#009f7f]"
              href="/refunds"
            >
              My Refunds
            </a>
          </li>
          <li className="py-1">
            <a
              className="block border-l-4 border-transparent py-2 px-10 font-semibold text-[#333333] transition-colors hover:text-[#009f7f] focus:text-[#009f7f]"
              href="/reports"
            >
              My Reports
            </a>
          </li>
          <li className="py-1">
            <a
              className="block border-l-4 border-transparent py-2 px-10 font-semibold text-[#333333] transition-colors hover:text-[#009f7f] focus:text-[#009f7f]"
              href="/cards"
            >
              My Cards
            </a>
          </li>
          <li className="py-1">
            <a
              className="block border-l-4 border-transparent py-2 px-10 font-semibold text-[#333333] transition-colors hover:text-[#009f7f] focus:text-[#009f7f]"
              href="/help"
            >
              Need Help
            </a>
          </li>
        </ul>
        <ul className="border-t border-border-200 bg-light py-4">
          <li className="block py-2 px-11">
            <button className="font-semibold text-[#333333] transition-colors hover:text-[#009f7f] focus:text-[#009f7f]">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LeftProfileSection;
