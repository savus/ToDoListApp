import { CloseFormButton } from "./CloseFormButton";
import { Button } from "./shared/Button";
import { TextInput } from "./shared/TextInput";
import { ErrorMessage } from "./shared/ErrorMessage";
import "../css/add-task-form.css";
import { useTasks } from "./Providers/TasksProvider";
import { useState } from "react";
import { isTaskEmpty } from "../validations";
import toast from "react-hot-toast";

const emptyTaskErrorMessage = "Task cannot be 0 characters";

export const AddTaskForm = () => {
  const { formOpenState, setFormOpenState, postNewTask } = useTasks();

  const formIsOpen = () => (formOpenState ? "open" : "");

  const [newTaskInput, setNewTaskInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const taskInputIsValid = !isTaskEmpty(newTaskInput);

  const showEmptyTaskError = isSubmitted && !taskInputIsValid;

  const doBadInputsExist = !taskInputIsValid;

  return (
    <form action="#" className={`add-task-form ${formIsOpen()}`}>
      <div className="form-container">
        <header className="form-header">
          <h2 className="form-title">Add New Task</h2>
          <CloseFormButton onClick={() => setFormOpenState(false)} />
        </header>
        <TextInput
          inputProps={{
            type: "text",
            className: "new-task-input input-primary",
            placeholder: "enter new task",
            value: newTaskInput,
            onChange: ({ target }) => setNewTaskInput(target.value),
          }}
        />
        <Button
          className="confirm-button btn btn-primary"
          tooltipLocation=""
          tooltipMessage=""
          onClick={() => {
            setIsSubmitted(true);
            if (!doBadInputsExist) {
              postNewTask({
                content: newTaskInput,
                isCompleted: false,
              }).catch(() => {
                toast.error("Oops something went wrong");
              });
            }
          }}
          buttonText="Confirm"
          isLoading={false}
        />
        <ErrorMessage
          show={showEmptyTaskError}
          message={emptyTaskErrorMessage}
        />
      </div>
    </form>
  );
};
