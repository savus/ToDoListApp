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
  );
}

export default App;
