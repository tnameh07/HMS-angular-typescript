import express from 'express';
import { MedicalRecordController } from '../controllers/medicalRecord.controller';
import { authMiddleware, roleMiddleware } from '../middleware/auth.middleware';

const router = express.Router();

router.use(authMiddleware);

router.post('/', roleMiddleware('admin', 'medical_staff'), MedicalRecordController.createMedicalRecord);
router.get('/:id', roleMiddleware('admin', 'medical_staff'), MedicalRecordController.getMedicalRecord);
router.put('/:id', roleMiddleware('admin', 'medical_staff'), MedicalRecordController.updateMedicalRecord);
router.delete('/:id', roleMiddleware('admin'), MedicalRecordController.deleteMedicalRecord);
router.get('/', roleMiddleware('admin', 'medical_staff'), MedicalRecordController.getAllMedicalRecords);
router.get('/patient/:patientId', roleMiddleware('admin', 'medical_staff'), MedicalRecordController.getMedicalRecordsByPatient);

export default router;