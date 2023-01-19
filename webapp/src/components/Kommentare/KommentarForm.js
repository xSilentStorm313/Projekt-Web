import React, { useState } from 'react';

function CommentForm({ onSubmit }) {
  const [text, setText] = useState('');

  return (
    <form onSubmit={e => {
      e.preventDefault();
      if (text.trim()) {
        onSubmit({ text, id: Date.now() });
        setText('');
      }
    }} className="form-container">
        <input type="text" name="Kommentar" className="kommentarInput" placeholder="Kommentar hinzufügen..." value={text} onChange={e => setText(e.target.value)}/>
      <br />
        <button type="submit" className={`submit-button`} disabled={!text.trim()}>Senden</button>
    </form>
  );

}

export default CommentForm;