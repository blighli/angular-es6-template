import {generateSchemaFunction} from 'src/app/backend/schemaValidator';
import {bookItem} from './definitions';

// see
// http://spacetelescope.github.io/understanding-json-schema/index.html
// for a good basic starting point on JSON schema

// generate a schema validation function to allow the schema to be precompiled -> lots faster
export default generateSchemaFunction({
  required: true,
  type: 'object',
  additionalProperties: false,

  properties: {
    kind: {
      type: 'string',
      pattern: '^books#volumes$'

    },
    totalItems: {
      type: 'number'
    },
    items: {
      type: 'array',
      minItems: 1,
      items: bookItem
    }

  }
});
