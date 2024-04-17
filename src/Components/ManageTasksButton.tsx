export const ManageTasksButton = ({
  setAddTaskForm,
}: {
  setAddTaskForm: (addTaskForm: boolean) => void;
}) => {
  return (
    <button
      className="manage-tasks-btn btn tooltip-container"
      onClick={() => {
        setAddTaskForm(true);
      }}
    >
      <i className="fa-solid fa-plus"></i>
      <div className="tooltip right">Practice</div>
    </button>
  );
};
