import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Benefits from "./pages/Benefits";
import Sectors from "./pages/Sectors";
import Gallery from "./pages/Gallery";
import Documents from "./pages/Documents";
import Forms from "./pages/Forms";
import Location from "./pages/Location";
import Leadership from "./pages/Leadership";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: AboutUs },
      { path: "benefits", Component: Benefits },
      { path: "sectors", Component: Sectors },
      { path: "gallery", Component: Gallery },
      { path: "documents", Component: Documents },
      { path: "forms", Component: Forms },
      { path: "location", Component: Location },
      { path: "leadership", Component: Leadership },
    ],
  },
]);