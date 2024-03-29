import React, { useState } from 'react';
import CommentList from './KommentarListe';

function CommentSection() {
  const [comments, setComments] = useState([]);

  const onEdit = (id, text) => {
    const newComments = [...comments];
    const index = newComments.findIndex(c => c.id === id);
    newComments[index].text = text;
    setComments(newComments);
  }
  const onDelete = (id) => {
      setComments(comments.filter(comment => comment.id !== id));
  }
  
  return (
    <div>
      <CommentList comments={comments} onEdit={onEdit} onDelete={onDelete}/>
    </div>
  );
}

export default CommentSection;