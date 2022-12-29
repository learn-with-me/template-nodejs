import pino from 'pino';
import {AsyncLocalStorage} from 'async_hooks';

const context = new AsyncLocalStorage<Map<string, any>>();

// import CONFIG from './logger-config';

// Create a logging instance
const logger_instance = pino({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
});

// Proxify logger instance to use child logger from context if it exists
export const logger = new Proxy(logger_instance, {
  get(target, property, receiver) {
    target = context.getStore()?.get('logger') || target;
    return Reflect.get(target, property, receiver);
  },
});

// Generate a unique ID for each incoming request and store a child logger in context
// to always log the request ID
// export const contextMiddleware = (req: Request, res: Response, next: NextFunction) => {
//   const child = logger.child({ requestId: uuid.v4() })
//   const store = new Map()
//   store.set('logger', child)

//   return context.run(store, next)
// }
