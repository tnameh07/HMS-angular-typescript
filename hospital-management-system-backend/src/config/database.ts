import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('hms_database', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;