import settings from 'src/app/settings';
import log from 'loglevel';

let logLevel = settings.logLevel || 'warn';

// lib is missing .log method, patching to use .info
log.log = log.info;
log.setLevel(logLevel);

export default log;
