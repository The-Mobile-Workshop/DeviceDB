import { Request, Response } from 'express';
import db from '../../../utils/db';
import hash from '../../../utils/hash';

export default (req: Request, res: Response) => {
  try {
    if (
      hash(String(req.headers.authorization)) ===
      db.open()._secrets.adminPassword
    ) {
      const newDatabase = req.body;

      newDatabase._secrets = db.open()._secrets;

      db.save(newDatabase);

      res.json({
        message: 'Success',
        payload: null,
      });

      return;
    }

    res.status(401).json({
      message: 'Incorrect password',
      payload: null,
    });
  } catch {
    res.status(500).json({
      message: 'Internal server error',
      payload: null,
    });
  }
};
