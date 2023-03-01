import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Dashboard from "./components/pages/Dashboard";
import Reports from "./components/pages/Reports";
import Login from "./components/pages/Login";
import { APP_URLS } from "./helpers/routes";

const routesConfig = [
  {
    path: APP_URLS.login,
    element: <Login />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: APP_URLS.dashboard,
        element: <Dashboard />,
      },
      {
        path: APP_URLS.reports,
        element: <Reports />,
      },
    ],
  },
];

const router = createBrowserRouter(routesConfig);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
