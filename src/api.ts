import { TTask } from "./types";

const base_url = "http://localhost:3000";
const endPoint = "tasks";

const getAllTasks = (): Promise<TTask[]> =>
  fetch(`${base_url}/${endPoint}`).then((response) => {
    if (!response.ok) {
      throw new Error("could not fetch data");
    }
    return response.json();
  });

const updateTask = (id: number, body: Partial<TTask>): Promise<TTask[]> =>
  fetch(`${base_url}/${endPoint}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Could not update task");
    }
    return response.json();
  });

export const Requests = {
  getAllTasks,
  updateTask,
};
