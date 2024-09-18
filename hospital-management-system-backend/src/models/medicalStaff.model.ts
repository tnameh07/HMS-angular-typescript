import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import User from './user.model';

class MedicalStaff extends Model {
  public id!: number;
  public userId!: number;
  public firstName!: string;
  public lastName!: string;
  public specialization!: string;
  public contactNumber!: string;
}

MedicalStaff.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialization: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contactNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'medical_staff',
});

export default MedicalStaff;
