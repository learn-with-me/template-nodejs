import winston from 'winston';
import 'winston-daily-rotate-file/index';
import CONFIG from './logger-config';

const {combine, timestamp, label} = winston.format;
const {printf, colorize, simple} = winston.format;
const myFormat = printf(
  ({level, message, label, timestamp}) => `${timestamp} [${label}] ['app'] ${level}: ${message}`,
);

// Ignore log messages if they have { private: true }
const ignorePrivate = winston.format((info) => {
  if (info.private) {
    return false;
  }
  return info;
});

const NODE_ENV: string = process.env.NODE_ENV || 'development';

// define the custom settings for each transport (file, console)
const options = {
  application: {
    level: CONFIG[NODE_ENV].log.level,
    filename: CONFIG[NODE_ENV].log.applicationFile,
    handleExceptions: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    format: combine(
      ignorePrivate(),
      label({label: CONFIG.log_label}),
      timestamp(),
      winston.format.json(),
    ),
  },
  exception: {
    level: CONFIG[NODE_ENV].log.level,
    filename: CONFIG[NODE_ENV].log.errorFile,
    handleExceptions: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    format: combine(
      ignorePrivate(),
      label({label: CONFIG.log_label}),
      timestamp(),
      winston.format.json(),
    ),
  },
  console: {
    level: CONFIG[NODE_ENV].log.level,
    handleExceptions: true,
    format: combine(label({label: CONFIG.log_label}), colorize(), simple(), timestamp(), myFormat),
  },
};

const applicationTransports = [
  new winston.transports.DailyRotateFile(options.application),
  new winston.transports.Console(options.console),
];

// instantiate a new Winston Logger with the settings defined above
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: applicationTransports,
  exceptionHandlers: [new winston.transports.DailyRotateFile(options.exception)],
  exitOnError: false, // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
// TODO: had some issue here. Changed for now
// Streaming allows you to stream your logs back from your chosen transport.
logger.stream({start: -1}).on('log', function (log) {
  console.log(log);
});

export default logger;
