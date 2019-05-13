
import { Navigation } from "react-native-navigation";

export const setupRootTabs = () =>
         Navigation.setRoot({
           root: {
             bottomTabs: {
               id: "FoxNews.RootTabBar",
               children: [
                 {
                   component: {
                     name: "FoxNews.NewsList",
                     options: {
                       bottomTab: {
                         fontSize: 12,
                         text: "News",
                         icon: require("../Resources/Assets/ic_news.png")
                       }
                     }
                   }
                 },
                 {
                   component: {
                     name: "FoxNews.NewsList",
                     options: {
                       bottomTab: {
                         text: "Source",
                         fontSize: 12,
                         icon: require("../Resources/Assets/ic_source.png")
                       }
                     }
                   }
                 }
               ]
             }
           }
         });
