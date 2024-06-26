import { useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const UserInfo = () => {
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
  return (
    <>
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
                  value={"John Doe"}
                  className="InputContactFormHome h-12"
                />
              </div>
            </div>x
            <div className="mb-6">
              <label
                htmlFor="profile.bio"
                className="mb-3 block text-sm font-semibold leading-none text-[#333333]"
              >
                Bio
              </label>
              <textarea
                id="profile.bio"
                className="InputContactFormHome py-4"
                rows="4"
              />
            </div>
            <div className="flex justify-end">
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
          <div className="flex justify-end">
            <button className="inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-0 focus:shadow focus:ring-1 focus:ring-accent-700 bg-[#009f7f] text-[#fff] border border-transparent hover:bg-accent-hover px-5 py-0 h-12 ltr:ml-auto rtl:mr-auto">
              Update
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default UserInfo;
