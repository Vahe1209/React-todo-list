import { useState, useEffect } from "react";
import CommonInput from "./Input/CommonInput.jsx";
import OutsideClickHandler from "./OutsideClickHandler.jsx";
import "./Input/CommonInput.css";
import generateRandomId from "../helper/generateRandom.js";

export default function TaskListContainer({
  listContainerID,
  defValue,
  deleteColumn,
  editColumn,
  id,
}) {
  const [openedInput, changeOpenedInput] = useState(null);
  const [taskList, setTaskList] = useState([]);

  function handleEnter(e) {
    if (e.key === "Enter" && e.target.value) {
      const inputValueObject = {
        id: generateRandomId(),
        inputValue: e.target.value,
        column_id: id,
      };
      setTaskList([...taskList, inputValueObject]);
      e.target.value = "";
    }
  }

  function deleteTask(id) {
    setTaskList((list) => list.filter((item) => item.id !== id));
  }

  function handleOnChange(e, id) {
    const inputValue = e.target.value;
    const changedTaskList = taskList.map((inputObject) => {
      if (inputObject.id === id) {
        let changedObject = { ...inputObject };
        changedObject.inputValue = inputValue;
        return changedObject;
      }
      return inputObject;
    });
    setTaskList([...changedTaskList]);
  }

  useEffect(() => {
    if (taskList.length !== 0) {
      localStorage.setItem("taskList", JSON.stringify(taskList));
    }
  }, [taskList]);

  useEffect(() => {
    let list = localStorage.getItem("taskList");
    if (list) {
      list = JSON.parse(list);
      setTaskList(list);
    }
  }, []);

  return (
    <div className="task-list">
      <label className="label-input">
        <input
          className="column"
          value={defValue}
          onChange={(e) => editColumn(e, id)}
        />
        <button className="delete-button" onClick={() => deleteColumn(id)}>
          X
        </button>
      </label>
      <div>
        {taskList
          .filter((task) => task.column_id === id)
          .map((task) => {
            return (
              <CommonInput
                inputValue={task.inputValue}
                key={task.id}
                handleRemove={(e) => deleteTask(task.id)}
                onChange={(e) => handleOnChange(e, task.id)}
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
