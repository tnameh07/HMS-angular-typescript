import { Request, Response } from 'express';
import { MedicalRecordService } from '../services/medicalRecord.service';

export class MedicalRecordController {
  static async createMedicalRecord(req: Request, res: Response) {
    try {
      const record = await MedicalRecordService.createMedicalRecord(req.body);
      res.status(201).json(record);
    } catch (error) {
      res.status(500).json({ message: 'Error creating medical record', error });
    }
  }

  static async getMedicalRecord(req: Request, res: Response) {
    try {
      const record = await MedicalRecordService.getMedicalRecordById(parseInt(req.params.id));
      if (record) {
        res.json(record);
      } else {
        res.status(404).json({ message: 'Medical record not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving medical record', error });
    }
  }

  static async updateMedicalRecord(req: Request, res: Response) {
    try {
      const [updatedRows, [updatedRecord]] = await MedicalRecordService.updateMedicalRecord(parseInt(req.params.id), req.body);
      if (updatedRows > 0) {
        res.json(updatedRecord);
      } else {
        res.status(404).json({ message: 'Medical record not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating medical record', error });
    }
  }

  static async deleteMedicalRecord(req: Request, res: Response) {
    try {
      const deletedRows = await MedicalRecordService.deleteMedicalRecord(parseInt(req.params.id));
      if (deletedRows > 0) {
        res.json({ message: 'Medical record deleted successfully' });
      } else {
        res.status(404).json({ message: 'Medical record not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error deleting medical record', error });
    }
  }

  static async getAllMedicalRecords(req: Request, res: Response) {
    try {
      const records = await MedicalRecordService.getAllMedicalRecords();
      res.json(records);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving medical records', error });
    }
  }

  static async getMedicalRecordsByPatient(req: Request, res: Response) {
    try {
      const records = await MedicalRecordService.getMedicalRecordsByPatient(parseInt(req.params.patientId));
      res.json(records);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving medical records', error });
    }
  }
}