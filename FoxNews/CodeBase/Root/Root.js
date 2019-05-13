import { Navigation } from "react-native-navigation";

export const setupRootTabs = () =>
         Navigation.setRoot({
           root: {
             bottomTabs: {
               id: "FoxNews.RootTabBar",
               children: [
                 {
                   stack: {
                     id: "FoxNews.NewsNavigation",
                     children: [
                       {
                         component: {
                           name: "FoxNews.NewsList",
                           options: {
                             bottomTab: {
                               text: "News",
                               fontSize: 12,
                               icon: require("../Resources/Assets/ic_news.png")
                             }
                           }
                         }
                       }
                     ]
                   }
                 },
                 {
                   stack: {
                     id: "FoxNews.SourceNavigation",
                     children: [
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
               ]
             }
           }
         });
