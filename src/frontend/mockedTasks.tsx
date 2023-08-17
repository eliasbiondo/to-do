import { ITask } from "./interfaces/ITask";

export const mockedTasks : ITask[] = [
    {
        id: "1",
        title: 'Task 1',
        date: new Date("2019-01-01"),
        isDone: false
    },
    {
        id: "2",
        title: 'Task 2',
        date: new Date("2019-01-02"),
        isDone: false
    },
]