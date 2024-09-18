import express from 'express';
import { BillingController } from '../controllers/billing.controller';
import { authMiddleware, roleMiddleware } from '../middleware/auth.middleware';

const router = express.Router();

router.use(authMiddleware);

router.post('/', roleMiddleware('admin', 'medical_staff'), BillingController.createBilling);
router.get('/:id', roleMiddleware('admin', 'medical_staff', 'patient'), BillingController.getBilling);
router.put('/:id', roleMiddleware('admin', 'medical_staff'), BillingController.updateBilling);
router.delete('/:id', roleMiddleware('admin'), BillingController.deleteBilling);
router.get('/', roleMiddleware('admin', 'medical_staff'), BillingController.getAllBillings);
router.get('/patient/:patientId', roleMiddleware('admin', 'medical_staff', 'patient'), BillingController.getBillingsByPatient);

export default router;