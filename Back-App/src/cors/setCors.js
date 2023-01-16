export const setCors = (req, res, next) => {
  const origin = req.header('Origin') || '*';
  res.setHeader('Access-Control-Allow-Origin', origin);
  next();
};
