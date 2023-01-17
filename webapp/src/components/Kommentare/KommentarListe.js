import React, { useState, useEffect } from 'react';
import Comment from './Kommentar';
import CommentForm from './KommentarForm';

function CommentsList() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/comments')
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(error => console.log(error));
  }, []);

  const handleEdit = (id, text) => {
    fetch(`http://localhost:3001/comments/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ text }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => {
        // Update the state with the updated comment
        const updatedComments = comments.map(comment => {
          if (comment.id === data.id) {
            return data;
          }
          return comment;
        });
        setComments(updatedComments);
      })
      .catch(error => console.log(error));
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/comments/${id}`, {
      method: 'DELETE',
          })
          .then(res => res.json())
    .then(data => {
      // Update the state to remove the deleted comment
      const updatedComments = comments.filter(comment => comment.id !== id);
      setComments(updatedComments);
    })
    .catch(error => console.log(error));
}

const handleSubmit = (comment) => {
  fetch('http://localhost:3001/comments', {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(data => {
      // Add the new comment to the state
      setComments([...comments, data]);
    })
    .catch(error => console.log(error));
}

return (
  <div>
    <CommentForm onSubmit={handleSubmit} />
    {comments.length ? (
      comments.map(comment => (
        <Comment
          key={comment.id}
          comment={comment}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))
    ) : (
      <p>No comments yet</p>
    )}
  </div>
);
}

export default CommentsList;