import { Request, Response } from 'express';
import db from '../../utils/db';

export default (req: Request, res: Response) => {
  res.json(db.open());
};
