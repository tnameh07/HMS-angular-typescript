import { Request, Response } from 'express';
import { AppointmentService } from '../services/appointment.service';

export class AppointmentController {
  static async createAppointment(req: Request, res: Response) {
    try {
      const appointment = await AppointmentService.createAppointment(req.body);
      res.status(201).json(appointment);
    } catch (error) {
      res.status(500).json({ message: 'Error creating appointment', error });
    }
  }

  static async getAppointment(req: Request, res: Response) {
    try {
      const appointment = await AppointmentService.getAppointmentById(parseInt(req.params.id));
      if (appointment) {
        res.json(appointment);
      } else {
        res.status(404).json({ message: 'Appointment not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving appointment', error });
    }
  }

  static async updateAppointment(req: Request, res: Response) {
    try {
      const [updatedRows, [updatedAppointment]] = await AppointmentService.updateAppointment(parseInt(req.params.id), req.body);
      if (updatedRows > 0) {
        res.json(updatedAppointment);
      } else {
        res.status(404).json({ message: 'Appointment not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating appointment', error });
    }
  }

  static async deleteAppointment(req: Request, res: Response) {
    try {
      const deletedRows = await AppointmentService.deleteAppointment(parseInt(req.params.id));
      if (deletedRows > 0) {
        res.json({ message: 'Appointment deleted successfully' });
      } else {
        res.status(404).json({ message: 'Appointment not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error deleting appointment', error });
    }
  }

  static async getAllAppointments(req: Request, res: Response) {
    try {
      const appointments = await AppointmentService.getAllAppointments();
      res.json(appointments);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving appointments', error });
    }
  }

  static async getAppointmentsByPatient(req: Request, res: Response) {
    try {
      const appointments = await AppointmentService.getAppointmentsByPatient(parseInt(req.params.patientId));
      res.json(appointments);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving appointments', error });
    }
  }

  static async getAppointmentsByStaff(req: Request, res: Response) {
    try {
      const appointments = await AppointmentService.getAppointmentsByStaff(parseInt(req.params.staffId));
      res.json(appointments);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving appointments', error });
    }
  }
}