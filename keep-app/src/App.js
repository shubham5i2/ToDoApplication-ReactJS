import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
/*import SideNav from "./SideNav";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";*/
import CreateNote from "./CreateNote";
import Note from "./Note";
//import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
    console.log(note);
  };

  const onDelete = (id) => {
    setAddItem((oldData) => {
      oldData.filter((currData, indx) => {
        return indx !== id;
      });
    });
  };
  return (
    <div>
      <div>
        <Header />
        <CreateNote passNote={addNote} />

        {addItem.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          );
        })}

        <Footer />
      </div>
    </div>
  );
};

export default App;
