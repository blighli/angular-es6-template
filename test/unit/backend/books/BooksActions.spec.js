import booksActions from 'src/app/backend/books/BooksActions';
import {setHttp} from 'src/app/utils/http';
import {createHttpMock} from 'test/unit/specHelper';
import latestBookFixture from 'test/unit/fixtures/latestBook.json!';
import restCommunication from 'src/app/backend/restCommunication';
import latestBookSchema from 'src/app/backend/schema/latestBook';

describe('booksActions', () => {

  it('emits the success event', done => {

    setHttp(createHttpMock(latestBookFixture, 200, {}, true));

    // use once or manually remove the listeners in beforeEach
    booksActions.once('fetchLatest.success', data => {
      expect(data).toEqual(latestBookFixture);
      expect(data.totalItems).toEqual(86);
      done();
    });

    booksActions.fetchLatest();
  });


  it('it emits the error event', done => {

    setHttp(createHttpMock(new Error('this is bad, so bad!'), 500, {}, false));

    // use once or manually remove the listeners in beforeEach
    booksActions.once('fetchLatest.error', (error) => {
      expect(error).toEqual(jasmine.any(Error));
      done();
    });

    booksActions.fetchLatest();
  });


  it('calls the correct url', () => {
    // if you want to try to test, if restCommunication was called with correct parameters, spyOn the request method
    spyOn(restCommunication, 'get').and.returnValue(createHttpMock(latestBookFixture, 200, {}, true));

    booksActions.fetchLatest();
    expect(restCommunication.get)
      .toHaveBeenCalledWith('https://www.googleapis.com/books/v1/volumes?q=subject:javascript&maxResults=1&orderBy=newest', {}, {
        schema: latestBookSchema
      });
  });

});
