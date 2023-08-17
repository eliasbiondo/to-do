import Status from "./components/Status";
import Tasks from "./components/Tasks";
import Title from "./components/Title";
import { mockedTasks } from "../../mockedTasks"
import AddTask from "./components/Add";

export default function Home() {

  // TO-DO: fetch tasks from db
  const tasks = mockedTasks;

  return (
    <div className="flex flex-col">
      <Status length={tasks.length}/>
      <Title>To-do</Title>
      <Tasks>{tasks}</Tasks>
      <AddTask/>
    </div>
  )
}
