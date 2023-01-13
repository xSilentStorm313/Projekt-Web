import React, { useState } from 'react';
import CommentForm from './KommentarForm';
import CommentList from './KommentarListe';

function CommentSection() {
  const [comments, setComments] = useState([]);

  return (
    <div>
      <CommentList comments={comments} />
      <CommentForm onSubmit={comment => setComments([...comments, comment])} />
    </div>
  );
}

export default CommentSection;