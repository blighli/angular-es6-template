import booksStore from 'src/app/backend/books/BooksStore';
import booksActions from 'src/app/backend/books/BooksActions';
import Book from 'src/app/backend/books/Book';
import latestBookFixture from 'test/unit/fixtures/latestBook.json!';


describe('BooksStore', () => {

  describe('latest', () => {

    it('stores the latest book in state', (done) => {

      // use once or manually remove the listeners in beforeEach
      booksStore.once('change', () => {
        let book = booksStore.state.get('latest');
        expect(book).toEqual(jasmine.any(Book));
        expect(book.title).toEqual('JavaScript objektorientiert');
        done();
      });

      booksActions.emit('fetchLatest.success', latestBookFixture);
    });

  });



});
