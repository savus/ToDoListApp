import { useState } from "react";
import { TTask } from "../types";
import { Button } from "./shared/Button";
import { TextInput } from "./shared/TextInput";
import { useTasks } from "./Providers/TasksProvider";

export const Task = ({
  task: { id, content, isCompleted },
}: {
  task: TTask;
}) => {
  const [editMode, setEditMode] = useState(false);
  const [contentInput, setContentInput] = useState(content);
  const [completedState, setCompletedState] = useState(isCompleted);

  const isEditModeActive = () => (editMode ? "edit-mode" : "");
  const isTaskCompleted = () => (completedState ? "completed" : "");

  const { updateTaskOpt, deleteTask } = useTasks();

  return (
    <div className={`task ${isEditModeActive()}`}>
      <div className={`task-content ${isTaskCompleted()}`}>{content}</div>
      <TextInput
        inputProps={{
          type: "text",
          className: "task-input-field input-primary",
          placeholder: contentInput,
          value: contentInput,
          onChange: ({ target }) => setContentInput(target.value),
        }}
      />
      <Button
        className="edit-button"
        tooltipLocation="above"
        tooltipMessage="Click to edit"
        onClick={() => {
          if (editMode === true) {
            updateTaskOpt(id, { id: id, content: contentInput });
          }
          setEditMode(!editMode);
        }}
        buttonText="Edit"
      />
      <Button
        className="delete-button"
        tooltipLocation="below"
        tooltipMessage="Click to delete"
        onClick={() => {
          deleteTask(id);
        }}
        buttonText="Delete"
      />
      <Button
        className="done-button"
        tooltipLocation="below"
        tooltipMessage={
          completedState
            ? `Click to mark completed`
            : `Click to mark incompleted`
        }
        onClick={() => {
          setCompletedState(!completedState);
          updateTaskOpt(id, { id: id, isCompleted: !completedState });
        }}
        buttonText={completedState ? "Mark as Undone" : "Mark as done"}
      />
    </div>
  );
};
