import React from 'react';
import './TaskList.css';
import useTaskStore from './taskStore';
import Timer from './Timer';

const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  return (
    <div className="task-list">
      <h2>Task List</h2>
      {tasks.map((task, index) => (
        <div key={index} className="task-item">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Priority: {task.priority}</p>
          <p>Status: {task.status}</p>
          {/* Add Timer here */}
          <Timer taskId={index} onTimeUpdate={(taskId, time) => console.log(`Task ${taskId} time: ${time}s`)} />
          <button onClick={() => deleteTask(index)} className="delete-button">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
