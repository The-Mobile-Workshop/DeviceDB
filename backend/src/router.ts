import databaseGET from './routes/database/GET';
import databasePUT from './routes/database/PUT';
import changeAdminPasswordPOST from './routes/change-admin-password/POST';

import { Router } from 'express';

const router = Router();

router.get('/database', databaseGET);
router.put('/database', databasePUT);
router.post('/change-admin-password', changeAdminPasswordPOST);

export default router;
