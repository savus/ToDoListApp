import { useTasks } from "./Providers/TasksProvider";

export const ManageTasksButton = () => {
  const { setAddTaskForm } = useTasks();
  return (
    <button
      className="manage-tasks-btn btn tooltip-container"
      onClick={() => {
        setAddTaskForm(true);
      }}
    >
      <i className="fa-solid fa-plus"></i>
      <div className="tooltip right">Add new task</div>
    </button>
  );
};
