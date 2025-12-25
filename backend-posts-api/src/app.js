const express = require('express');
const cors = require('cors');
const postsRoutes = require('./routes/posts.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', postsRoutes);

module.exports = app;