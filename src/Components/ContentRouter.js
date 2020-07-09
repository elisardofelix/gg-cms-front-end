import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Posts from "./Posts";
import Post from "./Posts/Post";
import Login from "./Login";
import CreatePost from "./Posts/CreatePost";
import CreateUser from "./User/CreateUser";
import NoFound from "./NoFound";
import GlobalContext from "../context/globalcontext";

const ContentRouter = () => {
  const [, , contextMiddleware] = useContext(GlobalContext);
  useEffect(() => {}, []);

  return (
    <div id="main-container">
      <Switch>
        <Route exact path="/">
          <Posts />
        </Route>
        <Route path="/create-user">
          <CreateUser />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route
          path="/create-post"
          component={contextMiddleware.routeProtectedComponent(CreatePost)}
        />
        <Route path="/post/:permalink" component={Post} />
        <Route path="*">
          <NoFound />
        </Route>
      </Switch>
    </div>
  );
};

export default ContentRouter;
