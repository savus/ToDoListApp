import { useState } from "react";
import { TTask } from "../types";
import toast from "react-hot-toast";

export const Task = ({
  task: { id, content },
  updateTask,
}: {
  task: TTask;
  updateTask: (taskInfo: Partial<TTask>) => Promise<unknown>;
}) => {
  const [editMode, setEditMode] = useState(false);
  const [contentInput, setContentInput] = useState(content);
  const editModeActive = () => (editMode ? "edit-mode" : "");
  return (
    <div className={`task ${editModeActive()}`}>
      <div className="task-content">{content}</div>
      <input
        type="text"
        className="task-input-field"
        placeholder={contentInput}
        value={contentInput}
        onChange={({ target }) => setContentInput(target.value)}
      />
      <div className="button-group">
        <button
          className="edit-button btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            if (editMode === true) {
              updateTask({ id: id, content: contentInput });
            }
            setEditMode(!editMode);
          }}
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
