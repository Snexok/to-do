import classNames from "classnames"
import cls from "./Input.module.scss"
import { FC, InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

export const Input:FC<InputProps> = (props) => {
    const {className, placeholder} = props

    return (
        <input placeholder={placeholder} className={classNames(cls.Input, className)}/>
    )
}
