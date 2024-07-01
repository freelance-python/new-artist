import { MdDone } from "react-icons/md";

const MyOrderProgress = () => {
  return (
    <div className="flex w-full items-center justify-center px-6">
      <div
        className="os-theme-thin-dark h-full w-full"
        data-overlayscrollbars="host"
        data-overlayscrollbars-initialize=""
      >
        <div style={{ width: "calc(100% + 0px)" }} className="os-size-observer">
          <div className="os-size-observer-listener ltr"></div>
        </div>
        <div
          style={{
            width: "calc(100% + 0px)",
            padding: "0px",
            marginRight: "0px",
            marginBottom: "0px",
            marginLeft: "0px",
            top: "0px",
            right: "auto",
            left: "0px",
          }}
          data-overlayscrollbars-contents=""
          data-overlayscrollbars-viewport="scrollbarHidden"
        >
          <div className="flex w-full flex-col py-7 md:flex-row md:items-start">
            {/* Progress Steps */}
            {progressSteps.map((step) => (
              <div
                key={step.id}
                className="progress-box_progress_container__n7Sm7"
              >
                <div
                  className={`progress-box_progress_wrapper__JZ0Ia ${
                    step.completed && "progress-box_checked__bYvuh"
                  }`}
                >
                  <div className="progress-box_status_wrapper__Wemi0">
                    {step.completed ? (
                      <div className="h-4 w-3">
                        <MdDone />
                      </div>
                    ) : (
                      <div className="progress-box_status_wrapper__Wemi0">
                        {step.id}
                      </div>
                    )}
                  </div>
                  <div className="progress-box_bar__pcoY4"></div>
                </div>
                <div className="flex flex-col items-start ltr:ml-5 rtl:mr-5 md:items-center ltr:md:ml-0 rtl:md:mr-0">
                  <span className="text-base font-semibold capitalize text-body-dark ltr:text-left rtl:text-right md:px-2 md:!text-center">
                    {step.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="os-scrollbar os-scrollbar-horizontal os-theme-dark os-scrollbar-auto-hide os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable">
          <div className="os-scrollbar-track">
            <div
              className="os-scrollbar-handle"
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>
        <div className="os-scrollbar os-scrollbar-vertical os-theme-dark os-scrollbar-auto-hide os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable">
          <div className="os-scrollbar-track">
            <div
              className="os-scrollbar-handle"
              style={{ height: "100%" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="rc-table orderDetailsTable w-full rc-table-fixed-header rc-table-scroll-horizontal"></div>
    </div>
  );
};
const progressSteps = [
  { id: 1, label: "Pending", completed: true },
  { id: 2, label: "Processing", completed: true },
  { id: 3, label: "At Local Facility", completed: false },
  { id: 4, label: "Out For Delivery", completed: false },
  { id: 5, label: "Completed", completed: false },
];

export default MyOrderProgress;
