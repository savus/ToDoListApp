import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Requests } from "../../api";
import toast from "react-hot-toast";
import { TTask } from "../../types";

type TTasksProvider = {
  allTasks: TTask[];
  setAllTasks: (allTasks: TTask[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  deleteTask: (id: number) => Promise<unknown>;
  updateTask: (taskInfo: Partial<TTask>) => Promise<unknown>;
};

const TasksContext = createContext({} as TTasksProvider);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
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
    <TasksContext.Provider
      value={{
        allTasks,
        setAllTasks,
        isLoading,
        setIsLoading,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);
