import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./pages/homepage";
import Cadastro from "./pages/cadastro";

function App() {
  const routes = createBrowserRouter([
    { path: "/", element: <Homepage/> },
    { path: "/cadastro", element: <Cadastro/> },
]);
  return <RouterProvider router={routes} />;
}

export default App
