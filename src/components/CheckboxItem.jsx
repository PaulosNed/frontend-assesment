import React from "react";

const CheckboxItem = ({ isChecked, isHovered, isActive }) => {
  const getCheckboxStyles = () => {
    let baseStyles =
      "w-[23px] h-[23px] rounded-md flex items-center justify-center";
    let borderStyle = "border";
    let checkmarkColor = "text-transparent";
    let backgroundColor = "bg-transparent";

    if (isHovered || isActive) {
      borderStyle = `border border-gray-400 ${
        isActive ? "shadow-custom-all-blue" : ""
      }`;
      checkmarkColor = isActive ? "text-gray-500" : "text-gray-300";
    }

    if (isChecked) {
      borderStyle = "border-none";
      backgroundColor = isHovered ? "bg-blue-600 bg-opacity-75" : "bg-blue-600";
      checkmarkColor = "text-white";
    }

    if (!isChecked && isHovered && !isActive) {
      checkmarkColor = "text-gray-300";
    }

    return { baseStyles, borderStyle, backgroundColor, checkmarkColor };
  };

  const { baseStyles, borderStyle, backgroundColor, checkmarkColor } =
    getCheckboxStyles();

  return (
    <div className={`${baseStyles} ${borderStyle} ${backgroundColor}`}>
      {(isChecked || isHovered || isActive) && (
        <svg
          className={`${checkmarkColor}`}
          width="17"
          height="13"
          viewBox="0 0 17 13"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.68 6.592L6.22879 11.5272C6.24925 11.5454 6.28055 11.5437 6.29899 11.5235L16.32 0.520004"
            stroke-linecap="round"
          />
        </svg>
      )}
    </div>
  );
};

export default CheckboxItem;
