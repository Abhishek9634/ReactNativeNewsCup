/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import { name as appName } from "./app.json";

Navigation.registerComponent(
  "FoxNews.Login", () => require("./CodeBase/Login/Login").default
);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "FoxNews.Login"
      }
    }
  });
});