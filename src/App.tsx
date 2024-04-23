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
import { SideContainer } from "./Components/SideContainer";

function App() {
  const [addTaskForm, setAddTaskForm] = useState(false);
  return (
    <>
      <TasksProvider>
        <MainContainer>
          <SideContainer side="left">
            <ManageTasksButton setAddTaskForm={setAddTaskForm} />
          </SideContainer>
          <SideContainer side="right">
            <AppHeader />
            <TasksBody />
          </SideContainer>
        </MainContainer>
        {/* MODALS */}
        <AddTaskModal
          addTaskForm={addTaskForm}
          setAddTaskForm={setAddTaskForm}
        />
      </TasksProvider>
    </>
  );
}

export default App;
