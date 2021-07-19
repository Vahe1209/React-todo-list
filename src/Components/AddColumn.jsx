import { useState } from "react";
import "../App.css";

function AddColumn({ addColumn }) {
  const [colName, changeColName] = useState("");

  const handleEnter = (e) => {
    if (e.key === "Enter" && colName) {
      addColumn(colName);
      changeColName("");
    }
  };

  return (
    <div className="add-new-column">
      <input
        className="add-column"
        onKeyDown={handleEnter}
        onChange={(e) => changeColName(e.target.value)}
        type="text"
        placeholder="Add another column"
        value={colName}
      />
    </div>
  );
}

export default AddColumn;
