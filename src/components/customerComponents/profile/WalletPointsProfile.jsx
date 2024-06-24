const WalletPointsProfile = () => {
  return (
    <div className="mb-5 overflow-hidden rounded border border-border-200 bg-[#fff] px-10 py-8">
      <h3 className="mb-4 border-b border-dashed border-border-200 pb-4 text-base font-semibold text-[#333333]">
        Wallet Points
      </h3>
      <div className="grid grid-cols-3">
        <div className="mb-2 flex flex-col items-center justify-center space-y-1 border-r border-dashed border-gray-200 py-2 px-2 text-[13px] font-semibold capitalize text-[#333333]">
          <span>0</span>
          <span>Total</span>
        </div>
        <div className="mb-2 flex flex-col items-center justify-center space-y-1 border-r border-dashed border-gray-200 py-2 px-2 text-[13px] font-semibold capitalize text-[#333333]">
          <span>0</span>
          <span>Used</span>
        </div>
        <div className="mb-2 flex flex-col items-center justify-center space-y-1 py-2 px-2 text-[13px] font-semibold capitalize text-[#333333]">
          <span>0</span>
          <span>Available</span>
        </div>
      </div>
    </div>
  );
};

export default WalletPointsProfile;
