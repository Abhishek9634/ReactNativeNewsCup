import React, { Component } from "react";
import { Platform, Text, View } from "react-native";

type Props = {};
export default class App extends Component<Props> {

  static get options() {
    return {
      topBar: {
        title: {
          text: "News Details"
        }
      }
    };
  }

  render() {
    return (
      <View>
        <Text>DETAILS</Text>
      </View>
    );
  }
}
