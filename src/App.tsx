import "./css/styles.css";
import "./css/responsive.css";
import "./css/theme.css";
import { MainContainer } from "./Components/MainContainer";
import { AppHeader } from "./Components/AppHeader";
import { TasksBody } from "./Components/TasksBody";
import { ManageTasksButton } from "./Components/ManageTasksButton";
import { TasksProvider } from "./Components/Providers/TasksProvider";

function App() {
  return (
    <>
      <MainContainer>
        <TasksProvider>
          <div className="left-side-container">
            <ManageTasksButton />
          </div>
          <div className="right-side-container">
            <AppHeader />
            <TasksBody />
          </div>
        </TasksProvider>
      </MainContainer>
      {/* MODALS */}
      <form action="#" className="add-task-modal">
        <div className="form-container">
          <header className="form-header">
            <button className="close-button">X</button>
            <h2 className="form-title">Add New Task</h2>
          </header>
          <input
            type="text"
            className="new-task-input"
            placeholder="enter new task"
          />
          <input type="submit" value="confirm" />
          <div className="error-message">Invalid form information</div>
        </div>
      </form>
    </>
  );
}

export default App;
