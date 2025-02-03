import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

interface Task {
  id: number;
  task: string;
}

export function States() {
  const [toggle, setToogle] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);
  const [clock, setClock] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const [filter, setFilter] = useState<string>("");

  function handleClickButton() {
    setToogle((prevState) => !prevState);
    setCounter((prevState) => (prevState += 1));
  }

  function handleCreateTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newTask: Task = { id, task: input };
    setTasks((prevState) => {
      return [...prevState, newTask];
    });
    setId((prevState) => (prevState += 1));
    setInput("");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      setClock(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="space-y-7">
      <article className="flex flex-col items-center justify-center gap-3">
        <h2 className="text-xl">1- Using states</h2>
        <span>Counter: {counter}</span>
        <Button onClick={handleClickButton}>{toggle ? "ON" : "OFF"}</Button>
      </article>
      <article className="flex flex-col items-center justify-center gap-3">
        <h2 className="text-xl">2- Clock</h2>
        <span> {clock}</span>
      </article>
      <article className="mx-auto my-0 flex max-w-[500px] flex-col items-center justify-center gap-3">
        <h2 className="text-xl">3- To Do List</h2>
        <div className="flex gap-8">
          <form className="flex gap-2">
            <Input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="New Task"
            />
            <Button onClick={(e) => handleCreateTask(e)} type="button">
              Create task
            </Button>
          </form>
          <form className="flex gap-2">
            <Input
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Filter tasks"
            />
          </form>
        </div>

        <Table>
          <TableCaption>A list of tasks</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Task</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks
              .filter(({ task }) => task.includes(filter))
              .map((task) => (
                <TableRow key={task.id}>
                  <TableCell>{task.id}</TableCell>
                  <TableCell className="font-medium">{task.task}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </article>
    </section>
  );
}
