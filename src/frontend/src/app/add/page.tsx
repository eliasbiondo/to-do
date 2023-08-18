"use client";
import Image from "next/image";
import Subtitle from "../components/Subtitle";
import InputText from "../components/InputText";
import { useState } from "react";
import InputDatePicker from "../components/InputDatePicker";
import PrimaryButton from "../components/PrimaryButton";

export default function AddNewTask() {
    const [taskName, setTaskName] = useState("");
    const [taskDate, setTaskDate] = useState("");

    const handleTaskNameChange = (value: string) => {
        setTaskName(value);
    }

    const handleTaskDateChange = (value: string) => {
        setTaskDate(value);
    }

    const handleAddTask = async () => {

        try {
            await fetch("http://ec2-34-207-239-60.compute-1.amazonaws.com:3000/task", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: taskName,
                    date: taskDate,
                    isDone: false
                }) 
            });

            window.location.href = "/";
        } catch (error) {
            console.error(error);
        }
        
    }

    return (
        <div className="flex flex-col h-[100%]">
            <div>
                <a className="cursor-pointer" href="/">
                    <Image className="mb-9" src="/back-arrow.svg" alt="back arrow" width={16} height={13} />
                </a>
                <div className="">
                    <Subtitle>O que você está planejando fazer?</Subtitle>
                </div>
                <div className="flex flex-col justify-between">
                    <InputText placeholder="Nome da tarefa" value={taskName} onChange={handleTaskNameChange} onEnter={() => {}}/>
                    <InputDatePicker placeholder="Data de entrega" value={taskDate} onChange={handleTaskDateChange} onEnter={() => {}}/>
                </div>
            </div>
            <div className="h-[100%] w-[100%] flex flex-col justify-end">
                <PrimaryButton onClick={handleAddTask}>Adicionar atividade</PrimaryButton>
            </div>
        </div>
    )
}