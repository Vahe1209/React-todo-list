import { useState } from "react";
import AddColumn from "./Components/AddColumn.jsx";
import Columns from "./Components/Columns.jsx";

function App() {
  const [columns, addColumn] = useState([]);

  const handleColumnChange = (colName) => {
    addColumn([...columns, colName]);
  };

  return (
    <div className="App">
      <AddColumn addColumn={handleColumnChange} />
      <Columns columns={columns} />
    </div>
  );
}

export default App;
