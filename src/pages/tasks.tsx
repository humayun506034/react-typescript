import { AddTaskModal } from "@/components/module/tasks/addTaskModal";
import TaskCard from "@/components/module/tasks/taskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks } from "@/redux/features/tasks/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);

  return (
    <div>
      <div className="flex justify-end items-center px-10">
        <h1 className="text-3xl font-bold text-center mr-auto">Tasks</h1>
        <div>
          <Tabs className=" text-center flex justify-end mr-5">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="flex justify-center items-center my-3">
          <AddTaskModal></AddTaskModal>
        </div>
      </div>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id}></TaskCard>
      ))}
    </div>
  );
};

export default Tasks;
