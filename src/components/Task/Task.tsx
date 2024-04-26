import { FC, useContext, useRef, useState } from "react"
import { Button, ThemeButton } from "components/UIkit/Button"
import { useTheme } from "components/ThemeProvider"
import classNames from "classnames"
import { TaskType } from "./type"
import { LOCAL_STORAGE_TASKS_KEY, TasksContext } from "components/TasksProvider/TasksContext"
import cls from "./Task.module.scss"
import Trash from "assets/trash-remove-icon.svg"
import Complete from "assets/ok-complete-icon.svg"

interface TaskProps {
    task: TaskType
}

export const Task:FC<TaskProps> = ({task}) => {
    const { theme } = useTheme()

    const [mouseOver, setMouseOver] = useState(false)
    const { tasks, setTasks } = useContext(TasksContext)

    const handlerClickComplete = () => {
        const newTasks = tasks.map(
            t => t.id === task.id
            ? {...t, isComplete: !t.isComplete} 
            : t)
        setTasks( newTasks )
        localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(newTasks))
    }
    const handlerClickDelete = () => {
        const newTasks = tasks.filter(t => t.id !== task.id)
        setTasks( newTasks )
        localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(newTasks))
    }
    const handlerMouseOver = () => {
        setMouseOver(true)
    }
    const handlerMouseLeave = () => {
        setMouseOver(false)
    }

    return (
        <div className={classNames(cls.Task, cls[theme])} 
             onMouseOver={handlerMouseOver} 
             onMouseLeave={handlerMouseLeave}
        >
            <div className={cls.leftContainer}>
                <Button
                    theme={ThemeButton.CLEAR}
                    className={classNames(cls.checkBox, {[cls.complete]: task.isComplete})}
                    onClick={handlerClickComplete}
                >
                    { task.isComplete ? <Complete/> : undefined }
                </Button>
                <div className={cls.text}>
                    { task.text }
                </div>
            </div>
            <div>
                <Button
                    theme={ThemeButton.CLEAR} 
                    className={classNames(cls.remove, {[cls.hidden]: !mouseOver})}
                    onClick={handlerClickDelete}
                >
                    <Trash/>
                </Button>
            </div>
        </div>
    )
}
