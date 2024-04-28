import { useTasks } from "./Providers/TasksProvider";

export const ManageTasksButton = () => {
  const { formOpenState, setFormOpenState } = useTasks();
  const setTooltipMessage = () => (formOpenState ? "Close" : "Add new task");
  return (
    <button
      className="manage-tasks-btn btn tooltip-container"
      onClick={() => setFormOpenState(!formOpenState)}
    >
      <i className="fa-solid fa-plus"></i>
      <div className="tooltip right">{setTooltipMessage()}</div>
    </button>
  );
};
