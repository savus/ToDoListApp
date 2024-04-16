import "../css/add-task-modal.css";
export const AddTaskModal = () => {
  return (
    <form action="#" className="add-task-modal">
      <div className="form-container">
        <header className="form-header">
          <h2 className="form-title">Add New Task</h2>
          <button className="close-button btn">X</button>
        </header>
        <input
          type="text"
          className="new-task-input input-primary"
          placeholder="enter new task"
        />
        <input type="submit" value="confirm" />
        <div className="error-message">Invalid form information</div>
      </div>
    </form>
  );
};
