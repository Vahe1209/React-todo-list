import React from "react";
import "./InputStyles.css";

export default function CommonInput({ columns, inputValue, key }) {
  const deleteInput = (input, id) => {
    input = inputValue;
    id = key;
  };

  return (
    <label className="label-input">
      <input type="text" defaultValue={inputValue} className="column" />;
      <button onClick={deleteInput}>X</button>
    </label>
  );
}
