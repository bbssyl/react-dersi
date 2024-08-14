import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView";
import PostView from "../views/PostView";
import PostViewNoneQuery from "../views/PostViewNoneQuery";
const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeView />,
    },
    {
      path: "/posts",
      element: <PostView />,
    },
    {
      path: "/postsNoneQuery",
      element: <PostViewNoneQuery />,
    },
  ]);
  return routes;
};

export default Router;
