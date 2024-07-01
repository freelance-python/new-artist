import { IoCloudDone } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

const WishListRemoveToast = () => (
  <div className="Toastify-toast-container Toastify-toast-container-top-right">
    <div className="bg-[#07bc0c] text-[#fff]">
      <div className="Toastify-toast-body">
        <IoCloudDone />
        <div>Successfully Removed from Wishlist!</div>
      </div>
      <button
        className="Toastify-close-button Toastify__close-button--colored"
        type="button"
      >
        <IoIosClose />
      </button>
      <div
        className="Toastify-progress-bar Toastify-progress-bar--animated Toastify__progress-bar-theme--colored Toastify-progress-bar--success"
        style={{
          animationDuration: "2000ms",
          animationPlayState: "paused",
          opacity: 1,
        }}
      ></div>
    </div>
  </div>
);
export default WishListRemoveToast;
