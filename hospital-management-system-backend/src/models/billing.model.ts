import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Patient from './appointment.model';
import Appointment from './appointment.model';

class Billing extends Model {
  public id!: number;
  public patientId!: number;
  public appointmentId!: number;
  public amount!: number;
  public status!: string;
  public billDate!: Date;
  public paidDate!: Date;
}

Billing.init({
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
  appointmentId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: Appointment,
      key: 'id',
    },
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  billDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  paidDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  sequelize,
  tableName: 'billings',
});

export default Billing;
