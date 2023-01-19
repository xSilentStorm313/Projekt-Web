import React, { useState } from 'react';
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

function Comment({id, comment, onEdit, onDelete, showActions}) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(comment.text);

  const handleSave = () => {
    console.log(id);
    onEdit(id, text);
    setIsEditing(false);
  }

  const handleDelete = () => {
    onDelete(id);
  }
  return (
    <div className="comment-container">
      {isEditing ? (
        <>
          <input type="text" className="kommentar-bearbeiten" value={text} onChange={e => setText(e.target.value)} />
          <button className="save-button" onClick={handleSave}>Speichern</button>
        </>
      ) : (
        <>
          <p className="comment-text">{comment.text}</p>
          {showActions && ( // Only show the edit and delete buttons if showActions is true
            <>
              <button className="edit-button" onClick={() => setIsEditing(true)}><FiEdit size={20} /></button>
              <button className="delete-button" onClick={handleDelete}><AiOutlineDelete size={23} /></button>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Comment;