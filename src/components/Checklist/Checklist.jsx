import { useState } from "react";
import Subtask from "../Subtask/Subtask";
import "./Checklist.css";

const Checklist = ({ list: initialList }) => {
  // Getting the tasks list from data folder
  const [list, setList] = useState(initialList);

  // Toggle a task between "completed" : "pending"
  const clickTask = (task, index, taskText) => {
    // Make a copy of the list to avoid directly mutating state
    const newList = JSON.parse(JSON.stringify(list));
    newList[task][index][taskText] = !newList[task][index][taskText];
    setList(newList);
  };

  return (
    <div className="task-container">
      {/* Iterating through each task category */}
      {Object.entries(list).map(([task, subtasks], index) => (
        <section key={index}>
          <h2 className="task-title">{task}</h2>
          <div style={{ display: "flex" }}>
            {/* Passing subtasks and click handler as props */}
            <Subtask task={task} subtasks={subtasks} clickTask={clickTask} />
          </div>
        </section>
      ))}
    </div>
  );
};

export default Checklist;
