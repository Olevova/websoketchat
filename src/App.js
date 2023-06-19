import { useEffect, useState } from 'react';
import './App.css';
import { CommentsForm } from './components/CommentsForm/CommentsForm';
import { CommentsList } from './components/CommentsList/CommentsList';
// import { getComments } from './service/datefetch';
import io from 'socket.io-client';

const socket = io('https://dummyjson.com');

function App() {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    socket.emit('getComments');
    socket.on('updateComments', (data) => {
      setComments(data);
    });
    const savedComment = localStorage.getItem('commentText');
    if (savedComment) {
      setCommentText(savedComment);
    }
    return () => {
      socket.off('updateComments');
    };
  }, []);

  const handleInputChange = (e) => {
    const text = e.target.value;
    setCommentText(text);
    localStorage.setItem('commentText', text);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (commentText.trim() !== '') {
    
      socket.emit('addComment', commentText);
      setCommentText('');
      localStorage.removeItem('commentText');
    }
  };

   const handleDelete = (id) => {
  
    socket.emit('deleteComment', id);
  };
  // console.log(data);

  return (
    <>
      <CommentsList comments={comments} onDelete={handleDelete} />
      <CommentsForm commentText={commentText}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit} />
    </>
  );
}

export default App;
