import { Request, Response } from 'express';
import { PatientService } from '../services/patient.service';

export class PatientController {
  static async createPatient(req: Request, res: Response) {
    try {
      const patient = await PatientService.createPatient(req.body);
      res.status(201).json(patient);
    } catch (error) {
      res.status(500).json({ message: 'Error creating patient', error });
    }
  }

  static async getPatient(req: Request, res: Response) {
    try {
      const patient = await PatientService.getPatientById(parseInt(req.params.id));
      if (patient) {
        res.json(patient);
      } else {
        res.status(404).json({ message: 'Patient not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving patient', error });
    }
  }

  static async updatePatient(req: Request, res: Response) {
    try {
      const [updatedRows, [updatedPatient]] = await PatientService.updatePatient(parseInt(req.params.id), req.body);
      if (updatedRows > 0) {
        res.json(updatedPatient);
      } else {
        res.status(404).json({ message: 'Patient not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating patient', error });
    }
  }

  static async deletePatient(req: Request, res: Response) {
    try {
      const deletedRows = await PatientService.deletePatient(parseInt(req.params.id));
      if (deletedRows > 0) {
        res.json({ message: 'Patient deleted successfully' });
      } else {
        res.status(404).json({ message: 'Patient not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error deleting patient', error });
    }
  }

  static async getAllPatients(req: Request, res: Response) {
    try {
      const patients = await PatientService.getAllPatients();
      res.json(patients);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving patients', error });
    }
  }
}