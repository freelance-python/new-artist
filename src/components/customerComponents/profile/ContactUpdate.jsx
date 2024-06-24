const ContactUpdate = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-light p-5 sm:p-8 md:min-h-0 md:rounded-xl">
      <h1 className="mb-5 text-center text-sm font-semibold text-heading sm:mb-6">
        Update Contact Number
      </h1>
      <form className="w-full">
        <div className="flex flex-col">
          <div className="flex w-full items-center md:min-w-[360px]">
            <div className="input-group-box-profile-form">
              <input
                className="input-profile-form h-12 !pl-20 !pr-4"
                placeholder="9365141641"
                type="tel"
              />
              <img
                src="../../../src/assets/indiaflagicon.png"
                alt=""
                className="h-4 absolute pl-4"
              />
              <p className="absolute pl-12">+91</p>
            </div>
            <button
              data-variant="normal"
              className="button-submit-profile-form h-12"
            >
              Update Contact
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUpdate;
