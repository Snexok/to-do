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
    const [taskText, setTaskText] = useState("")

    const handlerTaskAdd = () => {
        const maxId = tasks.length ? Math.max(...tasks.map(task => task.id)) + 1 : 0
        setTasks([{id: maxId, text: taskText, isComplete: false}, ...tasks])
        setTaskText("")
    }
    const handlerTaskInput = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskText(e.target.value)
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
                value={taskText}
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
