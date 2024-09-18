import express from 'express';
import { MedicalStaffController } from '../controllers/medicalStaff.controller';
import { authMiddleware, roleMiddleware } from '../middleware/auth.middleware';

const router = express.Router();

router.use(authMiddleware);

router.post('/', roleMiddleware('admin'), MedicalStaffController.createMedicalStaff);
router.get('/:id', roleMiddleware('admin', 'medical_staff'), MedicalStaffController.getMedicalStaff);
router.put('/:id', roleMiddleware('admin'), MedicalStaffController.updateMedicalStaff);
router.delete('/:id', roleMiddleware('admin'), MedicalStaffController.deleteMedicalStaff);
router.get('/', roleMiddleware('admin', 'medical_staff'), MedicalStaffController.getAllMedicalStaff);

export default router;