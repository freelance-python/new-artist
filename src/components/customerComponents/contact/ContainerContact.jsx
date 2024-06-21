import DetailsContact from "./DetailsContact";
import FormContact from "./FormContact";

const ContainerContact = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 py-10 mb-20 md:flex-row md:gap-4 md:pb-10 xl:py-14 xl:px-8 xl:pb-14 2xl:px-14">
        <div className="order-2 w-full shrink-0 rounded-lg bg-[#fff] p-5 md:order-1 md:w-72 lg:w-96">
          <DetailsContact />
        </div>
        <div className="order-1 mb-8 w-full rounded-lg bg-[#fff] p-5 md:order-2 md:mb-0 md:p-8">
          <FormContact />
        </div>
      </div>
    </div>
  );
};

export default ContainerContact;
