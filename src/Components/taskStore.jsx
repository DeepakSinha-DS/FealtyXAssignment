import { create } from 'zustand';

const useTaskStore = create((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  deleteTask: (index) =>
    set((state) => ({
      tasks: state.tasks.filter((_, i) => i !== index),
    })),
  updateTime: (taskId, time) =>
    set((state) => {
      const updatedTasks = state.tasks.map((task, index) =>
        index === taskId ? { ...task, timeSpent: time } : task
      );
      return { tasks: updatedTasks };
    }),
}));

export default useTaskStore;
