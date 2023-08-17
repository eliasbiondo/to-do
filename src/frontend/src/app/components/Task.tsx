"use client";
import { ITask } from "../../../interfaces/ITask";

export default function Task({children: task}: {children: ITask}) {
    
    return (
        <div>
            <div className="flex flex-row items-center justify-between mb-4">
                <div className="flex flex-row items-center">
                    <input type="checkbox" className="mr-4 peer" id={"checkbox-"+task.id}/>
                    <label htmlFor={"checkbox-"+task.id} className="cursor-pointer text-base font-normal peer-checked:line-through peer-checked:text-[#CCC]">{task.title}</label>
                </div>
            </div>
        </div>
    )
}