import { Request, Response, NextFunction } from 'express';

export const middleware = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(400).json({
    status: 'error',
    name: error.name,
    message: error.message,
    path: error.path,
  });
};
