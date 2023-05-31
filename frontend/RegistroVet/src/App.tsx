// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from './routes/PrivateRoute'

import Homepage from "./pages/homepage";
import Cadastro from "./pages/cadastro";
import Login from "./pages/login";
import HomepageUser from "./pages/homepageUser";

function App() {
  return (
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route element={<HomepageUser />} path="/homepage" />
          </Route>

          <Route element={<Homepage />} path="/"/>
          <Route element={<Cadastro />} path="/cadastro"/>
          <Route element={<Login />} path="/login"/>

        </Routes>
      </Router>
  );
}

export default App
