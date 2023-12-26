import { NextFunction, Request, RequestHandler, Response } from 'express';

const catchAsync = (asyncFc: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(asyncFc(req, res, next)).catch((err) => next(err));
  };
};

export default catchAsync;
