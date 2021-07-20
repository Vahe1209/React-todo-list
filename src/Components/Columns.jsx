import TaskListContainer from "./TaskListContainer.jsx";

function Columns({ columns }) {
  return (
    <div className="columns">
      {columns.map((column, idx) => {
        return <TaskListContainer key={idx} defValue={column} />;
      })}
    </div>
  );
}

export default Columns;
