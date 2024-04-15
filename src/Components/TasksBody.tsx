import "../css/tasks-body.css";
import { useTasks } from "./Providers/TasksProvider";
import { Task } from "./Task";

export const TasksBody = () => {
  const { allTasks } = useTasks();
  return (
    <div className="tasks-body">
      <h3 className="heading">Tasks List</h3>
      {allTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};
