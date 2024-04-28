import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => navigate("/"), 2000)
    }, [])

    return (
        <div>
            Что-то пошло не так 🥲
        </div>
    )
}
