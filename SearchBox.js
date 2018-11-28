import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput
} from "react-native";
import Book from "./Book.js";

export default class SearchBox extends React.Component {
  state = {
    typing: false,
    query: "",
    searchRes: null
  };

  render() {
    return (
      <View>
        <View style={styles.searchBox}>{this.searchContent()}</View>
        {this.showResults()}
      </View>
    );
  }

  searchContent() {
    return (
      <TextInput
        ref="textDiv"
        placeholder="Search all books in the world"
        style={styles.searchText}
        value={this.state.query}
        onChangeText={text => this.setState({ query: text })}
        onSubmitEditing={() => this.search()}
      />
    );
  }

  search() {
    //TODO
    // API call is https://www.googleapis.com/books/v1/volumes?q=intitle:
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=intitle:" +
        this.state.query +
        "&key=AIzaSyB4YWu-lpr0OzS6xaaBpUZV0X79sO5QRmc"
    )
      .then(response => response.json())
      .then(data => this.setState({ searchRes: data.items }));
  }

  showResults() {
    if (this.state.searchRes) {
      return this.state.searchRes.map(book => (
        <Book data={book.volumeInfo} key={book.id} />
      ));
    }
  }
}

const styles = StyleSheet.create({
  searchBox: {
    marginTop: 20,
    borderRadius: 16,
    borderWidth: 3,
    width: "100%",
    padding: 14,
    paddingTop: 10,
    paddingLeft: 20
  },
  searchText: {
    color: "#000",
    fontSize: 20,
    fontFamily: "Playfair Display"
  },
  searchContent: {}
});
