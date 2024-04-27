import "../css/tasks-body.css";
import { AddTaskModal } from "./AddTaskModal";
import { useTasks } from "./Providers/TasksProvider";
import { Task } from "./Task";

export const TasksBody = () => {
  const { allTasks, isLoading, addTaskForm, setAddTaskForm } = useTasks();
  const reversedTasks = [...allTasks].reverse();
  return (
    <div className="tasks-body">
      <h3 className="heading">
        {isLoading ? "Loading Tasks..." : "Tasks List"}
        <AddTaskModal
          addTaskForm={addTaskForm}
          setAddTaskForm={setAddTaskForm}
        />
      </h3>
      {reversedTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};
