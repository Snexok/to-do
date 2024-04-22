import { Button, ThemeButton } from "components/UIkit/Button"
import cls from "./Task.module.scss"
import { useTheme } from "components/ThemeProvider"
import classNames from "classnames"

export const Task = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames(cls.Task, cls[theme])}>
            Task
        </div>
    )
}
