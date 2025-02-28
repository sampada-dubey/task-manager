import React, { useState } from "react";
import { motion } from "framer-motion";

function TaskForm({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    addTask(task);
    setTask("");
  };

  return (
    <motion.div 
      className="p-4 bg-gray-100 rounded-2xl shadow-lg w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <motion.input
          type="text"
          placeholder="Enter a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 transition duration-200"
          whileFocus={{ scale: 1.05 }}
        />
        <motion.button
          type="submit"
          className="bg-blue-500 text-white px-5 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-600 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Add Task 🚀
        </motion.button>
      </form>
    </motion.div>
  );
}

export default TaskForm;
