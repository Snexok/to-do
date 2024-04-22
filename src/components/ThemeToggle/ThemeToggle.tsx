import classNames from "classnames"
import cls from "./ThemeToggle.module.scss"
import Dark from "assets/dark-theme-icon.svg"
import Light from "assets/light-theme-icon.svg"
import { Theme, useTheme } from "components/ThemeProvider"
import { Button, ThemeButton } from "components/UIkit/Button"

interface ThemeToggleProps {
    className?: string
}

export const ThemeToggle = ({className}: ThemeToggleProps) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <Button 
            className={classNames(cls.ThemeToggle, className)} 
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
        >
            { theme === Theme.DARK 
                ? <Dark className={cls.icon}/> 
                : <Light className={cls.icon}/>}
        </Button>
    )
}
