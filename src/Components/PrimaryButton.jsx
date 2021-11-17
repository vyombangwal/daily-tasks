import React from "react";

const PrimaryButton = (props) => {
  const classes =
    "rounded w-full bg-blue-500 text-white p-1 hover:bg-blue-700 " +
    props.className;
  return (
    <div>
      <button type={props.type} className={classes}>
        {props.value}
      </button>
    </div>
  );
};

export default PrimaryButton;
