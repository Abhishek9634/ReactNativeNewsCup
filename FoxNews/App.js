/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
      console.log("COMPONENT DID MOUNT");
      return fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=7b1568b218554e659e942bfed4c4e20d')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.articles);
        this.setState({
          isLoading: false,
          dataSource: responseJson.articles,
        }, function(){ });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
      if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, padding:20}}>
        <FlatList
          data = { this.state.dataSource }
          renderItem = {({item}) => <Text>{item.title}, {item.publishedAt}</Text>}
          keyExtractor = {({id}, index) => id }
        />
      </View>
    );
  }
}