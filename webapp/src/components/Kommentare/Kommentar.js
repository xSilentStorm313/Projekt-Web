import React, { useState, useEffect } from 'react';
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

function Comment({ id, comment, onEdit, onDelete, showActions }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(comment.text);
  const [username, setUsername] = useState('');

  // Methode zum Abrufen des Benutzernamens
  const getUsername = async () => {
    try {
      const res = await fetch(`https://backend-projektweb.onrender.com/users/${comment.author}`);
      const data = await res.json();
      setUsername(data.benutzername);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUsername();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


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
          <p>Author: {username}</p>
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