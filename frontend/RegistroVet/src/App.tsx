import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./pages/homepage";
import Cadastro from "./pages/cadastro";
import Login from "./pages/login";
import HomepageUser from "./pages/homepageUser";

function App() {
  const routes = createBrowserRouter([
    { path: "/", element: <Homepage/> },
    { path: "/cadastro", element: <Cadastro/> },
    { path: "/login", element: <Login/> },
    { path: "/homepage", element: <HomepageUser/> },
]);
  return <RouterProvider router={routes} />;
}

export default App
