import cls from "./TaskList.module.scss"
import { useTheme } from "components/ThemeProvider"
import classNames from "classnames"
import { Task } from "components/Task"
import { useContext } from "react"
import { TasksContext } from "components/TasksProvider/TasksContext"

export const TaskList = () => {
    const { theme } = useTheme()
    const { tasks } = useContext(TasksContext)

    return (
        <div className={classNames(cls.TaskList, cls[theme])}>
            { tasks.map(task => <Task key={task.id} task={task}/>) }
        </div>
    )
}
