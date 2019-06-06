import Home from "./routes/home/index";
import PlayerView from "./components/playerView/playerView";
import Login from "./components/login/login";

export const routes = [
  {
    Component: Home,
    key: "0",
    path: "/",
    props: {}
  },
  {
    Component: PlayerView,
    key: "1",
    path: "/videoplayer",
    props: { live: true }
  },
  {
    Component: Login,
    key: "2",
    path: "/login",
    props: {}
  }
];
