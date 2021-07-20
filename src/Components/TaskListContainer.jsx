import { useState } from "react";
import CommonInput from "./Input/CommonInput.jsx";
import OutsideClickHandler from "./OutsideClickHandler.jsx";

export default function TaskListContainer({ listContainerID, defValue }) {
  const [openedInput, changeOpenedInput] = useState(null);
  const [taskList, setTaskList] = useState([]);

  function handleEnter(e) {
    if (e.key === "Enter" && e.target.value) {
      setTaskList([...taskList, e.target.value]);
      e.target.value = "";
    }
  }

  return (
    <div className="task-list">
      <input className="column" defaultValue={defValue} />
      <div>
        {taskList.map((task, idx) => {
          return <CommonInput inputValue={task} key={idx} />;
        })}
      </div>
      {openedInput === listContainerID ? (
        <OutsideClickHandler
          onOutsideClick={() => {
            changeOpenedInput(null);
          }}
        >
          <input className="task-name-input" onKeyDown={handleEnter} />
        </OutsideClickHandler>
      ) : (
        <button
          onClick={() => changeOpenedInput(listContainerID)}
          className="add-new-task"
        >
          + Add new task
        </button>
      )}
    </div>
  );
}
