import appRoot from 'app-root-path';
import winston from 'winston';
const { combine, timestamp, label, printf } = winston.format;

const options = {
  file: {
    level: 'info',
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
    exitOnError: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
    exitOnError: false,
  },
};

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} ${label} ${level}: ${message}`;
});

export const logger = new winston.createLogger({
  format: combine(
      label({ label: '-' }),
      timestamp(),
      myFormat,
  ),
  transports: [
    new winston.transports.Console(options.console),
    new winston.transports.File(options.file),
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: 'exceptions.log' }),
  ],
});
