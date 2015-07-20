import Promise from 'src/app/utils/promise';


export function createHttpMock(data, status, headers, isSuccessful = true) {
  return () => {

    return {
      success(cb) {
        //console.log('in s', isSuccessful);
        isSuccessful && cb(data, status, headers);
        return this;
      },
      error(cb) {
        //console.log('in e', !isSuccessful);
        isSuccessful || cb(data, status, headers);
        return this;
      }
    };
  }
}
