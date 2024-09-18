import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Patient from './patient.model';
import MedicalStaff from './medicalStaff.model';

class Appointment extends Model {
  public id!: number;
  public patientId!: number;
  public staffId!: number;
  public appointmentTime!: Date;
  public status!: string;
  public notes!: string;
}

Appointment.init({
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
  appointmentTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  sequelize,
  tableName: 'appointments',
});

export default Appointment;
