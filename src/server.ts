import express from 'express';
import reflect from 'reflect-metadata';

const app = express();
const port = 3030;

app.listen(port, () => {
    return console.log('Server is Up!');
});