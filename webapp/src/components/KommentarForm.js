import React, { useState } from 'react';

function CommentForm({ onSubmit }) {
  const [text, setText] = useState('');

  return (
    <form onSubmit={e => {
      e.preventDefault();
      onSubmit({ text });
      setText('');
    }} className="form-container">
        <textarea placeholder="Kommentar schreiben..." value={text} onChange={e => setText(e.target.value)} className="kommentarInput" />
      <br />
        <button type="submit" className="submit-button">Senden</button>
    </form>
  );
}

export default CommentForm;