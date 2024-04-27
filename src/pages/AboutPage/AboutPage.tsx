import GitHub from "assets/github-icon.svg"
import { useTheme } from "components"
import { AppLink } from "components/UIkit/AppLink"
import cls from "./AboutPage.module.scss"
import classNames from "classnames"

export const AboutPage = () => {
    const {theme} = useTheme()

    return (
        <div className={cls.AboutPage}>
            <h2>Это сайт типа To Do List</h2>
            Написаный на React и TypeScript<br/>
            <br/>
            Реализован функционал <b>CRUD</b><br/>
            с использованием <b>LocalStorage</b><br/>
            <br/>
            Репозиторий на <AppLink to="https://github.com/Snexok/to-do" className={classNames(cls.link, [cls[theme]])}>GitHub <GitHub className={classNames(cls.github, [cls[theme]])}/></AppLink>
        </div>
    )
}
