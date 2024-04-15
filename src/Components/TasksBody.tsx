import { useEffect, useState } from "react";
import "../css/tasks-body.css";
import { TTask } from "../types";
import { Requests } from "../api";
import toast from "react-hot-toast";
import { Task } from "./Task";

export const TasksBody = () => {
  const [allTasks, setAllTasks] = useState<TTask[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const refetchData = () => {
    setIsLoading(true);
    return Requests.getAllTasks()
      .then(setAllTasks)
      .catch((e) => {
        toast.error(e);
      })
      .finally(() => setIsLoading(false));
  };

  const deleteTask = (id: number) => {
    setIsLoading(true);
    return Requests.deleteTask(id)
      .then(refetchData)
      .catch((e) => {
        toast.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const updateTask = (taskInfo: Partial<TTask>) => {
    setIsLoading(true);
    return Requests.updateTask(taskInfo)
      .then(refetchData)
      .catch((e) => {
        toast.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    refetchData();
  }, []);

  return (
    <div className="tasks-body">
      <h3 className="heading">Tasks List</h3>
      {allTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};
