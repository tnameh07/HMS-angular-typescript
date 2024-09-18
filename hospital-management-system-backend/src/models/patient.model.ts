import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import User from './user.model';

class Patient extends Model {
  public id!: number;
  public userId!: number;
  public firstName!: string;
  public lastName!: string;
  public dateOfBirth!: Date;
  public gender!: string;
  public contactNumber!: string;
  public address!: string;
}

Patient.init({
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
  dateOfBirth: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  gender: {
    type: DataTypes.ENUM('male', 'female', 'other'),
    allowNull: false,
  },
  contactNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'patients',
});

Patient.belongsTo(User, { foreignKey: 'userId' });

export default Patient;