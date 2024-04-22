import cls from "./TaskList.module.scss"
import { useTheme } from "components/ThemeProvider"
import classNames from "classnames"
import { Task } from "components/Task"

export const TaskList = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames(cls.TaskList, cls[theme])}>
            <Task></Task>
            <Task></Task>
            <Task></Task>
        </div>
    )
}
