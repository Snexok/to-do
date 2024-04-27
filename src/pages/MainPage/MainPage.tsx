import { TaskInput } from "components/TaskInput"
import { TaskList } from "components/TaskList"
import { TasksProvider } from "components/TasksProvider"

export const MainPage = () => {
    return (
        <div>
            <TasksProvider>
                <TaskInput/>
                <TaskList/>
            </TasksProvider>
        </div>
    )
}
