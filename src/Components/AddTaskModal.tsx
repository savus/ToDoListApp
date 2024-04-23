import { useState } from "react";
import "../css/add-task-modal.css";
import { CloseFormButton } from "./CloseFormButton";
import { Button } from "./shared/Button";
import { TextInput } from "./shared/TextInput";
import { isTaskEmpty } from "../validations";
import { ErrorMessage } from "./shared/ErrorMessage";
import { useTasks } from "./Providers/TasksProvider";
import toast from "react-hot-toast";
export const AddTaskModal = ({
  addTaskForm,
  setAddTaskForm,
}: {
  addTaskForm: boolean;
  setAddTaskForm: (addTaskForm: boolean) => void;
}) => {
  const isFormOpen = () => (addTaskForm ? "active" : "");
  const [newTaskInput, setNewTaskInput] = useState("");
  const taskInputIsValid = isTaskEmpty(newTaskInput);
  const { postNewTask, isLoading } = useTasks();
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const doBadInputsExist = !taskInputIsValid && hasSubmitted;

  return (
    <form action="#" className={`add-task-modal ${isFormOpen()}`}>
      <div className="form-container">
        <header className="form-header">
          <h2 className="form-title">Add New Task</h2>
          <CloseFormButton
            onClick={() => {
              setAddTaskForm(false);
            }}
          />
        </header>
        <TextInput
          inputProps={{
            type: "text",
            className: "new-task-input input-primary",
            placeholder: "enter new task",
            onChange: ({ target }) => setNewTaskInput(target.value),
          }}
        />
        <Button
          className="confirm-button btn btn-primary"
          tooltipLocation=""
          tooltipMessage=""
          onClick={() => {
            setHasSubmitted(true);
            if (!doBadInputsExist) {
              postNewTask({ content: newTaskInput, isCompleted: false }).catch(
                (e) => {
                  toast.error(e);
                }
              );
            }
          }}
          buttonText="Confirm"
          isLoading={isLoading}
        />
        <ErrorMessage
          show={doBadInputsExist}
          message="Information is invalid"
        />
      </div>
    </form>
  );
};
