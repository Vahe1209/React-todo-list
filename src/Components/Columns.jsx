import TaskListContainer from "./TaskListContainer.jsx";

function Columns({ columns }) {
  return (
    <div className="columns">
      {columns.map((column, idx) => {
        return (
          <TaskListContainer key={idx} defValue={column} />
          // <div key={idx} className="task-list">
          //   <input className="column" defaultValue={column} />

          //   {openedInput === idx ? (
          //     <OutsideClickHandler
          //       onOutsideClick={() => {
          //         changeOpenedInput(null);
          //       }}
          //     >
          //       <input className="task-name-input" />
          //     </OutsideClickHandler>
          //   ) : (
          //     <button
          //       onClick={() => changeOpenedInput(idx)}
          //       className="add-new-task"
          //     >
          //       + Add new task
          //     </button>
          //   )}
          // </div>
        );
      })}
    </div>
  );
}

export default Columns;
