import classNames from "classnames"
import cls from "./Input.module.scss"
import { FC, InputHTMLAttributes, MutableRefObject } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

export const Input:FC<InputProps> = (props) => {
    const {className, placeholder, value, onChange, onKeyDown} = props

    return (
        <input
            value={value}
            placeholder={placeholder} 
            className={classNames(cls.Input, className)}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    )
}
