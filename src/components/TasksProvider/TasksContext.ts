import { TaskType } from "components/Task";
import { createContext } from "react";

export interface TasksContextProps {
    tasks?: TaskType[];
    setTasks?: (tasks: TaskType[]) => void;
}

export const TasksContext = createContext<TasksContextProps>({})

export const LOCAL_STORAGE_TASKS_KEY = "tasks"
