import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  IRouter,
  routerData,
} from "../controlers/router controler/routerControler";
export const Router = () => {
  return (
    <Switch>
      {routerData.map((element: IRouter) => {
        const { path, component } = element;
        return <Route path={path} component={component} />;
      })}
    </Switch>
  );
};
