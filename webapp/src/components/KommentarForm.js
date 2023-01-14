import React, { useState } from 'react';

function CommentForm({ onSubmit }) {
  const [text, setText] = useState('');

  return (
    <form onSubmit={e => {
      e.preventDefault();
      onSubmit({ text });
      setText('');
    }} className="form-container">
        <input type="text" name="Kommentar" className="kommentarInput" placeholder="Kommentar hinzufügen..." value={text} onChange={e => setText(e.target.value)}/>
      <br />
        <button type="submit" className="submit-button">Senden</button>
    </form>
  );
}

export default CommentForm;