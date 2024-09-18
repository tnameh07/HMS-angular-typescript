import MedicalStaff from '../models/medicalStaff.model';

export class MedicalStaffService {
  static async createMedicalStaff(staffData: any): Promise<MedicalStaff> {
    return MedicalStaff.create(staffData);
  }

  static async getMedicalStaffById(id: number): Promise<MedicalStaff | null> {
    return MedicalStaff.findByPk(id);
  }

  static async updateMedicalStaff(id: number, staffData: any): Promise<[number, MedicalStaff[]]> {
    return MedicalStaff.update(staffData, { where: { id }, returning: true });
  }

  static async deleteMedicalStaff(id: number): Promise<number> {
    return MedicalStaff.destroy({ where: { id } });
  }

  static async getAllMedicalStaff(): Promise<MedicalStaff[]> {
    return MedicalStaff.findAll();
  }
}