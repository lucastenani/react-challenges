import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>1- Using states</CardTitle>
        </CardHeader>
        <CardContent>
          <span>Counter: {counter}</span>
        </CardContent>
        <CardFooter>
          <Button onClick={handleClickButton}>{toggle ? "ON" : "OFF"}</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>2- Clock</CardTitle>
        </CardHeader>
        <CardContent>
          <span>{clock}</span>
        </CardContent>
      </Card>

      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>3- To Do List</CardTitle>
        </CardHeader>
        <CardContent>
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
        </CardContent>
        <CardFooter>
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
        </CardFooter>
      </Card>
    </section>
  );
}
