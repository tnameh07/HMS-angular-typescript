import express from 'express';
import { json, urlencoded } from 'body-parser';
import syncDatabase from './config/db-sync';
import authRoutes from './routes/auth.routes';
import patientRoutes from './routes/patient.routes';
import medicalStaffRoutes from './routes/medicalStaff.routes';
import appointmentRoutes from './routes/appointment.routes';
import medicalRecordRoutes from './routes/medicalRecord.routes';
import billingRoutes from './routes/billing.routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/medical-staff', medicalStaffRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/medical-records', medicalRecordRoutes);
app.use('/api/billings', billingRoutes);

app.get('/', (req, res) => {
  res.send('Hospital Management System API');
});

syncDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});

export default app;