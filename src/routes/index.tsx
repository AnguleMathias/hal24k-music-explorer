import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import Discover from "../pages/Discover";
import NotFound from "../pages/NotFound";

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Discover /> },
    { path: "*", element: <NotFound /> },
  ]);
  return routes;
};

const Routes = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default Routes;
