import { Dialog } from "@mui/material";
import { useRef, useState } from "react";
import { FaCloudUploadAlt, FaPlus } from "react-icons/fa";
import ContactUpdate from "./ContactUpdate";

const RightProfileSection = () => {
  const [uploadedImage, setUploadedImage] = useState("");
  const fileInputRef = useRef(null);

  const handleSectionClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const [openContactUpdate, setOpenContactUpdate] = useState(false);

  const handleOpenContactUpdate = () => {
    setOpenContactUpdate(true);
  };

  const handleCloseContactUpdate = () => {
    setOpenContactUpdate(false);
  };
  return (
    <div>
      <div className="mb-8">
        <form>
          <div className="mb-8 flex">
            <div className="p-5 md:p-8 bg-[#fff] shadow rounded w-full">
              <div className="mb-8">
                <div>
                  <input
                    ref={fileInputRef}
                    accept="image/png, image/jpeg"
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                  />
                  <section
                    className="upload border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-[#009f7f] focus:outline-none"
                    tabIndex="0"
                    onClick={handleSectionClick}
                  >
                    <FaCloudUploadAlt size={40} color="#d1d5db" />
                    <p className="mt-4 text-sm text-center text-[#6b7280]">
                      <span className="font-semibold text-[#009f7f]">
                        Upload an image
                      </span>{" "}
                      or drag and drop <br />
                      <span className="text-xs text-[#6b7280]">PNG, JPG</span>
                    </p>
                  </section>
                  <div className="flex flex-wrap mt-2">
                    <div className="relative inline-flex flex-col mt-2 overflow-hidden border rounded border-border-100 ltr:mr-2 rtl:ml-2">
                      <div className="flex items-center justify-center w-16 h-16 min-w-0 overflow-hidden">
                        {uploadedImage ? (
                          <img src={uploadedImage} alt="Uploaded" />
                        ) : (
                          <img
                            src="https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/2449/conversions/man-thumbnail.jpg"
                            alt="Profile"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-6 flex flex-row">
                <div className="flex-1">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-sm font-semibold leading-none text-[#333333]"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="InputContactFormHome h-12"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="profile.bio"
                  className="mb-3 block text-sm font-semibold leading-none text-[#333333]"
                >
                  Bio
                </label>
                <textarea
                  id="profile.bio"
                  className="InputContactFormHome"
                  rows="4"
                />
              </div>
              <div className="flex">
                <button className="inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-0 focus:shadow focus:ring-1 focus:ring-accent-700 bg-[#009f7f] text-[#fff] border border-transparent hover:bg-accent-hover px-5 py-0 h-12 ltr:ml-auto rtl:mr-auto">
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
        <form>
          <div className="p-5 md:p-8 bg-[#fff] shadow rounded mb-8 w-full">
            <div className="mb-6 flex flex-row">
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="mb-3 block text-sm font-semibold leading-none text-[#333333]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  className="InputContactFormHome h-12"
                />
              </div>
            </div>
            <div className="flex">
              <button className="inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-0 focus:shadow focus:ring-1 focus:ring-accent-700 bg-[#009f7f] text-[#fff] border border-transparent hover:bg-accent-hover px-5 py-0 h-12 ltr:ml-auto rtl:mr-auto">
                Update
              </button>
            </div>
          </div>
        </form>
        <div className="p-5 md:p-8 bg-[#fff] shadow rounded flex w-full flex-col">
          <div className="mb-5 flex items-center justify-between md:mb-8">
            <p className="text-lg capitalize text-[#1f2937] lg:text-xl">
              Contact Number
            </p>
            <button
              className="flex items-center text-sm font-semibold text-[#009f7f] transition-colors duration-200 hover:text-accent-hover focus:text-accent-hover focus:outline-0"
              onClick={handleOpenContactUpdate}
            >
              <FaPlus />
              Update
            </button>

            <Dialog open={openContactUpdate} onClose={handleCloseContactUpdate}>
              <ContactUpdate />
            </Dialog>
          </div>
          <div className="grid grid-cols-1">
            <div className="react-tel-input">
              <div className="special-label">Phone</div>
              <input
                className="form-control !p-0 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-[#1f2937] !text-sm focus:!outline-none focus:!ring-0 !border !border-border-base !rounded focus:!border-[#009f7f] !h-12"
                placeholder="1 (702) 123-4567"
                disabled
                type="tel"
                value="+1 (936) 514-1641"
              />
              <div className="flag-dropdown">
                <div
                  className="selected-flag"
                  title="United States: + 1"
                  tabIndex="0"
                  role="button"
                  aria-haspopup="listbox"
                >
                  <div className="flag us">
                    <div className="arrow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 md:p-8 bg-[#fff] shadow rounded w-full">
        <div>
          <div className="mb-5 flex items-center justify-between md:mb-8">
            <div className="flex items-center space-x-3 rtl:space-x-reverse md:space-x-4">
              <p className="text-lg capitalize text-[#1f2937] lg:text-xl">
                Addresses
              </p>
            </div>
            <button className="flex items-center text-sm font-semibold text-[#009f7f] transition-colors duration-200 hover:text-accent-hover focus:text-accent-hover focus:outline-0">
              <FaPlus />
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="group relative cursor-pointer rounded border p-4 hover:border-[#009f7f] border-transparent bg-gray-100">
              <p className="mb-3 text-sm font-semibold capitalize text-[#1f2937]">
                Billing
              </p>
              <p className="text-sm text-sub-[#1f2937]">
                2231 Kidd Avenue, AK, Kipnuk, 99614, United States
              </p>
              <div className="absolute top-4 flex space-x-2 opacity-0 group-hover:opacity-100"></div>
            </div>
            <div className="group relative cursor-pointer rounded border p-4 hover:border-[#009f7f] border-transparent bg-gray-100">
              <p className="mb-3 text-sm font-semibold capitalize text-[#1f2937]">
                Shipping
              </p>
              <p className="text-sm text-sub-[#1f2937]">
                2148 Straford Park, KY, Winchester, 40391, United States
              </p>
              <div className="absolute top-4 flex space-x-2 opacity-0 group-hover:opacity-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightProfileSection;
