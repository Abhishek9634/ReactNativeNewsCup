/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, ActivityIndicator, Image} from 'react-native';

type Props = {};

const CustomListItem = ({ title, description, imageUrl }) => (
    <View style = {{flex: 1,
                   justifyContent: 'space-between',
                   flexDirection: 'column',
                   alignItems: 'stretch',
                   borderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#d6d7da', marginBottom: 10}}>
        <Image style = {{height: 200, resizeMode: 'contain'}}
            source = {{uri: imageUrl}}/>
        <Text style = {{fontSize: 14, fontWeight: "600", marginBottom: 5, marginTop: 10}}>{title}</Text>
        <Text style = {{fontSize: 12, marginBottom: 10}}>{description}</Text>
    </View>
);

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
      <View style={{flex: 1, paddingTop: 25, paddingLeft: 15, paddingRight: 15 , paddingBottom: 20}}>
        <FlatList
          data = { this.state.dataSource }
          renderItem = {({item}) => <CustomListItem
                                    title={item.title}
                                    description={item.description}
                                    imageUrl={item.urlToImage}/>}
          keyExtractor = {({id}, index) => id }
        />
      </View>
    );
  }
}