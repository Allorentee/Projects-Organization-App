import { Request, Response, NextFunction } from 'express';

export const setCors = (req, res, next) => {
  const origin = req.header('Origin') || '*';
  res.setHeader('Access-Control-Allow-Origin', origin);
  next();
};
