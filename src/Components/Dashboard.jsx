import React from 'react';
import './Dashboard.css';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Dashboard;