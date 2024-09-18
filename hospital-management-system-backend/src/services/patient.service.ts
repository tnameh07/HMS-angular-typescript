import Patient from '../models/patient.model';

export class PatientService {
  static async createPatient(patientData: any): Promise<Patient> {
    return Patient.create(patientData);
  }

  static async getPatientById(id: number): Promise<Patient | null> {
    return Patient.findByPk(id);
  }

  static async updatePatient(id: number, patientData: any): Promise<[number, Patient[]]> {
    return Patient.update(patientData, { where: { id }, returning: true });
  }

  static async deletePatient(id: number): Promise<number> {
    return Patient.destroy({ where: { id } });
  }

  static async getAllPatients(): Promise<Patient[]> {
    return Patient.findAll();
  }
}