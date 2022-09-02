import React, { Component } from "react";
// import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Note from "../Note/Note";
import { notes } from "../Note/Notes";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: notes,
      head: "",
      body: "",
    };
  }
  createNote = () => {
    this.setState({
      notes: [
        { head: this.state.head, body: this.state.body },
        ...this.state.notes,
      ],
    });
  };
  handleHeadChange = (e) => {
    this.setState({ head: e.target.value });
  };
  handleBodyChange = (e) => {
    this.setState({ body: e.target.value });
  };
  render() {
    return (
      <div>
        <Header />

        <input
          type="text"
          value={this.state.head}
          onChange={this.handleHeadChange}
        />
        <input
          type="text"
          value={this.state.body}
          onChange={this.handleBodyChange}
        />
        <button type="submit" onClick={this.createNote}>
          New Note
        </button>
        {this.state.notes.map(({ head, body }, idx) => (
          <Note key={idx} head={head} body={body} />
        ))}
        <Footer />
      </div>
    );
  }
}

export default App;
// function App() {

//   return (
// <div>
//   <Header />
//   <h1>My notes</h1>
//   {notes.map(
//     ({ head, body }, idx) => (
//     <Note key={idx} head={head} body={body} />
//   )
//   )}
//   <Footer />
// </div>
//   );
// }
// export default App;
