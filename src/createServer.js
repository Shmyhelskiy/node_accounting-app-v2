'use strict';

import express from 'express';
import usersRouter from './routes/users.route.js';
import expensesRouter from './routes/expenses.route.js';

function createServer() {
  // Use express to create a server
  // Add a routes to the server
  // Return the server (express app)

  const app = express();

  app.use('/users', express.json(), usersRouter);

  app.use('/expenses', express.json(), expensesRouter);

  return app;
}

export { createServer };
