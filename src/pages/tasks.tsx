import TaskCard from "@/components/module/tasks/taskCard";
import { selectTasks } from "@/redux/features/tasks/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  console.log(tasks);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-5">Tasks</h1>
      {tasks.map((task) => (
        <TaskCard task={task}></TaskCard>
      ))}
    </div>
  );
};

export default Tasks;
