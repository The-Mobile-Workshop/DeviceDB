import { Request, Response } from 'express';
import db from '../../utils/db';

export default (req: Request, res: Response) => {
  if (req.headers.authorization === db.open()._secrets.adminPassword) {
    try {
      const newDatabase = req.body;

      newDatabase._secrets = db.open()._secrets;

      db.save(newDatabase);

      res.json({
        message: 'Success',
        payload: null,
      });
    } catch {
      res.status(500).json({
        message: 'Internal server error',
        payload: null,
      });
    }

    return;
  }

  res.status(401).json({
    message: 'Unauthorized',
    payload: null,
  });
};
