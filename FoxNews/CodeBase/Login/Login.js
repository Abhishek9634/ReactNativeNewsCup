
import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";

type Props = {};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: "",
      password: ""
    };
  }

  buttonAction = () => {
    if (this.state.emailId == "" || this.state.password == "") {
      alert("Empty Credentials");
      return;
    }
    alert(this.state.emailId + ", " + this.state.password);
  };

  render() {
    return (
      <ImageBackground
        source={require("./CodeBase/Assets/login_bg.png")}
        style={styles.container}
      >
        <View style={styles.superView}>
          <TextInput
            placeholder="Username"
            style={styles.inputText1}
            onChangeText={text => this.setState({ emailId: text })}
            value={this.state.emailId}
          />
          <TextInput
            placeholder="Password"
            style={styles.inputText2}
            onChangeText={text => this.setState({ password: text })}
            value={this.state.password}
          />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={this.buttonAction}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover"
  },
  superView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  inputText1: {
    height: 40,
    width: "80%",
    backgroundColor: "#f2f2f2",
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
    fontFamily: "Foco",
    fontSize: 14,
    fontWeight: "400",
    borderRadius: 4
  },
  inputText2: {
    height: 40,
    width: "80%",
    backgroundColor: "#f2f2f2",
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: "Foco",
    fontSize: 14,
    fontWeight: "400",
    borderRadius: 4
  },
  loginText: {
    color: "#ffffff",
    fontFamily: "Foco",
    fontSize: 14,
    fontWeight: "600"
  },
  loginButton: {
    height: 40,
    width: "50%",
    backgroundColor: "#005CAC",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    borderRadius: 4
  }
});
