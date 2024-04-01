import "../css/tasks-body.css";

export const TasksBody = () => {
  return (
    <div className="tasks-body">
      <h3 className="heading">Tasks List</h3>
      <div className="task">
        <div className="task-content">Go shopping</div>
        <div className="button-group">
          <button className="edit-button">Edit</button>
          <button className="delete-button">Delete</button>
        </div>
        <div className="done-button">
          <i className="fa fa-checked"></i>
          Done
        </div>
      </div>
    </div>
  );
};
