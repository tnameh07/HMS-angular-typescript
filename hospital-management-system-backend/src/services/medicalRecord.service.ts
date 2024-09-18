import MedicalRecord from '../models/medicalRecord.model';

export class MedicalRecordService {
  static async createMedicalRecord(recordData: any): Promise<MedicalRecord> {
    return MedicalRecord.create(recordData);
  }

  static async getMedicalRecordById(id: number): Promise<MedicalRecord | null> {
    return MedicalRecord.findByPk(id);
  }

  static async updateMedicalRecord(id: number, recordData: any): Promise<[number, MedicalRecord[]]> {
    return MedicalRecord.update(recordData, { where: { id }, returning: true });
  }

  static async deleteMedicalRecord(id: number): Promise<number> {
    return MedicalRecord.destroy({ where: { id } });
  }

  static async getAllMedicalRecords(): Promise<MedicalRecord[]> {
    return MedicalRecord.findAll();
  }

  static async getMedicalRecordsByPatient(patientId: number): Promise<MedicalRecord[]> {
    return MedicalRecord.findAll({ where: { patientId } });
  }
}