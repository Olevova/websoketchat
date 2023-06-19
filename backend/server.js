const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const axios = require('axios');

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('getComments', () => {
    // Отримання списку коментарів та відправлення їх клієнту
    const comments = getCommentsFromSource();
    socket.emit('updateComments', comments);
  });

  socket.on('addComment', (comment) => {
    // Збереження коментаря та оповіщення всіх клієнтів
    saveComment(comment);
    io.emit('newComment', comment);
  });

  socket.on('deleteComment', (commentId) => {
    // Видалення коментаря та оповіщення всіх клієнтів
    deleteComment(commentId);
    io.emit('deletedComment', commentId);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Запуск сервера
http.listen(5000, () => {
  console.log('Server started on port 5000');
});


function getCommentsFromSource() {
    return axios.get('')
    .then(response => response.data.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
  
}

function saveComment(comment) {
  
}

function deleteComment(commentId) {

}
