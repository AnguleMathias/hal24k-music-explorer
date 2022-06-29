import React from "react";
import { Route, Routes as PageRoutes } from "react-router-dom";

import Discover from "../pages/Discover";
import NotFound from "../pages/NotFound";

const Routes = () => {
  return (
    <PageRoutes>
      <Route path="/" element={<Discover />} />
      <Route path="*" element={<NotFound />} />
    </PageRoutes>
  );
};

export default Routes;
