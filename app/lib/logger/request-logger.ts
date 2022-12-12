import morgan from 'morgan';
import logger from './index';

// const format = ':requestId :method :url :status :response-time ms';
// morgan.token('requestId', request => request.id);

// morgan.token('requestId', (request: Request) => request.correlationId());
const format = ':method :url :status :response-time ms';

const options = {
  // stream: logger.stream,
  stream: {
    write: (message: string) => logger.info(message.trim()),
  },
};

export default morgan(format, options);
