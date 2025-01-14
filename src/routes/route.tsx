import App from "@/App";
import Tasks from "@/pages/tasks";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Tasks />,
      },
      
    ],
  },
  
]);

export default router;
