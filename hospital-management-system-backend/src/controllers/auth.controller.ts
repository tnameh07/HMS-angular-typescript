import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const { username, email, password, role } = req.body;
      const user = await AuthService.registerUser(username, email, password, role);
      res.status(201).json({ message: 'User registered successfully', userId: user.id });
    } catch (error) {
      res.status(500).json({ message: 'Error registering user', error });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const token = await AuthService.loginUser(username, password);
      if (token) {
        res.json({ token });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error logging in', error });
    }
  }
}