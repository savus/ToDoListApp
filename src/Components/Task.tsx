import { useState } from "react";
import { TTask } from "../types";
import toast from "react-hot-toast";

export const Task = ({
  task: { id, content, isCompleted },
  updateTask,
}: {
  task: TTask;
  updateTask: (taskInfo: Partial<TTask>) => Promise<unknown>;
}) => {
  const [editMode, setEditMode] = useState(false);
  const [contentInput, setContentInput] = useState(content);
  const [completedState, setCompletedState] = useState(isCompleted);

  const isEditModeActive = () => (editMode ? "edit-mode" : "");
  const isTaskCompleted = () => (completedState ? "completed" : "");
  return (
    <div className={`task ${isEditModeActive()}`}>
      <div className={`task-content ${isTaskCompleted()}`}>{content}</div>
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
      <button
        className="done-button btn btn-primary"
        onClick={() => {
          setCompletedState(!completedState);
          updateTask({ id: id, isCompleted: !completedState });
        }}
      >
        <i className="fa fa-checked"></i>
        {completedState ? "Unmark as Done" : "Mark as Done"}
      </button>
    </div>
  );
};
