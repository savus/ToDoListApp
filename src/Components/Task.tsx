import { useState } from "react";
import { TTask } from "../types";
import { EditButton } from "./shared/EditButton";
import { DeleteButton } from "./shared/DeleteButton";
import { DoneButton } from "./shared/DoneButton";
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

  const { updateTask, deleteTask } = useTasks();

  return (
    <div className={`task ${isEditModeActive()}`}>
      <div className={`task-content ${isTaskCompleted()}`}>{content}</div>
      <TextInput
        inputProps={{
          type: "text",
          className: "task-input-field",
          placeholder: contentInput,
          value: contentInput,
          onChange: ({ target }) => setContentInput(target.value),
        }}
      />
      <div className="button-group">
        <EditButton
          onClick={() => {
            if (editMode === true) {
              updateTask({ id: id, content: contentInput });
            }
            setEditMode(!editMode);
          }}
        />
      </div>
      <DeleteButton
        onClick={() => {
          deleteTask(id);
        }}
      />
      <DoneButton
        completedState={completedState}
        onClick={() => {
          setCompletedState(!completedState);
          updateTask({ id: id, isCompleted: !completedState });
        }}
      />
    </div>
  );
};
