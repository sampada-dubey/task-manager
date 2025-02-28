import React from "react";

const TaskList = ({ tasks, onDeleteTask, onToggleComplete }) => {
  return (
    <ul className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <span onClick={() => onToggleComplete(task.id)}>
              {task.completed ? "✅ " : "🔲 "}
              {task.text}
            </span>
            <button onClick={() => onDeleteTask(task.id)}>❌</button>
          </li>
        ))
      )}
    </ul>
  );
};

export default TaskList;