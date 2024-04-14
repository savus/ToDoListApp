import { TTask } from "./types";

const base_url = "http://localhost:3000";
const endPoint = "tasks";

const getAllTasks = (): Promise<TTask[]> =>
  fetch(`${base_url}/${endPoint}`).then((response) => {
    if (!response.ok) {
      throw new Error("Could not fetch tasks data");
    }
    return response.json();
  });

const updateTask = (taskInfo: Partial<TTask>): Promise<TTask[]> =>
  fetch(`${base_url}/${endPoint}/${taskInfo.id}`, {
    method: "PATCH",
    body: JSON.stringify(taskInfo),
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Could not update");
    }
    return response.json();
  });

export const Requests = {
  getAllTasks,
  updateTask,
};
