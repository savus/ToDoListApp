import { useEffect, useState } from "react";
import { Requests } from "../api";
import "../css/tasks-body.css";
import { Task } from "./Task";
import { TTask } from "../types";
import toast from "react-hot-toast";

export const TasksBody = () => {
  const [allTasks, setAllTasks] = useState<TTask[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const refetchData = () => {
    setIsLoading(true);
    return Requests.getAllTasks()
      .then((data) => {
        toast.success("Data fetched successfully");
        return setAllTasks(data);
      })
      .catch((e) => {
        toast.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const updateTask = (id: number, body: Partial<TTask>) => {
    setIsLoading(true);
    return Requests.updateTask(id, body)
      .then(refetchData)
      .catch(() => {
        toast.error("Something went wrong");
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
        <Task key={task.id} task={task} updateTask={updateTask} />
      ))}
    </div>
  );
};
