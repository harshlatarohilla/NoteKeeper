import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Note from "../Note/Note";
import { notes } from "../Note/Notes";
function App() {

  return (
    <div>
      <Header />
      <h1>My notes</h1>
      {notes.map(
        ({ head, body }, idx) => (
        <Note key={idx} head={head} body={body} />
      )
      )}
      <Footer />
    </div>
  );
}
export default App;
