import { createBrowserHistory } from "history";
import React from "react";
import pathConts from "../constants/pathConts";

export const getBreadcrumbsFromPath = (statePath, path) => {
  if (statePath !== path) {
    switch (path) {
      default:
        break;
    }
  }
  if (statePath === path) {
    switch (statePath) {
      case pathConts.DASHBOARD:
        return [{ name: "Dashboard", active: true }];
      case pathConts.LOGIN:
        return [{ name: "Login", active: true }];
    }
  }
};
export const subHeader = (path) => {
//   if (pathConts.DASHBOARD === path) {
//     return;
//   }
};

export const history = createBrowserHistory();
