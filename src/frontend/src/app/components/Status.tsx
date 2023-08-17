import { ITask } from "../../../interfaces/ITask";

export default function Status({ length }: { length: number}) {
    return (
        <p className="text-[#757575] text-base font-normal mb-2">{
            length == 0 ? "Nenhuma tarefa" : 
            length == 1 ? "1 tarefa" : length + " tarefas" }</p>
    )
}