import React, { Component } from "react";
import ReactDOM from "react-dom";
import Book from "./Book.js";

const apiKey = "";

class SearchBox extends Component {
  state = {
    typing: false,
    query: "",
    searchRes: null
  };

  componentDidMount() {
    if (this.state.typing) ReactDOM.findDOMNode(this.refs.textDiv).focus();
  }

  componentDidUpdate() {
    if (this.state.typing) ReactDOM.findDOMNode(this.refs.textDiv).focus();
  }

  render() {
    return (
      <div>
        <div className="searchBox">{this.searchContent()}</div>
        {this.showResults()}
      </div>
    );
  }

  searchContent() {
    if (!this.state.typing) {
      return (
        <div className="searchContent" onClick={() => this.startTyping()}>
          Search all books in the world
          <span className="blinking-cursor">|</span>
        </div>
      );
    } else {
      return (
        <input
          ref="textDiv"
          className="searchContent"
          type="text"
          value={this.state.query}
          onChange={this.queryChange.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}
        />
      );
    }
  }

  startTyping() {
    this.setState({ typing: true });
  }

  queryChange(event) {
    this.setState({ query: event.target.value });
  }

  handleKeyPress(event) {
    if (event.key === "Enter") {
      this.search();
    }
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

export default SearchBox;
