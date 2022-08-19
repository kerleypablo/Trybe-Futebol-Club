import { NextFunction, Request, Response } from 'express';

class ErrorMidware extends Error {
  status: number;
  message: string;

  constructor(status: number, message: string) {
    super();
    this.message = message;
    this.status = status;
  }

  httpError = (err: Error, req: Request, res: Response, next: NextFunction) => {
    const { status, message } = err as ErrorMidware;

    res.status(status || 500).json({ message });
    next();
  };
}

export default ErrorMidware;
