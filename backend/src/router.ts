import databaseGET from './routes/database/GET';

import { Router } from 'express';

const router = Router();

router.get('/database', databaseGET);

export default router;
