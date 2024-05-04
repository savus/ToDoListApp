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
  updateTask: (body: Partial<TTask>) => Promise<unknown>;
  deleteTask: (id: number) => Promise<unknown>;
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
      .then(refetchData)
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

  const updateTask = (body: Partial<TTask>) => {
    //optimistic rendering
    setAllTasks(
      allTasks.map((task) =>
        task.id === body.id ? { ...task, ...body } : task
      )
    );

    return Requests.updateTask(body).catch((e) => {
      toast.error(e);
      setAllTasks(allTasks);
    });
  };

  const deleteTask = (id: number) => {
    setAllTasks(allTasks.filter((task) => task.id !== id));

    return Requests.deleteTask(id).catch((e) => {
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
        setIsLoading,
        formOpenState,
        setFormOpenState,
        postNewTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);
