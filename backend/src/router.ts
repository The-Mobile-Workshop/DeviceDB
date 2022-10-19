import databaseGET from './routes/database/GET';
import adminCheckPasswordPOST from './routes/admin/check-password/POST';
import adminChangePasswordPOST from './routes/admin/change-password/POST';
import adminModifyDatabasePOST from './routes/admin/modify-database/POST';

import { Router } from 'express';

const router = Router();

router.get('/database', databaseGET);
router.post('/admin/check-password', adminCheckPasswordPOST);
router.post('/admin/change-password', adminChangePasswordPOST);
router.post('/admin/modify-database', adminModifyDatabasePOST);

export default router;
