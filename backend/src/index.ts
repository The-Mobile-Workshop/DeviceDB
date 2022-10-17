import express from 'express';
import db from './utils/db';
import router from './router';

db.createIfNotExist();

const port = process.env.PORT || 8080;

const server = express();

server.use(router);

server.listen(port, () => console.log(`Started server at 0.0.0.0:${port}`));
