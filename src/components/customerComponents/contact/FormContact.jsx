import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setFormErrors({ ...formErrors, [id]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorsExist = false;
    const newErrors = { ...formErrors };

    if (formData.name.trim() === "") {
      newErrors.name = "You must need to provide your name";
      errorsExist = true;
    }
    if (formData.email.trim() === "") {
      newErrors.email = "You must need to provide your email address";
      errorsExist = true;
    }
    if (formData.subject.trim() === "") {
      newErrors.subject = "What subject do you want to discuss with us?";
      errorsExist = true;
    }
    if (formData.description.trim() === "") {
      newErrors.description = "Tell us more about it";
      errorsExist = true;
    }

    if (errorsExist) {
      setFormErrors(newErrors);
      return;
    }

    toast.success(
      "Thank you for contacting us. We will get back to you soon!",
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      description: "",
    });
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
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && (
              <span className="text-red-500 text-sm">{formErrors.name}</span>
            )}
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
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <span className="text-red-500 text-sm">{formErrors.email}</span>
            )}
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
            value={formData.subject}
            onChange={handleChange}
          />
          {formErrors.subject && (
            <span className="text-red-500 text-sm">{formErrors.subject}</span>
          )}
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
            value={formData.description}
            onChange={handleChange}
          />
          {formErrors.description && (
            <span className="text-red-500 text-sm">
              {formErrors.description}
            </span>
          )}
        </div>
        <button type="submit" className="SubmitBtnContactFormHome">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormContact;
