import React, { useState, useEffect } from 'react';
import Comment from './Kommentar';
import CommentForm from './KommentarForm';

function CommentsList() {
  const [comments, setComments] = useState([]);
  const token = localStorage.getItem('token');
  const curentId = localStorage.getItem('user_id');

  useEffect(() => {
    fetch('https://backend-projektweb.onrender.com/comments')
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(error => console.log(error));
  }, []);

  const handleEdit = (id, text) => {
    fetch(`https://backend-projektweb.onrender.com/comments/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ text }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    .then(res => res.json())
    .then(data => {
        // Find the index of the edited comment
        const index = comments.findIndex(comment => comment._id === data._id);
        // Update the state with the updated comment
        const updatedComments = [...comments];
        updatedComments[index] = data;
        setComments(updatedComments);
    })
    .catch(error => console.log(error));
}

const handleDelete = (id) => {
    fetch(`https://backend-projektweb.onrender.com/comments/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        // Update the state to remove the deleted comment
        const updatedComments = comments.filter(comment => comment._id !== id);
        setComments(updatedComments);
      })
      .catch(error => console.log(error));
}


  const handleSubmit = (comment) => {
    fetch('https://backend-projektweb.onrender.com/comments', {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
      .then(res => res.json())
      .then(data => {
        // Add the new comment to the state
        console.log(comment);
        setComments([...comments, data]);
      })
      .catch(error => console.log(error));
  }
  return (
    <div>
      {comments.length ? (
        comments.filter( c => {
          return c.channel === window.location.href.split('/')[4];
        } ).map(comment => (
          <Comment
            key={comment._id}
            id={comment._id}
            comment={comment}
            onEdit={handleEdit}
            onDelete={handleDelete}
            showActions={comment.author && curentId === comment.author}
          />
        ))
      ) : (
        <p>Noch keine Kommentare vorhanden </p>
      )}
      <CommentForm onSubmit={handleSubmit} />
    </div>
  );
}


export default CommentsList;