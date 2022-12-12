import express from 'express';
import {Express, NextFunction, Request, Response} from 'express';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
// import responseTime from "response-time";

import dotenv from 'dotenv';

dotenv.config();

// Default node environment if the environment variable is missing
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// import logger from './lib/logger';
// import requestLogger from './lib/logger/request-logger';

const app: Express = express();

app.enable('trust proxy');

// Secure express app
app.use(helmet());
app.use(helmet.referrerPolicy({policy: 'same-origin'}));
// Enable All CORS Requests
app.use(cors());

// Add response time in headers
// app.use(responseTime());

// Logs
// app.use(requestLogger);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Application Started!').end();
});

import routes from './routes';
routes(app);

// catch 404 and forward to error handler
app.use((req: Request, res: Response) => {
  res.setHeader('User', 'Invalid');
  res.status(404).send({
    code: 404,
    description: 'Requested path not found',
  });
});

// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   res.status(err.status || 500).send(err);
//   next(err);
// });

const PORT = process.env.PORT || 7001;
app.listen(PORT, () => {
  // logger.info(`We are live on ${PORT}`);
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
