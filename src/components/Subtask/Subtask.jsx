import "./Subtask.css";

const Subtask = ({ task, subtasks, clickTask }) => {
  // Helper to render "completed" : "pending" column
  const renderSection = (title, showCompleted) => (
    <div
      className={`subtask-column ${showCompleted ? "completed" : "pending"}`}
    >
      <h3 className="subtask-heading">{title}</h3>
      {subtasks.map((subtask, index) => {
        const taskText = Object.keys(subtask)[0]; // Get the subtask text
        const isDone = subtask[taskText]; // Check if subtask is done

        if (isDone === showCompleted) {
          return (
            <p
              key={taskText}
              className={`subtask-item ${isDone ? "done" : ""}`}
              onClick={() => clickTask(task, index, taskText)}
            >
              {taskText}
            </p>
          );
        }
        return null; // Skip "pending" subtasks
      })}
    </div>
  );

  return (
    <div className="subtasks">
      {/* Render "pending" and "completed" sections */}
      {renderSection("Not yet completed", false)}
      {renderSection("Completed", true)}
    </div>
  );
};

export default Subtask;
