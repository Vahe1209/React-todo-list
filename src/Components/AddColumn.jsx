import { useState } from "react";
import "../App.css";
import generateRandomId from "../helper/generateRandom.js";

function AddColumn({ addColumn }) {
  const [colName, changeColName] = useState("");

  const handleEnter = (e) => {
    if (e.key === "Enter" && colName) {
      const colNameObject = {
        id: generateRandomId(),
        value: e.target.value,
      };
      addColumn(colNameObject);
      changeColName("");
    }
  };

  return (
    <div className="add-new-column">
      <input
        className="add-column"
        onKeyDown={handleEnter}
        onChange={(e) => {
          changeColName(e.target.value);
        }}
        type="text"
        placeholder="Add another column"
        value={colName}
      />
    </div>
  );
}

export default AddColumn;
