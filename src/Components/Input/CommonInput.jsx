import React from "react";
import "./CommonInput.css";

export default function CommonInput({
  id,
  inputValue,
  handleRemove,
  onChange,
}) {
  function deleteTask() {
    handleRemove(id);
  }

  function changeInputValue(e) {
    inputValue = e.target.value;
  }

  return (
    <label className="label-input" id={id}>
      <input
        type="text"
        value={inputValue}
        className="column"
        onChange={onChange}
      />
      <button className="delete-button" onClick={deleteTask}>
        X
      </button>
    </label>
  );
}
