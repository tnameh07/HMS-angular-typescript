import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/auth.service';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'No token provided' });

  const [, token] = authHeader.split(' ');

  try {
    const decoded = AuthService.verifyToken(token);
    (req as any).user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export const roleMiddleware = (...allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = (req as any).user.role;
    if (allowedRoles.includes(userRole)) {
      next();
    } else {
      res.status(403).json({ message: 'Access forbidden' });
    }
  };
};