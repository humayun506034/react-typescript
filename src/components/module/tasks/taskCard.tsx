import { cn } from "@/lib/utils";
import {
  deleteTask,
  toggleCompleteState,
} from "@/redux/features/tasks/taskSlice";
import { useAppDispatch } from "@/redux/hook";
import { ITask } from "@/types";
import { UpdateTaskModal } from "./updateTaskModal";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="mx-7 mb-5">
      <div className="p-4 rounded-md shadow-md w-full bg-white dark:bg-black text-black dark:text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className={cn("size-3 rounded-full", {
                "bg-green-500": task.priority === "low",
                "bg-yellow-500": task.priority === "medium",
                "bg-red-500": task.priority === "high",
              })}
            ></div>
            <h3 className={cn({ "line-through": task.isCompleted })}>
              {task.title}
            </h3>
          </div>
          <div className="flex items-center gap-4 mt-5">
            <button
              onClick={() => dispatch(deleteTask(task.id))}
              aria-label="Delete"
              className="text-red-500 hover:text-red-600 transition-colors"
            >
              🗑️
            </button>

            <input
              checked={task.isCompleted}
              type="checkbox"
              className="w-4 h-4 accent-green-500"
              aria-label="Mark as complete"
              onClick={() => dispatch(toggleCompleteState(task.id))}
            />
            <UpdateTaskModal id={task.id}></UpdateTaskModal>
          </div>
        </div>
        <p className="mt-2">{task.description}</p>
      </div>
    </div>
  );
};

export default TaskCard;
