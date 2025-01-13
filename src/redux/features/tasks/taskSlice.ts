import { RootState } from "./../../store";
import { ITask } from "@/types";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "bHETpehgvguIdg3RHPG5B",
      isCompleted: false,
      title: "Python Problem Solving",
      description: "If you solve the error you win a gift.",
      priority: "high",
      dueDate: "2025-01-20T18:00:00.000Z",
    },
  ],
  filter: "all",
};

export type DraftTask = Pick<
  ITask,
  "title" | "description" | "dueDate" | "priority"
>;
const createTask = (taskData: DraftTask): ITask => {
  return {
    id: nanoid(),
    isCompleted: false,
    ...taskData,
  };
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      // console.log(action);
      state.tasks.forEach((task) => {
        if (task.id === action.payload) {
          task.isCompleted = !task.isCompleted;
        }
      });
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action: PayloadAction<Partial<ITask>>) => {
      const { id, ...others } = action.payload;

      // Find the task to be updated
      const matchTask = state.tasks.find((task) => task.id === id);

      if (matchTask) {
        // Convert Proxy object to normal object (if necessary)
        const task = JSON.parse(JSON.stringify(matchTask));

        // Update the task properties
        Object.assign(task, others);

        // console.log("Updated task:", task);

        // Find the index of the task and update it in the state
        const taskIndex = state.tasks.findIndex((task) => task.id === id);
        if (taskIndex !== -1) {
          state.tasks[taskIndex] = task;
        }
      }
    },
    updateFilter: (
      state,
      action: PayloadAction<"all" | "high" | "medium" | "low">
    ) => {
      state.filter = action.payload;
    },
  },
});

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "low") {
    return state.todo.tasks.filter((task) => task.priority === "low");
  } else if (filter === "medium") {
    return state.todo.tasks.filter((task) => task.priority === "medium");
  } else if (filter === "high") {
    return state.todo.tasks.filter((task) => task.priority === "high");
  } else {
    return state.todo.tasks;
  }
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const {
  addTask,
  toggleCompleteState,
  deleteTask,
  updateTask,
  updateFilter,
} = taskSlice.actions;

export default taskSlice.reducer;
