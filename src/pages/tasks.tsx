import { AddTaskModal } from "@/components/module/tasks/addTaskModal";
import TaskCard from "@/components/module/tasks/taskCard";
import { selectTasks } from "@/redux/features/tasks/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-5">Tasks</h1>
      <div className="flex justify-center items-center my-3">
        <AddTaskModal></AddTaskModal>
      </div>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id}></TaskCard>
      ))}
    </div>
  );
};

export default Tasks;
