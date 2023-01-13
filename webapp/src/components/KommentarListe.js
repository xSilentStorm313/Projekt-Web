import React from 'react';
import Comment from './Kommentar';

function CommentList({ comments }) {
  return (
    <div>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList;