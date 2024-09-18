import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Patient from './patient.model';
import MedicalStaff from './medicalStaff.model';

class MedicalRecord extends Model {
  public id!: number;
  public patientId!: number;
  public staffId!: number;
  public recordDate!: Date;
  public diagnosis!: string;
  public treatment!: string;
  public prescription!: string;
}

MedicalRecord.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  patientId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: Patient,
      key: 'id',
    },
  },
  staffId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: MedicalStaff,
      key: 'id',
    },
  },
  recordDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  diagnosis: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  treatment: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  prescription: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'medical_records',
});

export default MedicalRecord;
