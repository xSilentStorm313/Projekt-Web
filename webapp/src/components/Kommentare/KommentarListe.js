import React from 'react';
import Comment from './Kommentar';

function CommentList({ comments, onEdit, onDelete }) {
  return (
    <div>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default CommentList;