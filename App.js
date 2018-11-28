import React from "react";
import { Font } from "expo";
import SearchBox from "./SearchBox.js";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView
} from "react-native";

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      "Playfair Display": require("./assets/fonts/PlayfairDisplay.ttf"),
      Lato: require("./assets/fonts/Lato.ttf")
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return this.state.fontLoaded ? (
      <ScrollView>
        <KeyboardAvoidingView
          style={styles.container}
          keyboardVerticalOffset={50}
          behavior="position"
        >
          <View style={styles.app}>
            <Image
              style={styles.logo}
              resizeMode="cover"
              source={require("./assets/reader.svg")}
            />
            <Text style={styles.title}>Paper</Text>
            <Text style={styles.title}>& Words</Text>
            <View style={styles.subtitleWrapper}>
              <Text style={styles.subtitle}>
                a free library traveling book truck of Pittsburgh, PA
              </Text>
            </View>
            <SearchBox />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    ) : null;
  }
}
//fontFamily: '"Playfair Display", serif',
//fontFamily: '"Lato", sans-serif',
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  app: {
    textAlign: "center",
    backgroundColor: "white",
    padding: 10,
    alignItems: "center"
  },
  logo: {
    width: "20%",
    height: "20%",
    margin: "auto",
    justifyContent: "center"
  },
  title: {
    fontSize: 70,
    fontFamily: "Playfair Display"
  },
  subtitleWrapper: {
    marginTop: 15,
    backgroundColor: "#000",
    justifyContent: "center"
  },
  subtitle: {
    fontSize: 14,
    color: "white",
    margin: "auto",
    padding: 5,
    textTransform: "uppercase",
    fontFamily: "Lato"
  }
});
