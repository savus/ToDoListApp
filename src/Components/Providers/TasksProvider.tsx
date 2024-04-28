import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { TTask } from "../../types";
import { Requests } from "../../api";
import toast from "react-hot-toast";

type TTasksProvider = {
  allTasks: TTask[];
  setAllTasks: (allTasks: TTask[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  formOpenState: boolean;
  setFormOpenState: (formOpenState: boolean) => void;
  postNewTask: (body: Omit<TTask, "id">) => Promise<unknown>;
};

const TasksContext = createContext({} as TTasksProvider);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [allTasks, setAllTasks] = useState<TTask[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formOpenState, setFormOpenState] = useState(false);

  const refetchData = () => {
    setIsLoading(true);
    return Requests.getAllTasks()
      .then(setAllTasks)
      .then(() => {
        toast.success("Tasks successfully loaded");
      })
      .catch((e) => {
        toast.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const postNewTask = (body: Omit<TTask, "id">) => {
    setIsLoading(true);
    return Requests.postNewTask(body)
      .then(() => {
        toast.success("New Task posted!");
      })
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
        formOpenState,
        setFormOpenState,
        postNewTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);
