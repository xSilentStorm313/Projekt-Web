import React, { useState } from 'react';

function Comment({ comment, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(comment.text);

  const handleSave = () => {
    onEdit(comment.id, text);
    setIsEditing(false);
  }

  const handleDelete = () => {
    onDelete(comment.id);
  }

  return (
    <div className="comment-container">
      {isEditing ? (
        <>
          <input type="text" className="kommentar-bearbeiten" value={text} onChange={e => setText(e.target.value)} />
          <button className="save-button" onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p className="comment-text">{comment.text}</p>
          <button className="edit-button" onClick={() => setIsEditing(true)}>Bearbeiten</button>
          <button className="delete-button" onClick={handleDelete}>Löschen</button>
        </>
      )}
    </div>
  );
}

export default Comment;