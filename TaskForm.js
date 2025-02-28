import React, { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAddTask(task);
    setTask(""); // Clear input after adding
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      ( input
        type="text"
        placeholder="Enter a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)})
      <button type="submit">Add Task </button>
    </form>
  );
};

export default TaskForm;
