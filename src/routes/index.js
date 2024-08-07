//Layout

import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import Genre from "../pages/Genre";
import Search from "../pages/Search";
import History from "../pages/History";
import Detail from "../pages/Detail";
import GettingStarted from "../pages/GettingStarted";

// public Route
const publicRoutes = [
  { path: "/", component: GettingStarted, layout: null },
  { path: "/home", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
  { path: "/genre", component: Genre },
  { path: "/search", component: Search },
  { path: "/history", component: History },
  { path: "/detail/:id", component: Detail },
];

//Login before
const privateRoutes = [];

export { publicRoutes, privateRoutes };
