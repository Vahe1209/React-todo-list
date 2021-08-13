import TaskListContainer from "./TaskListContainer.jsx";

function Columns({ columns, addColumn }) {
  function deleteColumn(id) {
    const filteredColumnList = columns.filter((item) => item.id !== id);
    addColumn(filteredColumnList);
  }

  function editColumn(e, idx) {
    const editedColumn = columns.map((item) => {
      if (item.id === idx) {
        item.value = e.target.value;
      }
      return item;
    });
    addColumn(editedColumn);
  }
  return (
    <div className="columns">
      {columns.map((column, idx) => {
        return (
          <TaskListContainer
            editColumn={editColumn}
            key={idx}
            id={column.id}
            defValue={column.value}
            deleteColumn={deleteColumn}
          />
        );
      })}
    </div>
  );
}

export default Columns;
