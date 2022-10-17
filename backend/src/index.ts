import express from 'express';
import db from './utils/db';

db.createIfNotExist();

const port = process.env.PORT || 8080;

const server = express();

server.listen(port, () => console.log(`Started server at 0.0.0.0:${port}`));
