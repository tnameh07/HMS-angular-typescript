import { Request, Response } from 'express';
import { MedicalStaffService } from '../services/medicalStaff.service';

export class MedicalStaffController {
  static async createMedicalStaff(req: Request, res: Response) {
    try {
      const staff = await MedicalStaffService.createMedicalStaff(req.body);
      res.status(201).json(staff);
    } catch (error) {
      res.status(500).json({ message: 'Error creating medical staff', error });
    }
  }

  static async getMedicalStaff(req: Request, res: Response) {
    try {
      const staff = await MedicalStaffService.getMedicalStaffById(parseInt(req.params.id));
      if (staff) {
        res.json(staff);
      } else {
        res.status(404).json({ message: 'Medical staff not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving medical staff', error });
    }
  }

  static async updateMedicalStaff(req: Request, res: Response) {
    try {
      const [updatedRows, [updatedStaff]] = await MedicalStaffService.updateMedicalStaff(parseInt(req.params.id), req.body);
      if (updatedRows > 0) {
        res.json(updatedStaff);
      } else {
        res.status(404).json({ message: 'Medical staff not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating medical staff', error });
    }
  }

  static async deleteMedicalStaff(req: Request, res: Response) {
    try {
      const deletedRows = await MedicalStaffService.deleteMedicalStaff(parseInt(req.params.id));
      if (deletedRows > 0) {
        res.json({ message: 'Medical staff deleted successfully' });
      } else {
        res.status(404).json({ message: 'Medical staff not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error deleting medical staff', error });
    }
  }

  static async getAllMedicalStaff(req: Request, res: Response) {
    try {
      const staff = await MedicalStaffService.getAllMedicalStaff();
      res.json(staff);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving medical staff', error });
    }
  }
}