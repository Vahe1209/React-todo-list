import React from "react";
import "./InputStyles.css";

export default function CommonInput(props) {
  const { id, inputValue, handleRemove } = props;

  function deleteTask() {
    handleRemove(id);
  }

  return (
    <label className="label-input" id={id}>
      <input type="text" defaultValue={inputValue} className="column" />
      <button className="delete-button" onClick={deleteTask}>
        X
      </button>
    </label>
  );
}
