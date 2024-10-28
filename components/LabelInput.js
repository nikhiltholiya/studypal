import React from "react";

const LabelInput = (props) => {
  return (
    <div className="md:flex md:items-center mb-6">
      <label
        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        for="inline-full-name"
      >
        {props.label}
      </label>
      <div className="md:w-96 ">
        <input
          className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          type="text"
          value={props.value}
          onChange={(e) => {
            props.changeValue(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default LabelInput;
