import sequelize from './database';
import User from '../models/user.model';
import Patient from '../models/patient.model';
// Import other models

async function syncDatabase() {
  try {
    await sequelize.sync({ force: true }); // Be careful with {force: true} in production!
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Unable to synchronize the database:', error);
  }
}

export default syncDatabase;