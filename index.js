const express = require('express');
const app = express();
const path = require('path');

// routers for filesystem
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'public', 'home.html')));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('.'))


app.listen(3000, (req, res) => console.log("server connected"));