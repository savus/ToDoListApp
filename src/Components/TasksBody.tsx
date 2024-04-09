import "../css/tasks-body.css";
import { Task } from "./Task";

export const TasksBody = () => {
  return (
    <div className="tasks-body">
      <h3 className="heading">Tasks List</h3>

      <Task content="Go Shopping" />
      <Task content="Feed the dog" />
    </div>
  );
};
