import { Request, Response } from 'express';
import db from '../../../utils/db';
import hash from '../../../utils/hash';

export default (req: Request, res: Response) => {
  try {
    const database = db.open();

    if (hash(req.body.password) === database._secrets.adminPassword) {
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
