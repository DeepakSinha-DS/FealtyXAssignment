import React, { useState } from 'react';
import './TaskForm.css';
import useTaskStore from './taskStore';

const TaskForm = () => {
  const [task, setTask] = useState({ title: '', description: '', priority: 'low', status: 'open' });
  const addTask = useTaskStore((state) => state.addTask);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({ title: '', description: '', priority: 'low', status: 'open' });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2>Create New Task</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={task.title}
        onChange={handleChange}
        className="task-input"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
        className="task-textarea"
        required
      />
      <select name="priority" value={task.priority} onChange={handleChange} className="task-select">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <select name="status" value={task.status} onChange={handleChange} className="task-select">
        <option value="open">Open</option>
        <option value="in-progress">In Progress</option>
        <option value="closed">Closed</option>
      </select>
      <button type="submit" className="task-button">Add Task</button>
    </form>
  );
};

export default TaskForm;