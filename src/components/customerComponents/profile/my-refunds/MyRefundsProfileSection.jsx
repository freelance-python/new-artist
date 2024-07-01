import MyRefundsTable from "./MyRefundsTable";

const MyRefundsProfileSection = () => {
  return (
    <div className="p-5 md:p-8 bg-[#fff] shadow rounded self-stretch w-full overflow-hidden">
      <div className="flex items-center justify-center mb-8 sm:mb-10">
        <h3 className="text-lg font-semibold text-center text-[#1f2937] sm:text-xl">
          My Refunds
        </h3>
      </div>
      <MyRefundsTable />
    </div>
  );
};

export default MyRefundsProfileSection;
