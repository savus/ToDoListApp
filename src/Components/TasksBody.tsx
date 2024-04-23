import "../css/tasks-body.css";
import { useTasks } from "./Providers/TasksProvider";
import { Task } from "./Task";

export const TasksBody = () => {
  const { allTasks } = useTasks();
  const reversedTasks = [...allTasks].reverse();
  return (
    <div className="tasks-body">
      <h3 className="heading">Tasks List</h3>
      {reversedTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};
