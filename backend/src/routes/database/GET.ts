import { Request, Response } from 'express';
import db from '../../utils/db';

export default (req: Request, res: Response) => {
  try {
    const database = db.open();

    delete database._secrets;

    res.json(database);
  } catch {
    res.status(500).json({
      message: 'Internal server error',
      payload: null,
    });
  }
};
