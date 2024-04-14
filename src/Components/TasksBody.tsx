import { useEffect, useState } from "react";
import "../css/tasks-body.css";
import { Task } from "./Task";

export const TasksBody = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="tasks-body">
      <h3 className="heading">Tasks List</h3>
    </div>
  );
};
