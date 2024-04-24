import { Button, ThemeButton } from "components/UIkit/Button"
import { Input } from "components/UIkit/Input"
import cls from "./TaskInput.module.scss"
import { useTheme } from "components/ThemeProvider"
import classNames from "classnames"
import { ChangeEvent, KeyboardEvent, useContext, useState } from "react"
import { TasksContext } from "components/TasksProvider/TasksContext"


export const TaskInput = () => {
    const { theme } = useTheme()
    const { tasks, setTasks } = useContext(TasksContext)
    const [task, setTask] = useState("")

    const handlerTaskAdd = () => {
        console.log(task);
    }
    const handlerTaskInput = (e: ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value)
    }
    const handlerKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter')
            handlerTaskAdd()
    }

    return (
        <div className={classNames(cls.TaskInput, cls[theme])}>
            <Input
                placeholder="Ввод"
                className={cls.Input}
                onChange={handlerTaskInput}
                onKeyDown={handlerKeyDown}
            />
            <Button
                theme={ThemeButton.CLEAR}
                className={cls.Button}
                onClick={handlerTaskAdd}
            >+</Button>
        </div>
    )
}
