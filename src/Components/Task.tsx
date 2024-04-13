import { useState } from "react";
import { TTask } from "../types";

export const Task = ({
  task: { id, content, isCompleted },
}: {
  task: TTask;
}) => {
  const [editMode, setEditMode] = useState(false);
  const editModeActive = () => (editMode ? "edit-mode" : "");
  const taskIsCompleted = () => (isCompleted === true ? "completed" : "");
  return (
    <div className={`task ${editModeActive()} ${taskIsCompleted()}`}>
      <div className="task-content">{content}</div>
      <input type="text" className="task-input-field" placeholder={content} />
      <div className="button-group">
        <button
          className="edit-button btn btn-primary"
          onClick={() => setEditMode(!editMode)}
        >
          Edit
        </button>
        <button className="delete-button btn btn-primary">Delete</button>
      </div>
      <button className="done-button btn btn-primary">
        <i className="fa fa-checked"></i>
        Done
      </button>
    </div>
  );
};
