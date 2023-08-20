"use client";
import { useState } from "react";
import { ITask } from "../../../interfaces/ITask";

export default function Task({ children: task }: { children: ITask }) {

    const [checked, setChecked] = useState(task.isDone);

    const handleCheck = async () => {
        const newChecked = !checked;
        setChecked(newChecked);

        try {
            const response = await fetch("http://ec2-54-90-12-77.compute-1.amazonaws.com:3000/task/" + task.id, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    isDone: newChecked
                })
            });

            if (!response.ok) {
                throw new Error('Falha na atualização da tarefa');
            }


        } catch (error) {
            console.error('Ocorreu um erro:', error);
            setChecked(!newChecked);
        }
    };

    return (
        <div>
            <div className="flex flex-row items-center justify-between mb-4">
                <div className="flex flex-row items-center">
                    <input type="checkbox" className="mr-4 peer" id={"checkbox-" + task.id} onChange={handleCheck} checked={checked} />
                    <label htmlFor={"checkbox-" + task.id} className="cursor-pointer text-base font-normal peer-checked:line-through peer-checked:text-[#CCC]">{task.title}</label>
                </div>
            </div>
        </div>
    );
}
