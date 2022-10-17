import databaseGET from './routes/database/GET';
import databasePOST from './routes/database/POST';
import changeAdminPasswordPOST from './routes/change-admin-password/POST';

import { Router } from 'express';

const router = Router();

router.get('/database', databaseGET);
router.post('/database', databasePOST);
router.post('/change-admin-password', changeAdminPasswordPOST);

export default router;
