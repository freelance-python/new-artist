import { MdDone } from "react-icons/md";

const progressSteps = [
  { id: 1, label: "Pending", completed: true },
  { id: 2, label: "Processing", completed: true },
  { id: 3, label: "At Local Facility", completed: false },
  { id: 4, label: "Out For Delivery", completed: false },
  { id: 5, label: "Completed", completed: false },
];


const MyOrderProgress = () => {
  return (
    <div className="flex w-full items-center justify-center px-6">
      <div className=" order-progress-scrollbar">
        <ol className="flex items-center w-full text-xs text-gray-900 font-medium sm:text-base py-7">
          {progressSteps.map((step, index) => (
            <li
              key={step.id}
              className={`flex w-full relative ${
                step.completed ? "text-[#000]" : "text-gray-900"
              } ${
                index !== progressSteps.length - 1
                  ? step.completed
                    ? "after:bg-[#009f7f]"
                    : "after:bg-gray-200"
                  : ""
              } 
            ${
              index !== progressSteps.length - 1
                ? "after:content-[''] after:w-full after:h-0.5 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4"
                : ""
            }`}
            >
              <div className="block whitespace-nowrap z-10">
                <span
                  className={`w-6 h-6 ${
                    step.completed
                      ? "bg-[#009f7f] text-white"
                      : "bg-gray-50 text-[#009f7f]"
                  } border-2 ${
                    step.completed
                      ? "border-transparent"
                      : "border-[#009f7f] border-dashed"
                  } rounded-full flex justify-center items-center mx-auto mb-3 text-sm lg:w-10 lg:h-10`}
                >
                  {step.completed ? <MdDone /> : step.id}
                </span>
                {step.label}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default MyOrderProgress;
