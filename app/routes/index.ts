import {Express} from 'express';

import TestRoute from './temp-route.js';

const API_VERSION = process.env.API_VERSION || '/v0';

export default (app: Express) => {
  app.use(API_VERSION, TestRoute);
};
