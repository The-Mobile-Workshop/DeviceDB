import { Request, Response } from 'express';
import db from '../../utils/db';
import hash from '../../utils/hash';

export default (req: Request, res: Response) => {
  const database = db.open();

  if (req.headers.authorization === database._secrets.adminPassword) {
    if (!req.body.newPassword) {
      res.status(400).json({
        message: 'New password is not given',
        payload: null,
      });

      return;
    }

    database._secrets.adminPassword = hash(req.body.newPassword);

    db.save(database);

    res.json({
      message: 'Success',
      payload: null,
    });

    return;
  }

  res.status(401).json({
    message: 'Unauthorized',
    payload: null,
  });
};
