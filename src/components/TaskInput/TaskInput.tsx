import { Button, ThemeButton } from "components/UIkit/Button"
import { Input } from "components/UIkit/Input"
import cls from "./TaskInput.module.scss"
import { useTheme } from "components/ThemeProvider"
import classNames from "classnames"
import { ChangeEvent, KeyboardEvent, useContext, useState } from "react"
import { LOCAL_STORAGE_TASKS_KEY, TasksContext } from "components/TasksProvider/TasksContext"


export const TaskInput = () => {
    const { theme } = useTheme()
    const [taskText, setTaskText] = useState("")
    const { tasks, setTasks } = useContext(TasksContext)

    const handlerTaskAdd = () => {
        const maxId = tasks.length ? Math.max(...tasks.map(task => task.id)) + 1 : 0
        const newTasks = [{id: maxId, text: taskText, isComplete: false}, ...tasks]
        setTasks(newTasks)
        localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(newTasks))
        
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
                placeholder="Введите задачу"
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
