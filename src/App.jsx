import { useState, useEffect } from "react";
import AddColumn from "./Components/AddColumn.jsx";
import Columns from "./Components/Columns.jsx";

function App() {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (columns.length !== 0) {
      localStorage.setItem("columns", JSON.stringify(columns));
    }
  }, [columns]);

  const handleColumnChange = (colName) => {
    setColumns([...columns, colName]);
  };

  useEffect(() => {
    let col = localStorage.getItem("columns");
    if (col) {
      col = JSON.parse(col);
      setColumns(col);
    }
  }, []);

  return (
    <div className="App">
      <AddColumn addColumn={handleColumnChange} />
      <Columns columns={columns} addColumn={setColumns} />
    </div>
  );
}

export default App;
