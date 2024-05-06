import { FC, useState } from "react"
import { Button, ThemeButton } from "components/UIkit/Button"
import { useTheme } from "components/ThemeProvider"
import classNames from "classnames"
import { TaskType } from "./type"
import cls from "./Task.module.scss"
import Trash from "assets/trash-remove-icon.svg"
import Complete from "assets/ok-complete-icon.svg"

interface TaskProps {
    task: TaskType,
    complete: (id: number) => void,
    remove: (id: number) => void
}

export const Task:FC<TaskProps> = ({task, complete, remove}) => {
    const { theme } = useTheme()

    const [mouseOver, setMouseOver] = useState(false)

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
                    onClick={() => complete(task.id)}
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
                    onClick={() => remove(task.id)}
                >
                    <Trash/>
                </Button>
            </div>
        </div>
    )
}
