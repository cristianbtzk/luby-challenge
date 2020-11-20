import express from 'express';
import 'express-async-errors';

import AppError from './errors/AppError';
import routes from './routes';
import './database';

const server = express();

server.use(express.json());

server.use(routes);

server.use((err, request, response, _) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

server.listen(3333);
