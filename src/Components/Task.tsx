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

  const { isLoading, updateTask, deleteTask } = useTasks();

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
          setEditMode(!editMode);
          updateTask({ id: id, content: contentInput });
        }}
        buttonText="Edit"
        isLoading={isLoading}
      />
      <Button
        className="delete-button"
        tooltipLocation="below"
        tooltipMessage="Click to delete"
        onClick={() => {
          deleteTask(id);
        }}
        buttonText="Delete"
        isLoading={isLoading}
      />
      <Button
        className="done-button"
        tooltipLocation="below"
        tooltipMessage={
          completedState
            ? `Click to mark incompleted`
            : `Click to mark completed`
        }
        onClick={() => {
          setCompletedState(!completedState);
          updateTask({ id: id, isCompleted: !completedState });
        }}
        buttonText={completedState ? "Mark as unfinished" : "Mark as finished "}
        isLoading={isLoading}
      />
    </div>
  );
};
