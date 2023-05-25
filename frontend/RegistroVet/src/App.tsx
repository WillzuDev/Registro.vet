import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./pages/homepage";
import Cadastro from "./pages/cadastro";
import Login from "./pages/login";

function App() {
  const routes = createBrowserRouter([
    { path: "/", element: <Homepage/> },
    { path: "/login", element: <Login/> },
    { path: "/cadastro", element: <Cadastro/> },
]);
  return <RouterProvider router={routes} />;
}

export default App
