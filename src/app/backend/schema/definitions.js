// export reusable definitions here

export const bookItem = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    selfLink: {
      type: 'string',
      pattern: '^https://www.googleapis.com/books/v1/volumes/[A-Za-z]+$'
    }
    // and so on ...
  }
};
