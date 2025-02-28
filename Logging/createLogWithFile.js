import winston from 'winston';

// Custom format to filter log levels strictly
const filterByLevel = (level) => {
  return winston.format((info) => {
    return info.level === level ? info : false;
  })();
};

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()  // Keep logs structured in JSON format for log files
  ),
  transports: [
    // Console transport (with readable format)
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()  // More readable format for console
      )
    }),

    // Log only `info` level messages to info.log
    new winston.transports.File({ 
      filename: 'info.log', 
      format: filterByLevel('info')
    }),

    // Log only `warn` level messages to warn.log
    new winston.transports.File({ 
      filename: 'warn.log', 
      format: filterByLevel('warn')
    }),

    // Log only `error` level messages to error.log
    new winston.transports.File({ 
      filename: 'error.log', 
      format: filterByLevel('error')
    }),
  ],
});

// Example log messages
logger.info('Info message');   // Goes to info.log
logger.warn('Warning message'); // Goes to warn.log
logger.error('Error message');  // Goes to error.log
