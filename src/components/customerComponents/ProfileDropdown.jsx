import { Link } from "react-router-dom";

const ProfileDropdown = () => {
  return (
    <div className="absolute right-0 top-10 pt-4">
      <div className="w-48 rounded-md bg-[#ffffff] shadow">
        <div className="flex flex-col w-full">
          <div className="flex w-full items-center justify-between bg-[#009f7f] px-6 py-4 text-xs font-semibold text-[#fff]">
            <span>Points</span>
            <span>0</span>
          </div>
          {[
            { text: "Profile", href: "/authors" },
            { text: "My Orders", href: "/orders" },
            { text: "My Wishlists", href: "/wishlists" },
            { text: "Checkout", href: "/checkout" },
            { text: "Logout", href: "/checkout" },
          ].map((item, index) => (
            <Link key={index} className="w-full py-2.5 px-6" to={item.href}>
              <p className="text-[#1f2937] text-sm font-semibold hover:text-[#009f7f] m-0">
                {item.text}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
