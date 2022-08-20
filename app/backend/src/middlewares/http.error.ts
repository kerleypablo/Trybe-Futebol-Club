import { Response, Request } from 'express';

const Errors: { [key: string]: number } = {
  validationError: 400,
  unauthorized: 401,
  notFound: 404,
};

const httpError = (err: Error, req: Request, res: Response) => {
  const { name, message } = err;
  const status: number = Errors[name];
  if (!status) return res.status(500).json({ message: 'Internal server error' });
  return res.status(status).json({ message });
};

export default httpError;
