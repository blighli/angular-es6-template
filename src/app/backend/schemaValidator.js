import Promise from 'src/app/utils/promise';
import settings from 'src/app/settings';
import validator from 'is-my-json-valid';
import logger from 'src/app/utils/logger';


export function validate(schemaFn, data) {
  if (settings.schemaValidationLevel > 0) {

    if (schemaFn(data)) {
      logger.debug('validation success', data);
      return Promise.resolve(data);
    } else {
      logger.warn('*************** validation failed ***************');
      logger.warn('original data', data);
      logger.warn('errors:');
      schemaFn.errors.map(error => logger.warn('field', error.field, ':', error.message));
      logger.warn('*************************************************');

      if (settings.schemaValidationLevel > 1) {
        return Promise.reject({
          data: data,
          errors: schemaFn.errors
        });
      } else {
        return Promise.resolve(data);
      }
    }

  }
}

export function generateSchemaFunction(schema) {
  return validator(schema);
}
