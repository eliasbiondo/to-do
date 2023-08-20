import Status from "./components/Status";
import Tasks from "./components/Tasks";
import Title from "./components/Title";
import AddTask from "./components/Add";

export default async function Home() {

  const data = await fetch("http://ec2-54-90-12-77.compute-1.amazonaws.com:3000" + "/task", 
    {
      cache: "no-store"
    });
  const tasks = await data.json();

  return (
    <div className="flex flex-col">
      <Status length={tasks.length}/>
      <Title>To-do</Title>
      <Tasks>{tasks}</Tasks>
      <AddTask/>
    </div>
  )
}
