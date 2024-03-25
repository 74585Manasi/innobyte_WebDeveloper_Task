import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Cover from "pages/Cover";
import Landingpage from "pages/Landingpage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "cover",
      element: <Cover />,
    },
    {
      path: "landingpage",
      element: <Landingpage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
