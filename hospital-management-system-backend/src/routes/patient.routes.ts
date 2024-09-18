import express from 'express';
import { PatientController } from '../controllers/patient.controller';
import { authMiddleware, roleMiddleware } from '../middleware/auth.middleware';

const router = express.Router();

router.use(authMiddleware);

router.post('/', roleMiddleware('admin', 'medical_staff'), PatientController.createPatient);
router.get('/:id', roleMiddleware('admin', 'medical_staff', 'patient'), PatientController.getPatient);
router.put('/:id', roleMiddleware('admin', 'medical_staff'), PatientController.updatePatient);
router.delete('/:id', roleMiddleware('admin'), PatientController.deletePatient);
router.get('/', roleMiddleware('admin', 'medical_staff'), PatientController.getAllPatients);

export default router;