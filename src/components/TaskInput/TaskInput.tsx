import { Button, ThemeButton } from "components/UIkit/Button"
import { Input } from "components/UIkit/Input"
import cls from "./TaskInput.module.scss"
import { useTheme } from "components/ThemeProvider"
import classNames from "classnames"

export const TaskInput = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames(cls.TaskInput, cls[theme])}>
            <Input placeholder="Ввод" className={cls.Input}/>
            <Button theme={ThemeButton.CLEAR} className={cls.Button}>+</Button>
        </div>
    )
}
