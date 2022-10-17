import express, { Request, Response } from 'express';

const port = process.env.PORT || 8080;

const server = express();

server.get('/', (req: Request, res: Response) => res.send('Hello, World!'));

server.listen(port, () => console.log(`Started server at 0.0.0.0:${port}`));
