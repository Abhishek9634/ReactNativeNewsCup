/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import { name as appName } from "./app.json";

Navigation.registerComponent(
  "FoxNews.Login", () => require("./CodeBase/Login/Login").default
);

Navigation.registerComponent(
  "FoxNews.NewsList", () => require("./CodeBase/News/NewsList").default
);

Navigation.registerComponent(
  "FoxNews.NewsDetails", () => require("./CodeBase/News/NewsDetails").default
);

Navigation.registerComponent(
  "FoxNews.Sources", () => require("./CodeBase/Source/Sources").default
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