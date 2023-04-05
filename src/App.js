import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import { APP_URLS } from "./helpers/routes";
import Billing from "./components/pages/Billing";
import PurchasesReport from "./components/pages/PurchasesReport";

const routesConfig = [
  {
    path: APP_URLS.login,
    element: <Login />,
  },
  {
    path: APP_URLS.admin,
    element: <div>Pagina de administracion</div>,
  },
  {
    element: <Layout />,
    children: [
      {
        path: APP_URLS.dashboard,
        element: <Dashboard />,
      },
      {
        path: APP_URLS.billing,
        element: <Billing />,
      },
      {
        path: APP_URLS.reports.purchases,
        element: <PurchasesReport />,
      },
    ],
  },
];

const router = createHashRouter(routesConfig);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
