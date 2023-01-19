import React, { useState } from 'react';

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
              <button className="edit-button" onClick={() => setIsEditing(true)}>Bearbeiten</button>
              <button className="delete-button" onClick={handleDelete}>Löschen</button>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Comment;