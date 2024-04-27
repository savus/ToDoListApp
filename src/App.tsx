import "./css/styles.css";
import "./css/responsive.css";
import "./css/theme.css";
import { MainContainer } from "./Components/MainContainer";
import { AppHeader } from "./Components/AppHeader";
import { TasksBody } from "./Components/TasksBody";
import { ManageTasksButton } from "./Components/ManageTasksButton";
import { TasksProvider } from "./Components/Providers/TasksProvider";
import { SideContainer } from "./Components/SideContainer";

function App() {
  return (
    <>
      <TasksProvider>
        <MainContainer>
          <SideContainer side="left">
            <ManageTasksButton />
          </SideContainer>
          <SideContainer side="right">
            <AppHeader />
            <TasksBody />
          </SideContainer>
        </MainContainer>
      </TasksProvider>
    </>
  );
}

export default App;
