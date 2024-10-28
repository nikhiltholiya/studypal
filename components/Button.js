import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
      onClick={(e) => {
        e.preventDefault()
        props.click()
      }}
    >
      {props.title}
    </button>
  );
};

export default Button;
