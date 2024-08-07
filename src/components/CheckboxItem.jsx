import React from "react";

const CheckboxItem = ({ isChecked, isHovered, isActive }) => {
  const getCheckboxStyles = () => {
    let baseStyles = "w-[23px] h-[23px] rounded-md flex items-center justify-center";
    let borderColor = "border";
    let checkmarkColor = "text-transparent";
    let backgroundColor = "bg-transparent";

    if (isHovered || isActive) {
      borderColor = "border border-gray-400";
      checkmarkColor = isActive ? "text-gray-500" : "text-gray-300";
    }

    if (isChecked) {
      borderColor = "border-none";
      backgroundColor = isHovered ? "bg-blue-500 bg-opacity-75" : "bg-blue-500";
      checkmarkColor = "text-white";
    }

    if (!isChecked && isHovered && !isActive) {
      checkmarkColor = "text-gray-300";
    }

    return { baseStyles, borderColor, backgroundColor, checkmarkColor };
  };

  const { baseStyles, borderColor, backgroundColor, checkmarkColor } = getCheckboxStyles();

  return (
    <div className={`${baseStyles} ${borderColor} ${backgroundColor}`}>
      {(isChecked || isHovered || isActive) && (
        <svg
          className={`w-full h-full ${checkmarkColor}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      )}
    </div>
  );
};

export default CheckboxItem;
