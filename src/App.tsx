import "./css/styles.css";
import "./css/responsive.css";
import "./css/theme.css";
import { MainContainer } from "./Components/MainContainer";
import { AppHeader } from "./Components/AppHeader";
import { TasksBody } from "./Components/TasksBody";
import { ManageTasksButton } from "./Components/ManageTasksButton";
import { TasksProvider } from "./Components/Providers/TasksProvider";
import { AddTaskModal } from "./Components/AddTaskModal";
import { useState } from "react";

function App() {
  const [addTaskForm, setAddTaskForm] = useState(false);
  return (
    <>
      <MainContainer>
        <TasksProvider>
          <div className="left-side-container">
            <ManageTasksButton setAddTaskForm={setAddTaskForm} />
          </div>
          <div className="right-side-container">
            <AppHeader />
            <TasksBody />
          </div>
        </TasksProvider>
      </MainContainer>
      {/* MODALS */}
      <AddTaskModal addTaskForm={addTaskForm} setAddTaskForm={setAddTaskForm} />
    </>
  );
}

export default App;
