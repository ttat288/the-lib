//Layout
import { HeaderOnly } from "../components/Layout";

import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import Genre from "../pages/Genre";
import Search from "../pages/Search";
import History from "../pages/History";

// public Route
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
  { path: "/genre", component: Genre },
  { path: "/search", component: Search },
  { path: "/history", component: History },
];

//Login before
const privateRoutes = [];

export { publicRoutes, privateRoutes };
