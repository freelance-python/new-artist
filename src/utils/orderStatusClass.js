export const getStatusChipClass = (status = "") => {
  status = status?.toLowerCase();
  let statusColorClass = "";
    if(status.includes("processing")){
      statusColorClass = "bg-[#9e750026] text-[#9e7500]";
    } else if(status.includes("completed")){
      statusColorClass = "bg-[#00a17f26] text-[#00a17f]";
    } else if(status.includes("pending")) {
      statusColorClass = "bg-[#c9a11626] text-[#c9a116]";
    } else {
      statusColorClass = "bg-gray-300 text-slate-700";
    }

  return statusColorClass;
}
