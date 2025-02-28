//const winston = require('winston');
import  winston  from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});


logger.info('Info message');
logger.error('Error message');
logger.warn('Warning message');
