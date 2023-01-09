import express from 'express';

const app = express();
const port = 3030;

app.listen(port, () => {
    return console.log('Server is Up!');
});