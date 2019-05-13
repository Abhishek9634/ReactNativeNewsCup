/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableWithoutFeedback
} from "react-native";

type Props = {};

class MyListItem extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "stretch",
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#d6d7da",
            marginBottom: 10
          }}
        >
          <Image
            style={{ height: 200, resizeMode: "contain" }}
            source={{ uri: this.props.item.urlToImage }}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              marginBottom: 5,
              marginTop: 10
            }}
          >
            {this.props.item.title}
          </Text>
          <Text style={{ fontSize: 12, marginBottom: 10 }}>
            {this.props.item.description}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default class NewsList extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    console.log("COMPONENT DID MOUNT");
    return fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=7b1568b218554e659e942bfed4c4e20d"
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson.articles);
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.articles
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  onPressItem = source => {
    alert("HI" + source.title);
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View
        style={{
          flex: 1,
          paddingTop: 25,
          paddingLeft: 15,
          paddingRight: 15,
          paddingBottom: 20
        }}
      >
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <MyListItem
              item={item}
              onPress={() => {
                this.onPressItem(item);
              }}
            />
          )}
          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
  }
}
