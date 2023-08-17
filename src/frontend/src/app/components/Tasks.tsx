import { ITask } from "../../../interfaces/ITask";
import Task from "./Task";

export default function Tasks({children: tasks}: {children: ITask[]}) {
    return (
        <div className="flex flex-col">
            {tasks.map((task) => {
                return <Task key={task.id}>{task}</Task>
            })}
        </div>
    )
}