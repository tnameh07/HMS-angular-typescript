import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.model';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export class AuthService {
  static async registerUser(username: string, email: string, password: string, role: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    return User.create({ username, email, password: hashedPassword, role });
  }

  static async loginUser(username: string, password: string): Promise<string | null> {
    const user = await User.findOne({ where: { username } });
    if (!user) return null;

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return null;

    return jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1d' });
  }

  static verifyToken(token: string): any {
    return jwt.verify(token, JWT_SECRET);
  }
}