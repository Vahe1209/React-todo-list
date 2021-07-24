import { useState, useEffect } from "react";
import AddColumn from "./Components/AddColumn.jsx";
import Columns from "./Components/Columns.jsx";

function App() {
  const [columns, addColumn] = useState([]);

  useEffect(() => {
    if (columns.length !== 0) {
      localStorage.setItem("columns", JSON.stringify(columns));
    }
  }, [columns]);

  const handleColumnChange = (...colName) => {
    addColumn([...columns, ...colName]);
  };

  useEffect(() => {
    let col = localStorage.getItem("columns");
    if (col) {
      col = JSON.parse(col);
      handleColumnChange(...col);
    }
  }, []);

  return (
    <div className="App">
      <AddColumn addColumn={handleColumnChange} />
      <Columns columns={columns} />
    </div>
  );
}

export default App;
