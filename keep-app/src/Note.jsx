import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
//import EditIcon from "@material-ui/icons/Edit";

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button className="btn" title="Delete note" onClick={deleteNote}>
          <DeleteIcon className="deleteicon" />
        </button>
      </div>
    </>
  );
};

export default Note;
