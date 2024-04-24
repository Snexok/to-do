import { FC, useMemo, useState } from "react"
import { LOCAL_STORAGE_TASKS_KEY, TasksContext } from "./TasksContext"
import { TaskType } from "components/Task"


const defaultTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY)) as TaskType[] || []

const TasksProvider: FC = ({ children }) => {
    
    const [tasks, setTasks] = useState<TaskType[]>(defaultTasks)

    const defaultProps = useMemo(() => ({
        tasks,
        setTasks
    }), [tasks])

    return (
        <TasksContext.Provider value={defaultProps}>
            { children }
        </TasksContext.Provider>
    )
}

export default TasksProvider
