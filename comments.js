// Create web server
// Run the server
// Create a route for the comments
// Create a route for the comments/:commentId
// Create a route for the comments/:commentId/replies
// Create a route for the comments/:commentId/replies/:replyId

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.json({ comments: [] });
});

app.get('/comments/:commentId', (req, res) => {
  res.json({ commentId: req.params.commentId });
});

app.get('/comments/:commentId/replies', (req, res) => {
  res.json({ commentId: req.params.commentId, replies: [] });
});

app.get('/comments/:commentId/replies/:replyId', (req, res) => {
  res.json({ commentId: req.params.commentId, replyId: req.params