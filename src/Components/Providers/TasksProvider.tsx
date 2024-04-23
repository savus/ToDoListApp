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
  postNewTask: (body: Omit<TTask, "id">) => Promise<unknown>;
  deleteTask: (id: number) => Promise<unknown>;
  updateTask: (taskInfo: Partial<TTask>) => Promise<unknown>;
  updateTaskOpt: (id: number, taskInfo: Partial<TTask>) => Promise<unknown>;
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

  const postNewTask = (body: Omit<TTask, "id">) => {
    setIsLoading(true);
    return Requests.postNewTask(body)
      .then(refetchData)
      .catch((e) => {
        toast.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
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

  const updateTaskOpt = (id: number, taskInfo: Partial<TTask>) => {
    setAllTasks(
      allTasks.map((task) => (task.id === id ? { ...task, ...taskInfo } : task))
    );

    return Requests.updateTask(taskInfo).catch((e) => {
      toast.error(e);
      setAllTasks(allTasks);
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
        postNewTask,
        updateTask,
        updateTaskOpt,
        deleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);
