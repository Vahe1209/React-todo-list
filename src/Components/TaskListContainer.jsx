import { useState } from "react";
import CommonInput from "./Input/CommonInput.jsx";
import OutsideClickHandler from "./OutsideClickHandler.jsx";
import "./Input/InputStyles.css";

export default function TaskListContainer({ listContainerID, defValue }) {
  const [openedInput, changeOpenedInput] = useState(null);
  const [taskList, setTaskList] = useState([]);
  // const []

  function handleEnter(e) {
    if (e.key === "Enter" && e.target.value) {
      setTaskList([...taskList, e.target.value]);
      e.target.value = "";
    }
  }
  function deleteTask(id) {
    setTaskList((list) => list.filter((item, index) => index !== id));
  }
  return (
    <div className="task-list">
      <label className="label-input">
        <input className="column" defaultValue={defValue} />
        <button className="delete-button">X</button>
      </label>
      <div>
        {taskList.map((task, idx) => {
          return (
            <CommonInput
              inputValue={task}
              key={idx}
              id={idx}
              handleRemove={deleteTask}
            />
          );
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
