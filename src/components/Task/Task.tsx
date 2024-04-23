import { useRef, useState } from "react"
import { Button, ThemeButton } from "components/UIkit/Button"
import { useTheme } from "components/ThemeProvider"
import classNames from "classnames"
import cls from "./Task.module.scss"
import Trash from "assets/trash-remove-icon.svg"
import Complete from "assets/ok-complete-icon.svg"

export const Task = () => {
    const {theme} = useTheme()

    const [isComplete, setIsComplete] = useState(false)
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
                    className={classNames(cls.checkBox, {[cls.complete]: isComplete})}
                    onClick={() => setIsComplete(prev => !prev)}
                >
                    { isComplete ? <Complete/> : undefined }
                </Button>
                <div className={cls.text}>
                    Text
                </div>
            </div>
            <div>
                <Button
                    theme={ThemeButton.CLEAR} 
                    className={classNames(cls.remove, {[cls.hidden]: !mouseOver})}
                >
                    <Trash/>
                </Button>
            </div>
        </div>
    )
}
