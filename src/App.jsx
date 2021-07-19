import { useState } from "react";
import AddColumn from "./Components/AddColumn.jsx";
import Columns from "./Components/Columns.jsx";

function App() {
  const [columns, addColumn] = useState([]);

  const handleColumnChange = (colName) => {
    addColumn([...columns, colName]);
  };

  const handleColumnNameChange = (colIndex, newColName) => {
    const newCols = columns.map((col, index) =>
      colIndex === index ? newColName : col
    );
    addColumn([...newCols]);
  };

  return (
    <div className="App">
      <AddColumn addColumn={handleColumnChange} />
      <Columns changeColName={handleColumnNameChange} columns={columns} />
    </div>
  );
}

export default App;
