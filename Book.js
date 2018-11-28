import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Book extends React.Component {
  render() {
    return (
      <View style={styles.Book}>
        <Image
          style={styles.BookImage}
          source={{ uri: this.coverImage() }}
          alt={"book cover image of " + this.props.data.title}
        />
        <View style={styles.BookDesc}>
          <Text style={styles.BookTitle}>{this.props.data.title}</Text>
          <Text style={styles.BookAuthor}>by {this.props.data.authors}</Text>
          <Text style={styles.BookUnavilable}>
            Book not in current collection.
          </Text>
        </View>
      </View>
    );
  }

  coverImage() {
    let links = this.props.data.imageLinks;
    console.log("LINKS ARE ", links);
    if (links) return links.thumbnail;
    else return null;
  }
}

const styles = StyleSheet.create({
  Book: {},
  BookImage: {},
  BookDesc: {},
  BookTitle: {},
  BookAuthor: {},
  BookUnavilable: {}
});
