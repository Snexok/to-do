import cls from "./TaskList.module.scss"
import { useTheme } from "components/ThemeProvider"
import classNames from "classnames"
import { Task } from "components/Task"
import { useContext } from "react"
import { LOCAL_STORAGE_TASKS_KEY, TasksContext } from "components/TasksProvider/TasksContext"

export const TaskList = () => {
    const { theme } = useTheme()
    const { tasks, setTasks } = useContext(TasksContext)

    const completeTask = (id: number) => {
        const newTasks = tasks.map(
            t => t.id === id
            ? {...t, isComplete: !t.isComplete} 
            : t)
        setTasks( newTasks )
        localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(newTasks))
    }

    const removeTask = (id: number) => {
        const newTasks = tasks.filter(t => t.id !== id)
        setTasks( newTasks )
        localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(newTasks))
    }

    return (
        <> 
            <div className={classNames(cls.TaskList, cls[theme])}>
                { tasks.length 
                ? tasks.map(task => 
                    <Task 
                        key={task.id}
                        task={task}
                        complete={completeTask}
                        remove={removeTask}
                    />
                )
                : <p className={cls.empty}>Список задач пуст 🥲</p>
                }
            </div>
        </>
    )
}
