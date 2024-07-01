import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormContact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(
      "Thank you for contacting us. We will get back to you soon.!",
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  return (
    <>
      <h1 className="mb-7 font-body text-xl font-bold text-[#1f2937] md:text-2xl">
        How can we improve your experience?
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-3 block text-sm font-semibold leading-none"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              className="InputContactFormHome h-12"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-3 block text-sm font-semibold leading-none text-[#6b7280]-dark"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="InputContactFormHome h-12"
            />
          </div>
        </div>
        <div className="my-6">
          <label
            htmlFor="subject"
            className="mb-3 block text-sm font-semibold leading-none text-[#6b7280]-dark"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            className="InputContactFormHome h-12"
          />
        </div>
        <div className="my-6">
          <label
            htmlFor="description"
            className="mb-3 block text-sm font-semibold leading-none text-[#6b7280]-dark"
          >
            Description
          </label>
          <textarea
            id="description"
            className="InputContactFormHome"
            rows="4"
          />
        </div>
        <button type="submit" className="SubmitBtnContactFormHome">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormContact;
