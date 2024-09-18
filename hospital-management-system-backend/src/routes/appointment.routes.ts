import express from 'express';
import { AppointmentController } from '../controllers/appointment.controller';
import { authMiddleware, roleMiddleware } from '../middleware/auth.middleware';

const router = express.Router();

router.use(authMiddleware);

router.post('/', roleMiddleware('admin', 'medical_staff'), AppointmentController.createAppointment);
router.get('/:id', roleMiddleware('admin', 'medical_staff', 'patient'), AppointmentController.getAppointment);
router.put('/:id', roleMiddleware('admin', 'medical_staff'), AppointmentController.updateAppointment);
router.delete('/:id', roleMiddleware('admin', 'medical_staff'), AppointmentController.deleteAppointment);
router.get('/', roleMiddleware('admin', 'medical_staff'), AppointmentController.getAllAppointments);
router.get('/patient/:patientId', roleMiddleware('admin', 'medical_staff', 'patient'), AppointmentController.getAppointmentsByPatient);
router.get('/staff/:staffId', roleMiddleware('admin', 'medical_staff'), AppointmentController.getAppointmentsByStaff);

export default router;