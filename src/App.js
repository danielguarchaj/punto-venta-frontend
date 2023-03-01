import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Dashboard from "./components/pages/Dashboard";
import Reports from "./components/pages/Reports";
import { APP_URLS } from "./helpers/routes";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={APP_URLS.dashboard} element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path={APP_URLS.reports} element={<Reports />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
