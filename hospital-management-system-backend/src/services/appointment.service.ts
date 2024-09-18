import Appointment from '../models/appointment.model';

export class AppointmentService {
  static async createAppointment(appointmentData: any): Promise<Appointment> {
    return Appointment.create(appointmentData);
  }

  static async getAppointmentById(id: number): Promise<Appointment | null> {
    return Appointment.findByPk(id);
  }

  static async updateAppointment(id: number, appointmentData: any): Promise<[number, Appointment[]]> {
    return Appointment.update(appointmentData, { where: { id }, returning: true });
  }

  static async deleteAppointment(id: number): Promise<number> {
    return Appointment.destroy({ where: { id } });
  }

  static async getAllAppointments(): Promise<Appointment[]> {
    return Appointment.findAll();
  }

  static async getAppointmentsByPatient(patientId: number): Promise<Appointment[]> {
    return Appointment.findAll({ where: { patientId } });
  }

  static async getAppointmentsByStaff(staffId: number): Promise<Appointment[]> {
    return Appointment.findAll({ where: { staffId } });
  }
}