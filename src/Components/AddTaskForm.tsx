import { CloseFormButton } from "./CloseFormButton";
import { Button } from "./shared/Button";
import { TextInput } from "./shared/TextInput";
import { ErrorMessage } from "./shared/ErrorMessage";
import "../css/add-task-form.css";
import { useTasks } from "./Providers/TasksProvider";

export const AddTaskForm = () => {
  const { formOpenState, setFormOpenState } = useTasks();

  const formIsOpen = () => (formOpenState ? "open" : "");

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
          }}
        />
        <Button
          className="confirm-button btn btn-primary"
          tooltipLocation=""
          tooltipMessage=""
          onClick={() => {}}
          buttonText="Confirm"
          isLoading={false}
        />
        <ErrorMessage show={false} message="Information is invalid" />
      </div>
    </form>
  );
};
