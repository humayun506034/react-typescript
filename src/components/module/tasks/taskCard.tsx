import { cn } from "@/lib/utils";
import { ITask } from "@/types";

interface IProps {
  task:ITask
}

const TaskCard = ({task}:IProps) => {
  return (
    <div className="mx-7 mb-5">
      <div className="p-4 rounded-md shadow-md w-full bg-white dark:bg-black text-black dark:text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={cn("size-3 rounded-full",{
              "bg-green-500":task.priority==="Low",
              "bg-yellow-500":task.priority==="Medium",
              "bg-red-500":task.priority==="High"
            })}></div>
            <h3 className="text-lg font-semibold">{task.title}</h3>
          </div>
          <div className="flex items-center gap-4 mt-5">
            <button
              aria-label="Delete"
              className="text-red-500 hover:text-red-600 transition-colors"
            >
              🗑️
            </button>
            <input
              type="checkbox"
              className="w-4 h-4 accent-green-500"
              aria-label="Mark as complete"
            />
          </div>
        </div>
        <p className="mt-2">{task.description}</p>
      </div>
    </div>
  );
};

export default TaskCard;
